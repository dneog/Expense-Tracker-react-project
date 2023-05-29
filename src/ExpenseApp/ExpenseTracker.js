import React, { useEffect, useState } from 'react';
import './Expense.css';
import Expense from './Expense';
import AddExpense from './AddExpense';
import TransitionHistory from './TransitionHistory';
import { randomID } from '../util';

const TransactionData= []
const ExpenseTracker = () => {

  const [income, setIncome]= useState(0);
  const [expense, setExpense]= useState(0);
  const [transactions, setTransactions]= useState(TransactionData);

  const saveData= ()=> {
    localStorage.setItem('data', JSON.stringify(transactions))
  }
  const CalculateExpense=()=> {
    let income=0, expense = 0;
    transactions.forEach((data) => {
      if(data.type === 'income'){
        income+= data.amount
      }else if(data.type=== 'expense'){
        expense+= data.amount
      }
    });
    setIncome(income)
    setExpense(expense)
    saveData()
  }
  
  
  const handleNewTransaction= item=> {
    let oldTransactions= [...transactions, item ]
    setTransactions(oldTransactions);
   
  }

  const handleDelete=(id)=> {
   const newUpdatedTransaction= transactions.filter((item)=> item.id !== id)
   setTransactions(newUpdatedTransaction)
  }

  useEffect(()=> {
    let localState= JSON.parse(localStorage.getItem('data'))
    if(localState){
      setTransactions(localState)
    }else{
      CalculateExpense()
    }
    
  },[]);
  useEffect(()=> {
    CalculateExpense()
  },[transactions])
  
  return (
    <div className='expenseMain'>
    <h2 className='exp'>Expense Tracker</h2>
    <div className='add'>
    <AddExpense newTransaction= {handleNewTransaction} />
    <Expense income={income} expense={expense} />
   
    </div>
    <TransitionHistory transactions={transactions} onDelete={handleDelete} />
    </div>
  )
}

export default ExpenseTracker