import React from 'react';
import { useContext } from 'react';
import Usercontext from '../context/UserContext';

const Profile = () => {

    const {user} = useContext(Usercontext);

    if(!user) return <div className='bg-gray-800 p-4 text-center text-4xl text-white'>Please Login!</div>

    return <div className='bg-gray-800 p-4 text-center text-4xl text-white'>Welcome Back <span className='text-orange-700'>{user.username.toUpperCase()}</span></div>
  
}

export default Profile