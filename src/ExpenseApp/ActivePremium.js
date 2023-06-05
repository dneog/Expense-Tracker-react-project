import React, { useState } from 'react';
import DayNight from './DayNight';
import './Expense.css'
const ActivePremium = ({income, theme, toggleTheme, onSwitch} ) => {
  const[clicked, setClicked]= useState(true)
  const [text, setText]= useState('Active Premium');
  const handleClick=()=> {
    setClicked(false)
    if(text=== 'Active Premium'){
      setText('Premium Activated') 
    }else{
      setText('Active Premium') 
    }
     
  }
  return (
    <div className='act'>
   
   {income >= 10000 &&
   <button onClick={handleClick} className='premium'>{text}</button>}
     <DayNight clicked={!clicked} theme={theme} toggleTheme={toggleTheme} onSwitch={onSwitch} income={income} />   
    </div>
  )
}

export default ActivePremium