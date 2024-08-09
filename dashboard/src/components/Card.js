import React from 'react'
import '../../src/App.css'
import nextIcon from '../assets/next.png';
import returnIcon from '../assets/Return.png';
import discoverIcon from '../assets/discover.png';
import { useNavigate } from "react-router-dom";

export function NavigatEditButton() {
  const navigate = useNavigate(); // Hook to navigate programmatically

  const goToEdit = () => {
    navigate('/edit'); 
  }// Navigate to the "About" component
    return(
      <button className='edit orange H' onClick={goToEdit} >Edit</button>
    )
  };

export const Card =({title, question, answer, click}) => {
  return (
    <div className='Container'> 
      <div className='return'>
      <img alt='next' src={returnIcon} width={50} height={31}/>
      </div>
      <div className='text'>
        <h3>{title}</h3>
      </div>
      <div className='Cardbox'>
        <div className='Question text'><h4>{question}</h4></div>
        <div className='text'>
            <p className='inline'>Answer</p>    
            <img  alt='discover' src={discoverIcon} width={19.94} height={15.97}/>
          <div className='boxAnswer'>
            <p>{answer}</p>
            </div>
          </div>       
          <div className='nextCard'>
            <img alt='next' src={nextIcon} width={30} height={30}/>
            </div>
          </div>
          <div className='btns'>
            <button className='share green H'>Share</button>
            <NavigatEditButton/>
            <button className='delete red H' >Delete</button>

          </div>

      </div>
  )
}

