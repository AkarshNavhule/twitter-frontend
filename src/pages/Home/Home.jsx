import React from 'react'
import Sidebar from '../sidebar/Sidebar'
import auth from '../../firebase.init';
import {Outlet} from 'react-router-dom'
import Widgets from '../Widgets/Widgets';
import {useAuthState} from 'react-firebase-hooks/auth'
import { signOut } from 'firebase/auth'
import useLoggedInUser from '../../hooks/UseLoggedInUser';

const Home = () => {

  const user = useAuthState(auth)

 

  const handleLogout =()=>{
    signOut(auth)
  }

  return (
    <div className='app'>
      <Sidebar handleLogout={handleLogout} user={user}/>
      <Outlet/>
      <Widgets/>
    </div>
  )
}

export default Home