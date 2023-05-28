import React from 'react'
import { Link } from 'react-router-dom'
import VerifyEmail from '../VerifyEmail'
const Home = () => {
  return (
    <>
    <div className='wel'>
    <p className='pera'>Welcome to Expense Tracker</p>
    <p className='para2'>Your Profile is Incomplete. <Link to={'/profile'}><span>Complete Now</span></Link> </p>
    </div>
    <div>
      <VerifyEmail />
    </div>
    </>
  )
}

export default Home