import React, { useState } from 'react'
import { useAuth } from '../context/AuthContext';

const Login = () => {
  const [username, setUsername] = useState('');

  const { login } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(username);
  }
  return (
    <form onSubmit={handleSubmit} className='mb-4'>
      <input 
        type='text'
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder='Username'
        className='border p-2 rounded mb-2 w-full'
      />
      <button type='submit' className='bg-blue-500 text-white px-4 py-2 rounded'>Login</button>
    </form>
  )
}

export default Login