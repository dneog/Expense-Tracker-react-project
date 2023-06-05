import React, { useState } from 'react'
import { useContext } from 'react';
import { Link } from 'react-router-dom'
import VerifyEmail from '../VerifyEmail';
import ExpenseTracker from '../ExpenseApp/ExpenseTracker';
// import AuthContext from '../Store/AuthContext';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../Store/Action';
import { useNavigate } from 'react-router-dom';
import useLocalStorage from 'use-local-storage';

const Home = () => {
  const [onSwitch, setSwitch]= useState(false);
  const navigate= useNavigate()
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.isLoggedIn);

  const logoutHandler=()=> {
    dispatch(logout());
    navigate('/')
  }

  const [theme, setTheme]= useLocalStorage('theme', 'light')

  const toggleTheme=()=> {
  const newTheme=   theme === 'light' ? 'dark' : 'light'
  setTheme(newTheme)
  setSwitch(!onSwitch)
  
  }
  

  return (
    <div data-theme={theme} className='app'>
    <div className='wel'>
    <p className='pera'>Welcome to Expense Tracker</p>
    <div className='para3'>
    
    <p className='para2'>Your Profile is Incomplete. <Link to={'/profile'}><span>Complete Now</span></Link> </p>
    <VerifyEmail />
    <button className='but4' onClick={logoutHandler}>Logout</button>
    </div>
    
    </div>
    <div>
      <ExpenseTracker theme={theme} toggleTheme={toggleTheme} onSwitch={onSwitch} />
    </div>
    </div>
  )
}

export default Home