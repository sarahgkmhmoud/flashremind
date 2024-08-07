import React from 'react'
import '../../src/App.css'
import nextIcon from '../assets/next.png';
import returnIcon from '../assets/Return.png';
import discoverIcon from '../assets/discover.png';

export const Card =() => {
  return (
    <div className='Container'> 
      <div className='return'>
      <img alt='next' src={returnIcon} width={50} height={31}/>
      </div>
      <div className='text'>
        <h3>Title</h3>
      </div>
      <div className='Cardbox'>
        <div className='Question text'><h4>Question</h4></div>
        <div className='text'>
            <p className='inline'>Answer</p>    
            <img  alt='discover' src={discoverIcon} width={19.94} height={15.97}/>
          <div className='boxAnswer'>
            <p>this is my answer this is my answer</p>
            </div>
          </div>       
          <div className='nextCard'>
            <img alt='next' src={nextIcon} width={30} height={30}/>
            </div>
          </div>
          <div className='btns'>
            <button className='share green'>Share</button>
            <button className='edit orange'>Edit</button>
            <button className='delete red'>Delete</button>

          </div>

      </div>
  )
}

