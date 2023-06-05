import React, { useEffect, useState } from 'react';
import './Expense.css';
import Expense from './Expense';
import AddExpense from './AddExpense';
import TransitionHistory from './TransitionHistory';
import { randomID } from '../util';
import {useParams} from 'react-router-dom';
import db from '../firebase'
import ActivePremium from './ActivePremium';

const TransactionData= {}
const ExpenseTracker = ({theme, toggleTheme, onSwitch}) => {
  const {id}= useParams()

  const [income, setIncome]= useState(0);
  const [expense, setExpense]= useState(0);
  const [transactions, setTransactions]= useState(TransactionData);

 

  // const getData=()=> {
  //   fetch('https://auth-51bda-default-rtdb.asia-southeast1.firebasedatabase.app/data.json',{
  //     method: 'GET',  
  //   }).then(response=> response.json()).then(data => {
  //     if(data){
  //       const newData= Object.entries(data).map(([id, value]) => ({id, ...value}))
      
  //       setTransactions(newData)
     
  //     }
  //   }).catch(err => {
  //     console.log(err);
  //   })
  // }
  // useEffect(()=> {
    
  //   getData()
  //   // CalculateExpense()
  //   // let localState= JSON.parse(localStorage.getItem('data'))
  //   // if(localState){
  //   //   setTransactions(localState)
  //   // }else{
  //   //   CalculateExpense()
  //   // }
    
  // },[]);

  useEffect(()=> {
    db.child('data').on('value', (snapshot)=> {
      if(snapshot.val()!= null){
        setTransactions({...snapshot.val()})
      }else{
        setTransactions('')
      }
    })
    
    // return ()=> {
    //   setTransactions([])
     
    // }
   
   
  }, [])

 
  
  


  useEffect(()=> {
    CalculateExpense()
   
  },[transactions])

 
 
  const CalculateExpense=()=> {
    let income=0, expense = 0;
    {Object.keys(transactions).map((id, index)=>{
     
         if(transactions[id].type === 'income'){
    income+= transactions[id].amount
  }else if(transactions[id].type=== 'expense'){
    expense+= transactions[id].amount
  }
     
})

    
    }
    
  
    setIncome(income)
    setExpense(expense)
    
  }
  
  
  const handleNewTransaction= item=> {
    let oldTransactions= [...transactions, item ]
    setTransactions(oldTransactions);
   
  }


  function handleDelete(id){
    if(window.confirm("Are You sure ?")){
      db.child(`data/${id}`).remove((err)=> {
        // const newUpdatedTransaction= transactions.filter((item)=> item.id !== id)
        // setTransactions(newUpdatedTransaction)
        if(err){
         console.log(err);
        }else{
         console.log('Data Deleted Successfully')
        }
      })
    }
  
  }
  // const handleDelete=(id)=> {
  //   fetch(`https://auth-51bda-default-rtdb.asia-southeast1.firebasedatabase.app/data/${id}`,{
  //     method: 'DELETE'
  //   }).then((response)=> {
  //     if(response.ok){
  //       console.log('Deleted Successfully');
  // //       const newUpdatedTransaction= transactions.filter((item)=> item.id !== id)
  // //  setTransactions(newUpdatedTransaction)
       
  //     }else{
  //       throw new Error('Failed to Delete')
  //     }
     
  //   }).catch(err=> {
  //     console.log(err);
  //   })
   
  // }

 
 
  
  
  return (
    <>
    <ActivePremium income={income} theme={theme} toggleTheme={toggleTheme} onSwitch={onSwitch} />
    <div  className='expenseMain'>
    <h2 className='exp'>Expense Tracker</h2>
    <div className='add'>
    
    <AddExpense newTransaction= {transactions} />
    <Expense income={income} expense={expense} />
   
    </div>
    <TransitionHistory transactions={transactions} onDelete={handleDelete} />
    </div>
    </>
  )
  }


    // const saveData= ()=> {
  //   // localStorage.setItem('data', JSON.stringify(transactions))
  //   fetch('https://auth-51bda-default-rtdb.asia-southeast1.firebasedatabase.app/data.json', {
  //    method: 'POST',
  //    headers: {
  //     'Content-Type': 'application/json'
  //    },
  //    body: JSON.stringify(transactions)
  //   }).then(response=> response.json()).then(()=> {
  //     console.log('Success');
  //   }).catch(err=> {
  //     console.log(err);
  // })
  // saveData()

  // }

export default ExpenseTracker