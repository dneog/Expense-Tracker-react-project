
import './Auth.css';
import { useState, useRef , useContext} from 'react';
import AuthContext from '../Store/AuthContext';
import { Link } from 'react-router-dom';
import {useNavigate} from 'react-router-dom';

const Auth = () => {
  const navigate= useNavigate();
 const authCtx= useContext(AuthContext);
  const emailInputRef= useRef();
  const passwordInputRef= useRef();
  const [isLogin, setIsLogin] = useState(true);
  const [loading, setLoading]= useState(false);


  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const submitHandler=(e)=>{
    e.preventDefault();
    const enteredEmail= emailInputRef.current.value;
    const enteredPassword= passwordInputRef.current.value;
    setLoading(true)
    let url;
    if(isLogin){
      url= 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAcs8nLn2SZVKhB4JcRURQvIPdouSEVqgE' 
     
    }else{
      url= 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAcs8nLn2SZVKhB4JcRURQvIPdouSEVqgE'
    }
    fetch(url,
      {
        method: 'POST',
        body: JSON.stringify({
          email: enteredEmail,
          password: enteredPassword,
          returnSecureToken: true
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      }
      ).then(res=> {
        setLoading(false)
        if(res.ok){
            return res.json()
        }else{
         return res.json().then(data=> {
           
            let errorMessage= 'Authentication Failed';
            
           
            throw new Error(errorMessage)

          })
        }
      })
          
          .then(data=> {
            authCtx.login(data.idToken);
            navigate('/home')
          }).catch(err=> {
            alert(err.message)
          })
        
  }



  return (
   <div className='parent'>
    

<div className='main'>
{isLogin ? ( 
  <>
  <p className='heading'>SignUp</p>
<form onSubmit={submitHandler} className='userForm'>
<input className='input' type="email" placeholder='Email'  required ref={emailInputRef} />
<input className='input' type="password" placeholder='Password' required />
<input className='input' type="password"  placeholder='Confirm Password' required ref={passwordInputRef} />
<button className='button' type='submit'>Sign up</button>
</form>
</> ) : (
  <>
   <p className='heading'>Login</p>
<form onSubmit={submitHandler} className='userForm'>
<input className='input' type="email" placeholder='Email'  required ref={emailInputRef} />

<input className='input' type="password" placeholder='Confirm Password' required ref={passwordInputRef} />
<button className='button' type='submit'>Login</button>
<Link to={'/password'}><p className='forgot'>Forgot Password</p></Link>

</form>
</>
)}

</div>

<div className="second">

{isLogin ? (
  <p>Have an Account ? <button
            type='button'
            className='btn'
            onClick={switchAuthModeHandler}
          >Login</button> </p>
): (
  <p>Don't have an Account ? <button
            type='button'
            className='btn'
            onClick={switchAuthModeHandler}
          >Sign up</button> </p>
)}

</div>
</div>
  
  )
}

export default Auth