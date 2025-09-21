// src/Login.jsx
import React from 'react';
import { signInWithPopup } from 'firebase/auth';
import { auth, provider } from '../firebase';

const Login = () => {
  const loginWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      console.log('User info:', result.user);
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  return (
    <div className='flex h-screen items-center justify-center bg-gray-100'>
      <button
        onClick={loginWithGoogle}
        className='px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600'
      >
        Login with Google
      </button>
    </div>
  );
};

export default Login;
