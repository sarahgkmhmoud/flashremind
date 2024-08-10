import React from 'react'
import usr_icon from '../../assets/user.png'
import password_icon from '../../assets/password.png'
import email_icon from '../../assets/email.png'
import './form.css'

export const LogIn = () => {
  return (
    <div className='Container'>
      <div className='text'>
        <h2>Create Account</h2>
      </div>
      <div className='forms'>
        <div className='input'>
          <img src={usr_icon} alt='' />
          <input type='text' placeholder='Full Name' />
        </div>
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
        <button className='submit'>Sign Up</button>
        <button className='submit'>Login</button>
      </div>
    </div>
  )
}
