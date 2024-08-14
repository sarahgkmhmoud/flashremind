import React, { useState } from 'react'
import usr_icon from '../../assets/user.png'
import password_icon from '../../assets/password.png'
import email_icon from '../../assets/email.png'
import './form.css'

export const SignUpLogIn = () => {
  // const [authAction, setAuthAction] = useState('Login');
  const [formInputs, setFormInput] = useState({
    name: "",
    email: "",
    passWord: "",
  });

  // const signUp = () => setAuthAction('Create Account');
  // const logIn = () => setAuthAction('Login');
 
  return (
    <div className='Container'>
      <div className='text'>
        <h2>Create Account</h2>
      </div>

      <form className='forms' onSubmit={(e) => {
        e.preventDefault();
      }}>

        <div className='input' >
          <img src={usr_icon} alt='' />
          <input type='text' 
            placeholder='Full Name'
            value={formInputs.name}
            onChange={(e) => {
              setFormInput({...formInputs, name: e.target.value})
            }} />
        </div>

        <div className='input' >
          <img src={email_icon} alt='' />
          <input type='email'
            placeholder='Email'
            value={formInputs.email}
            onChange={(e) => {
              setFormInput({...formInputs, email: e.target.value});
            }} />
        </div>
        <div className='input'>
          <img src={password_icon} alt='' />
          <input type='password'
            placeholder='Password'
            value={formInputs.passWord}
            onChange={(e) => {
              setFormInput({...formInputs, passWord: e.target.value});
            }}/>
        </div>
        <div className='submit-buttons'>
          <button className='submit'>Sign Up</button>
        </div>
        
      </form>

      {/* <div className='submit-buttons'>
        <button onClick={signUp} className={authAction==='Create Account'?'submit':'submit turngray'}>Sign Up</button>
        <button onClick={logIn} className={authAction==='Login'?'submit':'submit turngray'}>Login</button>
      </div> */}
    </div>
  )
}
