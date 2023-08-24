import React, { useState } from 'react'
import twitterImage from '../../assets/images/p1.jpg';
import TwitterIcon from '@mui/icons-material/Twitter';
import {useSignInWithEmailAndPassword,useSignInWithGoogle} from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import GoogleButton from 'react-google-button';
import { Link ,useNavigate} from 'react-router-dom';


import './Login.css';

const Login = () => {

    const [email,setEmail]=useState('');
    const [password,setPassword]= useState('');
  //  const [errorMessage,setError]=useState('');

    const navigate = useNavigate();


    const [signInWithGoogle, googleuser, googleloading, googleerror] = useSignInWithGoogle(auth);

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);

      if(user || googleuser){
        navigate('/');
        console.log(user);
        console.log(googleuser);
      }
      if(error){
        console.log(error.message);
      }
      if(loading)
      {
        console.log('loading');
      }
    const handleSubmit= e=>{
        e.preventDefault();
        console.log(email,password);
        signInWithEmailAndPassword(email,password);
    }

    const handleGoogleSignIn =()=>{
        signInWithGoogle();
    }
  return (
<div className='login-container'>
    <div className='image-container'>
        <img className='image'src={twitterImage} alt="" />
    </div>
    <div className='form-container'>
        <TwitterIcon style={{color:'skyblue'}}/>
        <h2 className='heading'>Happening now</h2>
<h3 className='heading1'>Join Twitter today</h3>
<form onSubmit={handleSubmit}>
    <input   type="email"
             className='email' 
             placeholder='email'
             onChange={(e)=>setEmail(e.target.value)}/>
    <input type="password" 
        className='password'
         placeholder='password'
         onChange={(e)=>setPassword(e.target.value)}/>
    <div className='btn-login'> <button type='submit' className='btn'>Login</button></div>
</form>
<div className='google-button'> 
          <GoogleButton className='g-btn' type='light' onClick={handleGoogleSignIn}/>
          </div>
          <div  style={{marginLeft:'15px',paddingTop:'10px'}}  >
            Dont have an account?
            <Link to='/signup'
                    style={
                        {
                            textDecoration: 'none',
                            color:'skyblue',
                            fontWeight:600,
                            marginLeft:'5px'
                        }
                    }
                    >Signup</Link>
        </div>
    </div>
</div>
    )
}

export default Login