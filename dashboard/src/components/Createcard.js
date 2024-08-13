// import React, { useState } from 'react'
// import '../../src/App.css'
// // import nextIcon from '../assets/next.png';
// import discoverIcon from '../assets/discover.png';
// import axios from 'axios';

// export const Createcard = ({userId, categoryId, cardId, title}) => {
//   const [values, setValues] = useState({
//     "cardId" : {cardId},
//     "question":"",
//     "answer": ""
//   })
//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     setValues(prevValues => ({
//       ...prevValues,
//       [name]: value
//     }));
//   };
//   const handlesubmit = (event) =>{
//     event.preventDefault();
//     const url = `http://localhost:3001/users/${userId}/categories/${categoryId}/cards`;
//     axios.post(url,values)
//       .then(res =>
//         console.log(res)) // Fetch the first user
//       .catch(err => console.log(err));

//   }
//   return (
//     <div className='Container'> 
//     <div className='return'>
//     </div>
//     <div className='text'>
//       <h3>{title}</h3>
//     </div>
//     <div className='Cardbox'>
//       <div className='Question text'>
//           <input className=' fitQuestion' type='text' placeholder='put your word' onChange={handleChange}>
           
//               </input>
//               </div>
//       <div className='text'>
//           <p className='inline'>Answer</p>    
//           <img  alt='discover' src={discoverIcon} width={19.94} height={15.97}/>
//         <div className='boxAnswer'>
//           <textarea className='boxAnswer' placeholder='The answer is' onChange={handleChange}/>
//           </div>
//         </div>       
//         <div className='btns'>
//           {/* <button className='share green'>Share</button> */}
//           <button className='save orange H' onClick={handlesubmit}>Save</button>
//           {/* <button className='delete red' onClick={deletbtn}>Delete</button> */}

//         </div>

//         {/* <div className='nextCard'>
//           <img alt='next' src={nextIcon} width={30} height={30}/>
//           </div> */}
//         </div>
        
//     </div>
// )
// }

import React, { useState } from 'react';
import '../../src/App.css';
import discoverIcon from '../assets/discover.png';
import axios from 'axios';

export const Createcard = () => {
  const [values, setValues] = useState({
    question: '',
    answer: '',
    cardId: 1 // Default or dynamic ID logic
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues(prevValues => ({
      ...prevValues,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const url = `http://localhost:3001/cards`;

    axios.post(url, values)
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };

  return (
    <div className='Container'>
      <div className='return'></div>
      <div className='text'>
        <h3>Create a New Card</h3>
      </div>
      <div className='Cardbox'>
        <div className='Question text'>
          <input
            className='fitQuestion'
            type='text'
            name='question'
            placeholder='Put your word'
            onChange={handleChange}
          />
        </div>
        <div className='text'>
          <p className='inline'>Answer</p>
          <img alt='discover' src={discoverIcon} width={19.94} height={15.97} />
          <div className='boxAnswer'>
            <textarea
              className='boxAnswer'
              name='answer'
              placeholder='The answer is'
              onChange={handleChange}
            />
          </div>
        </div>
        <div className='btns'>
          <button className='save orange H' onClick={handleSubmit}>Save</button>
        </div>
      </div>
    </div>
  );
};
