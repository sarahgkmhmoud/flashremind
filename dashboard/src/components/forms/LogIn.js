import React from 'react'
import usr_icon from '../../assets/user.png'
import password_icon from '../../assets/password.png'
import email_icon from '../../assets/email.png'
import './form.css'

export const LogIn = () => {
  return (
    <div className='container'>
      <div>
        <div>Create Account</div>
      </div>
      <div className='forms'>
        <div className='input'>
          <img src={password_icon} alt='' />
          <input type='text' />
        </div>
        <div className='input'>
          <img src={email_icon} alt='' />
          <input type='email' />
        </div>
        <div className='input'>
          <img src={usr_icon} alt='' />
          <input type='password' />
        </div>
      </div>
      <div className='submition-container'>
        <div className='submit'>Sign Up</div>
        <div className='submit'>Login</div>
      </div>
    </div>
  )
}
