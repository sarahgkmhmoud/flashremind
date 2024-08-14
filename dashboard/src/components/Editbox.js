import React, { useState, useEffect } from 'react'
import '../../src/App.css'
import returnIcon from '../assets/Return.png';
import discoverIcon from '../assets/discover.png';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

export const EditBox =() => {
  const [cards, setCards] = useState([]);
  const [categoryName, setCategoryName] = useState('');
  const { userID, CategoryID, index } = useParams(); // Use useParams to get route parameters
  const navigate = useNavigate(); // Hook to navigate programmatically
  const handleCategoryClick = (CategoryID) => {
    navigate(`/card/${userID}/${CategoryID}`);
  };
  useEffect(() => {
  if (userID && CategoryID) {
          axios.get(`http://localhost:3001/categories`)
        .then(response => {
          console.log('API Response:', response.data); // Debugging line

          const category = response.data.find(category => category.userId === parseInt(userID) && category.Id === parseInt(CategoryID));
          console.log('category before set:', category); // Debugging line

          if (category) {
            setCards(category.cards);
            console.log('cards after set:', category.cards); // Debugging line

            setCategoryName(category.categoryname);
            console.log('cards after set:', category.categoryName); // Debugging line

          }
        })
        .catch(error => {
          console.error('Error fetching categories:', error);
        });
    }
  }, [userID, CategoryID]);
  return (
    <div className='Container'> 
      <div className='return'>
      <button onClick={handleCategoryClick}>
      <img alt='next' src={returnIcon} width={50} height={31}/>
      </button>    
      </div>
      <div className='text'>
        <h3>{categoryName}</h3>
      </div>
     {cards.length > 0 && cards[index] && (

      <div className='Cardbox'>
        <div className='Question text'>
            <input className=' fitQuestion' type='text' defaultValue={cards[index].question}>
            
                </input>
                </div>
        <div className='text'>
            <p className='inline'>Answer</p>    
            <img  alt='discover' src={discoverIcon} width={19.94} height={15.97}/>
          <div className='boxAnswer'>
            <textarea className='boxAnswer' defaultValue={cards[index].answer}/>
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
     )}
      </div>
  )
}
// import React, { useState, useEffect } from 'react';
// import '../../src/App.css';
// import returnIcon from '../assets/Return.png';
// import discoverIcon from '../assets/discover.png';
// import { useNavigate, useParams } from 'react-router-dom';
// import axios from 'axios';

// export const EditBox = () => {
//   const [cards, setCards] = useState([]);
//   const [categoryName, setCategoryName] = useState('');
//   const { userID, CategoryID, index } = useParams(); // Use useParams to get route parameters
//   const navigate = useNavigate(); // Hook to navigate programmatically
  
//   const handleCategoryClick = () => {
//     navigate(`/card/${userID}/${CategoryID}`);
//   };

//   useEffect(() => {
//     if (userID && CategoryID) {
//       axios.get(`http://localhost:3001/categories`)
//         .then(response => {
//           console.log('API Response:', response.data); // Debugging line

//           const category = response.data.find(category => category.userId === parseInt(userID) && category.Id === parseInt(CategoryID));
//           console.log('category before set:', category); // Debugging line

//           if (category) {
//             setCards(category.cards);
//             setCategoryName(category.categoryname);
//           }
//         })
//         .catch(error => {
//           console.error('Error fetching categories:', error);
//         });
//     }
//   }, [userID, CategoryID]);

//   return (
//     <div className='Container'> 
//       <div className='return'>
//         <button onClick={handleCategoryClick}>
//           <img alt='next' src={returnIcon} width={50} height={31}/>
//         </button>    
//       </div>
//       <div className='text'>
//         <h3>{categoryName}</h3>
//       </div>
//       {cards.length > 0 && cards[index] && (
//         <div className='Cardbox'>
//           <div className='Question text'>
//             <input className='fitQuestion' type='text' defaultValue={cards[index].question} />
//           </div>
//           <div className='text'>
//             <p className='inline'>Answer</p>    
//             <img alt='discover' src={discoverIcon} width={19.94} height={15.97}/>
//             <div className='boxAnswer'>
//               <textarea className='boxAnswer' defaultValue={cards[index].answer} />
//             </div>
//           </div>       
//           <div className='btns'>
//             <button className='save orange H'>Save</button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

