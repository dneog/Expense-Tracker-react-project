import React from 'react'
import { useContext } from 'react';
import { Link } from 'react-router-dom'
import VerifyEmail from '../VerifyEmail';
import ExpenseTracker from '../ExpenseApp/ExpenseTracker';
// import AuthContext from '../Store/AuthContext';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../Store/Action';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate= useNavigate()
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.isLoggedIn);

  const logoutHandler=()=> {
    dispatch(logout());
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