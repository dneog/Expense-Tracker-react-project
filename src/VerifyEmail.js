import AuthContext from './Store/AuthContext';
import React from 'react'
import { useContext } from 'react';
const VerifyEmail = () => {
    const authCtx=useContext(AuthContext);
    const handleVerification=()=> {
       
        fetch('https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyAcs8nLn2SZVKhB4JcRURQvIPdouSEVqgE', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                idToken: authCtx.token,
                requestType: 'VERIFY_EMAIL'
            })
        }).then((response)=> {
            if(response.ok){
                console.log('Success');
            }else{
                throw new Error('Error')
            }
        }).catch(err=> {
            console.log(err);
        })
    }
   
  return (
    <div className='but3'>
        <button className='verify' onClick={handleVerification}>Verify Email</button>
    </div>
  )
}

export default VerifyEmail