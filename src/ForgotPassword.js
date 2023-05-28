import React from 'react'
import { useRef } from 'react';
import { json } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const ForgotPassword = () => {
    const navigate= useNavigate();
    const emailRef= useRef();
    const submitHandler=(e)=>{
    e.preventDefault();
    const enteredEmail= emailRef.current.value;
    fetch('https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyAcs8nLn2SZVKhB4JcRURQvIPdouSEVqgE', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email: enteredEmail,
            requestType: 'PASSWORD_RESET'
        })
    }).then(response => {
        if(response.ok){
            navigate('/')
        }else{
            throw new Error('Failed')
        }
    })
    }


  return (
    <div className='main'>
    <p className='heading'>Reset Password</p>
<form onSubmit={submitHandler}>
<p>Enter your registered email.</p>
<input className='input5' type="email" placeholder='Email'  required ref={emailRef} />
<button className='button' type='submit'>Send Link</button>
</form>
</div>
  )
  
}

export default ForgotPassword