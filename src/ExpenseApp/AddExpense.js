import React, { useState } from 'react'
import { randomID } from '../util';
const AddExpense = ({newTransaction}) => {
  const [nameValue, setNameValue]= useState('');
  const [amountValue, setAmountValue]= useState('');
  const [categoryValue, setCategoryValue]= useState('');

 const addTransaction= (type, e) => {
  e.preventDefault()
  const data= {
    id: randomID(), name: nameValue, category: categoryValue , amount: parseInt(amountValue), type: type
   }
  //  newTransaction(data);

   fetch('https://auth-51bda-default-rtdb.asia-southeast1.firebasedatabase.app/data.json', {
    method: 'POST',
    headers: {
     'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
   }).then(response=> response.json()).then(()=> {
     console.log('Success');
   }).catch(err=> {
     console.log(err);
 })
   setNameValue('')
   setAmountValue('')
   setCategoryValue('')
 }
  

  
  return (
    <div className='forms'>
        <p className='tran'>Add Transaction</p>
        <form action="" className='num'>
            
            <input className='amounts2' value={amountValue} onChange={(event)=> setAmountValue(event.target.value)}  type="number"  placeholder='Amount' /> 
            
            <input type="text" className='amounts' value={nameValue} onChange={(event)=> setNameValue(event.target.value)} placeholder='Description' /> 
            <select className='amounts3' value={categoryValue} onChange={(event)=> setCategoryValue(event.target.value)} name="Select" id="">
                <option value="">Select Category</option>
                <option value="Food">Food</option>
                <option value="Salary">Salary</option>
                <option value="Movies">Movies</option>
                <option value="Electricity">Electricity</option>
                <option value="Petrol">Petrol</option>
            </select> <br />

            <button className='green' type='submit' onClick={(e)=> addTransaction('income',e) }>Add Income</button>
            <button className='red' type='submit' onClick={(e)=> addTransaction('expense',e) }>Add Expense</button>
        </form>
    </div>
  )
}

export default AddExpense