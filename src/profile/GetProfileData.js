import React, { useEffect, useState } from 'react'
import AuthContext from '../Store/AuthContext';
import { useContext } from 'react';
import { json } from 'react-router-dom';
const GetProfileData =  () => {
    const [displayName, setDisplayName]= useState('');
    const [email, setEmail]= useState('');
    const [photoUrl, setPhotoUrl]= useState('');

    const authCtx=useContext(AuthContext);
    useEffect(()=> {
    const url= 'https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=AIzaSyAcs8nLn2SZVKhB4JcRURQvIPdouSEVqgE'

    const body= {
        idToken: authCtx.token
    };

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
       body: JSON.stringify(body)
    }).then((response)=> {
        if(response.ok){
            return response.json()
        }else{
            throw new Error('Not able to get User Data')
        }
    }).then((data)=> {
        if(data.users && data.users.length > 0){
            const user = data.users[0]
            setDisplayName(user.displayName);
            setEmail(user.email);
            setPhotoUrl(user.photoUrl);
        }
    })

}, [authCtx.token])

  return (
    <>
    <div className='prof'>
    <p className='profile'>Profile Details</p>
    </div>
    
    <div className='show'>
   
    <div className='sec1'>
    {photoUrl && 
    <img className='img' src={photoUrl}  />}
    </div>
    <div className='sec'>
    <p className='na'><span> Name : </span>{displayName}</p>
    <p className='em'><span> Email : </span> {email}</p>
    </div>
    </div>
    </>
  )
}

export default GetProfileData

