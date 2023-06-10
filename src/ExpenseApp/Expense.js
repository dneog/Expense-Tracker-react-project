import React from 'react'

const Expense = ({income, expense}) => {
  return (
    <div className='total'>
    <p className='tran2'>Summery</p>
        <div className='balance'>
        <p className='bal' >Total Balance</p>
        <p className='money'>{income-expense}&#8377;</p>
        </div>
        <div className='balance2'>
        <p className='bal'>Income</p>
        <p className='money'>{income}&#8377;</p>
        </div>
        <div className='balance3'>
        <p className='bal'>Expense</p>
        <p className='money'>{expense}&#8377;</p>
        </div>
       
      
    </div>
  )
}

export default Expense