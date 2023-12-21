import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {uservalue} = useParams();
  return (
    <h1 className='bg-orange-700 text-3xl text-center p-8 text-white'>User : <span className='text-gray-700'>{uservalue}</span></h1>
  )
}

export default User