import React from 'react'
import '../../src/App.css'
// import nextIcon from '../assets/next.png';
import returnIcon from '../assets/Return.png';
import discoverIcon from '../assets/discover.png';

export const EditBox =({title, question, answer}) => {
  return (
    <div className='Container'> 
      <div className='return'>
      <img alt='next' src={returnIcon} width={50} height={31}/>
      </div>
      <div className='text'>
        <h3>{title}</h3>
      </div>
      <div className='Cardbox'>
        <div className='Question text'>
            <input className=' fitQuestion' type='text' defaultValue={question}>
            
                </input>
                </div>
        <div className='text'>
            <p className='inline'>Answer</p>    
            <img  alt='discover' src={discoverIcon} width={19.94} height={15.97}/>
          <div className='boxAnswer'>
            <textarea className='boxAnswer' defaultValue={answer}/>
            </div>
          </div>       
          <div className='btns'>
            {/* <button className='share green'>Share</button> */}
            <button className='save orange H'>Save</button>
            {/* <button className='delete red' onClick={deletbtn}>Delete</button> */}

          </div>

          {/* <div className='nextCard'>
            <img alt='next' src={nextIcon} width={30} height={30}/>
            </div> */}
          </div>
          
      </div>
  )
}

