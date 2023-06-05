import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AuthContext from '../Store/AuthContext';
import { setUserData } from '../Store/Action';
import { useContext } from 'react';

const GetProfileData = () => {
  const dispatch = useDispatch();
  const { token } = useContext(AuthContext);
  
  const { displayName, email, photoUrl } = useSelector((state) => state);

  useEffect(() => {
    

    const body = {
      idToken: token
    };

    fetch('https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=AIzaSyAcs8nLn2SZVKhB4JcRURQvIPdouSEVqgE', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          console.log('error');
        }
      })
      .then((data) => {
        if (data && data.users && data.users.length > 0) {
          const user = data.users[0];
          dispatch(setUserData(user.displayName, user.email, user.photoUrl));
        }
      });
  }, [token, dispatch]);

  

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

