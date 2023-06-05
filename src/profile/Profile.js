import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { updateProfile } from '../Store/Action';
import GetProfileData from './GetProfileData';
const ProfileForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const newNameInputRef = useRef();
  const newImageInputRef = useRef();
  const { token } = useSelector((state) => state);

  const submitHandler = (e) => {
    e.preventDefault();
    const enteredName = newNameInputRef.current.value;
    const enteredImageUrl = newImageInputRef.current.value;

    fetch('https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyAcs8nLn2SZVKhB4JcRURQvIPdouSEVqgE', {
      method: 'POST',
      body: JSON.stringify({
        idToken: token,
        displayName: enteredName,
        photoUrl: enteredImageUrl,
        returnSecureToken: false
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then((res) => {
        dispatch(updateProfile(enteredName, enteredImageUrl));
        navigate('/home');
      })
      .catch((err) => {
        console.log(err);
      });
  };

 

  return (
    <>
    <form className='' onSubmit={submitHandler} >
      <div className='form'>
        <label className='lab'>Name</label>
        <input className='inp' type='text' ref={newNameInputRef}/>
        <label className='lab2'>Image URL</label>
        <input className='inp' type='text' ref={newImageInputRef}/>
      
      <div className='buts2'>
        <button className='but2'  type='submit'>Update</button>
      </div>
      </div>
    </form>
    <GetProfileData />
    </>

  );
}

export default ProfileForm;


