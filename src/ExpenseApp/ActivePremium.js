import React, { useState } from 'react'
import './Expense.css'
const ActivePremium = ({income}) => {
  const [text, setText]= useState('Active Premium');
  const handleClick=()=> {
    if(text=== 'Active Premium'){
      setText('Premium Activated') 
    }else{
      setText('Active Premium') 
    }
     
  }
  return (
    <div className='act'>
   
   {income > 10000 &&
   <button onClick={handleClick} className='premium'>{text}</button>}
        
    </div>
  )
}

export default ActivePremium