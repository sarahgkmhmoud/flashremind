import React, { useState } from 'react'
import usr_icon from '../../assets/user.png'
import password_icon from '../../assets/password.png'
import email_icon from '../../assets/email.png'
import './form.css'

export const SignUpLogIn = () => {
  const [authAction, setAuthAction] = useState('Login');

  function signUp() {
    setAuthAction('Create Account')
  };

  function logIn() {
    setAuthAction('Login')
  };

  return (
    <div className='Container'>
      <div className='text'>
        <h2>{authAction}</h2>
      </div>

      <div className='forms'>

      { authAction === 'Create Account'? 
        <div className='input'>
        <img src={usr_icon} alt='' />
        <input type='text' placeholder='Full Name' />
      </div>:<div></div>
      }

        <div className='input'>
          <img src={email_icon} alt='' />
          <input type='email' placeholder='Email' />
        </div>
        <div className='input'>
          <img src={password_icon} alt='' />
          <input type='password' placeholder='Password' />
        </div>
      </div>
      <div className='submit-buttons'>
        <button onClick={signUp} className={authAction==='Create Account'?'submit':'submit turngray'}>Sign Up</button>
        <button onClick={logIn} className={authAction==='Login'?'submit':'submit turngray'}>Login</button>
      </div>
    </div>
  )
}
