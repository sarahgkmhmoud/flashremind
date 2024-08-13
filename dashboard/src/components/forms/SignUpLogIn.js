import React, { useState } from 'react'
import usr_icon from '../../assets/user.png'
import password_icon from '../../assets/password.png'
import email_icon from '../../assets/email.png'
import './form.css'

export const SignUpLogIn = () => {
  const [authAction, setAuthAction] = useState('Login');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [passWord, setPassWord] = useState('');

  const signUp = () => setAuthAction('Create Account');
  const logIn = () => setAuthAction('Login');
  const handleNameChange = (e) => setFullName(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePassWordChange = (e) => setPassWord(e.target.value);


  return (
    <div className='Container'>
      <div className='text'>
        <h2>{authAction}</h2>
      </div>

      <div className='forms'>

      { authAction === 'Create Account'? 
        <div className='input' >
        <img src={usr_icon} alt='' />
        <input type='text' placeholder='Full Name' value={fullName} onChange={handleNameChange} />
      </div>:<div></div>
      }

        <div className='input' >
          <img src={email_icon} alt='' />
          <input type='email' placeholder='Email' value={email} onChange={handleEmailChange} />
        </div>
        <div className='input'>
          <img src={password_icon} alt='' />
          <input type='password' placeholder='Password' value={passWord} onChange={handlePassWordChange}/>
        </div>
      </div>
      <div className='submit-buttons'>
        <button onClick={signUp} className={authAction==='Create Account'?'submit':'submit turngray'}>Sign Up</button>
        <button onClick={logIn} className={authAction==='Login'?'submit':'submit turngray'}>Login</button>
      </div>
    </div>
  )
}
