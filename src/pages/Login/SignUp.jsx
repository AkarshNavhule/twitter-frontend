import React, { useState } from 'react'
import twitterImage from '../../assets/images/p1.jpg';
import TwitterIcon from '@mui/icons-material/Twitter';
import {useCreateUserWithEmailAndPassword,useSignInWithGoogle} from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import GoogleButton from 'react-google-button';
import { Link ,useNavigate} from 'react-router-dom';
import './Login.css';
import axios from 'axios'
const SignUp = () => {

    const [username,setusername]=useState('');
    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const [password,setPassword]= useState('');
    const [errorMessage,setError]=useState('');

    const navigate = useNavigate();


    const [signInWithGoogle, googleuser, googleloading, googleerror] = useSignInWithGoogle(auth);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);

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
        createUserWithEmailAndPassword(email,password);
        const user = {
          username: username,
          name: name,
          email: email,
      }
     const {data} = axios.post(`https://backend-guft.onrender.com/register`,user)
    }

    const handleGoogleSignIn =()=>{
        signInWithGoogle();
    }

  return (
<div className='login-container'>
    <div className='image-container'>
        <img className='image' src={twitterImage} alt="" />
    </div>
    <div className='form-container'>
       <div className='form-box'> <TwitterIcon className='Twittericon' style={{color:'skyblue',margin:'10px'}}/>
<h2 className='heading'>Happening now</h2>
<h3 className='heading1'>Join Twitter today</h3>
<form onSubmit={handleSubmit}>
    <input type="text"
            placeholder='username' 
            className='display-name'
            onChange={(e)=>setusername(e.target.value)}/>

<input type="text"
            placeholder='enterFullName' 
            className='display-name'
            onChange={(e)=>setName(e.target.value)}/>


    <input   type="email"
             className='email' 
             placeholder='email'
             onChange={(e)=>setEmail(e.target.value)}/>
    <input type="password" 
        className='password'
         placeholder='password'
         onChange={(e)=>setPassword(e.target.value)}/>
    <div className='btn-login'> <button type='submit' className='btn'>Signup</button></div>
</form> </div> 
    <hr />
    <div className='google-button'> 
          <GoogleButton className='g-btn' type='light' onClick={handleGoogleSignIn}/>
          </div>
        <div  style={{marginLeft:'15px'}}  >
            Already have an account?
            <Link to='/login'
                    style={
                        {
                            textDecoration: 'none',
                            color:'skyblue',
                            fontWeight:600,
                            marginLeft:'5px'
                        }
                    }
                    >Login</Link>
        </div>
    </div>
</div>  )
}

export default SignUp
