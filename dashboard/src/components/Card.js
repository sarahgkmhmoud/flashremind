import React, {useState} from 'react'
import '../../src/App.css'
import nextIcon from '../assets/next.png';
import returnIcon from '../assets/Return.png';
import discoverIcon from '../assets/discover.png';
import { useNavigate } from "react-router-dom";
import {FacebookIcon, FacebookShareButton, TwitterIcon, TwitterShareButton, WhatsappIcon, WhatsappShareButton} from 'react-share'

export const ShareCard = () => {
  const currentUrl = 'www.google.com'/*window.location.href*/
  return(
    <>
      <FacebookShareButton  url={currentUrl}>
    <FacebookIcon className='sharebuttom H' />
  </FacebookShareButton>

  <TwitterShareButton url={currentUrl} >
<TwitterIcon className='sharebuttom H' />
  </TwitterShareButton>

<WhatsappShareButton url={currentUrl}>
<WhatsappIcon className='sharebuttom H' /> 
</WhatsappShareButton>
    </>
  
  )

}
export function NavigatEditButton() {
  const navigate = useNavigate(); // Hook to navigate programmatically

  const goToEdit = () => {
    navigate('/edit'); 
  }// Navigate to the "About" component
    return(
      <button className='edit orange H' onClick={goToEdit} >Edit</button>
    )
  };

export const Card =({title, question, answer, nextclick, prevclick,}) => {
  const [isvisible, setvisible] = useState(false);

const Toggleanswer = ()=>{
  setvisible(!isvisible)
}
  return (
    <div className='Container'> 
      <div className='return'>
        <button>
        <img alt='next' src={returnIcon} width={50} height={31}/>
        </button>
      </div>
      <div className='text'>
        <h3>{title}</h3>
      </div>
      <div className='Cardbox'>
        <div className='Question text'><h4>{question}</h4></div>
        <div className='text'>
            <p className='inline'>Answer</p>
            <button onClick={Toggleanswer}>
            <img  alt='discover' src={discoverIcon} width={19.94} height={15.97}/>
            </button>
          <div className={isvisible ? 'visible boxAnswer' : 'hidden boxAnswer'}>
            <p>{answer}</p>
            </div>
          </div>       
          <div className='nextCard'>
          <button onClick={prevclick}>
            <img alt='next' src={returnIcon} width={30} height={30} />
            </button>
            <button onClick={nextclick}>
            <img alt='next' src={nextIcon} width={30} height={30} />
            </button>
         
            
            </div>
          </div>
          <div className='btns'>
            {/* <button className='share green H'>Share</button> */}
            <NavigatEditButton/>
            <button className='delete red ' >Delete</button>
            <ShareCard/>
          </div>
          

      </div>
  )
}

