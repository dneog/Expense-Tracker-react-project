import React from 'react'
import { useContext } from 'react';
import { Link } from 'react-router-dom'
import VerifyEmail from '../VerifyEmail';
import AuthContext from '../Store/AuthContext';
import { useNavigate } from 'react-router-dom';
import ExpenseTracker from '../ExpenseApp/ExpenseTracker';
const Home = () => {
  const navigate= useNavigate()
  const authCtx= useContext(AuthContext);
  const isLoggedin= authCtx.isLoggedin

  const logoutHandler=()=> {
    authCtx.logout();
    navigate('/')
  }
  return (
    <>
    <div className='wel'>
    <p className='pera'>Welcome to Expense Tracker</p>
    <div className='para3'>
    
    <p className='para2'>Your Profile is Incomplete. <Link to={'/profile'}><span>Complete Now</span></Link> </p>
    <VerifyEmail />
    <button className='but4' onClick={logoutHandler}>Logout</button>
    </div>
    
    </div>
    <div>
      <ExpenseTracker />
    </div>
    </>
  )
}

export default Home