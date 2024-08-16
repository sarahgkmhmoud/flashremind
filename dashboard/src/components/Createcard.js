// // import React, { useState, useEffect } from 'react';
// // import '../../src/App.css'
// // // import nextIcon from '../assets/next.png';
// // import discoverIcon from '../assets/discover.png';
// // import axios from 'axios';
// // import { useParams } from 'react-router-dom';
// // // // export const Createcard = ({userId, categoryId, cardId, title}) => {
// // // //   const [values, setValues] = useState({
// // // //     "cardId" : {cardId},
// // // //     "question":"",
// // // //     "answer": ""
// // // //   })
// // // //   const handleChange = (event) => {
// // // //     const { name, value } = event.target;
// // // //     setValues(prevValues => ({
// // // //       ...prevValues,
// // // //       [name]: value
// // // //     }));
// // // //   };
// // // //   const handlesubmit = (event) =>{
// // // //     event.preventDefault();
// // // //     const url = `http://localhost:3001/users/${userId}/categories/${categoryId}/cards`;
// // // //     axios.post(url,values)
// // // //       .then(res =>
// // // //         console.log(res)) // Fetch the first user
// // // //       .catch(err => console.log(err));

// // // //   }
// // // //   return (
// // // //     <div className='Container'> 
// // // //     <div className='return'>
// // // //     </div>
// // // //     <div className='text'>
// // // //       <h3>{title}</h3>
// // // //     </div>
// // // //     <div className='Cardbox'>
// // // //       <div className='Question text'>
// // // //           <input className=' fitQuestion' type='text' placeholder='put your word' onChange={handleChange}>
           
// // // //               </input>
// // // //               </div>
// // // //       <div className='text'>
// // // //           <p className='inline'>Answer</p>    
// // // //           <img  alt='discover' src={discoverIcon} width={19.94} height={15.97}/>
// // // //         <div className='boxAnswer'>
// // // //           <textarea className='boxAnswer' placeholder='The answer is' onChange={handleChange}/>
// // // //           </div>
// // // //         </div>       
// // // //         <div className='btns'>
// // // //           {/* <button className='share green'>Share</button> */}
// // // //           <button className='save orange H' onClick={handlesubmit}>Save</button>
// // // //           {/* <button className='delete red' onClick={deletbtn}>Delete</button> */}

// // // //         </div>

// // // //         {/* <div className='nextCard'>
// // // //           <img alt='next' src={nextIcon} width={30} height={30}/>
// // // //           </div> */}
// // // //         </div>
        
// // // //     </div>
// // // // )
// // // // }

// // // import React, { useState } from 'react';
// // // import '../../src/App.css';
// // // import discoverIcon from '../assets/discover.png';
// // // import axios from 'axios';

// // // export const Createcard = () => {
// // //   const [values, setValues] = useState({
// // //     question: '',
// // //     answer: '',
// // //     cardId: none // Default or dynamic ID logic
// // //   });

// // //   const handleChange = (event) => {
// // //     const { name, value } = event.target;
// // //     setValues(prevValues => ({
// // //       ...prevValues,
// // //       [name]: value
// // //     }));
// // //   };

// // //   const handleSubmit = (event) => {
// // //     event.preventDefault();
// // //     const url = `http://localhost:3001/categories`;

// // //     axios.post(url, values)
// // //       .then(res => console.log(res))
// // //       .catch(err => console.log(err));
// // //   };

  

// // export const Createcard = () => {
// //   const { userID, CategoryID } = useParams(); // Get userID and categoryID from URL params
// //   const [category, setCategory] = useState(null); // State to hold the specific category
// //   const [values, setValues] = useState([{
// //     question: '',
// //     answer: '',
// //     Id: null,
// //     categoryId:'0' // Initialize as null, will be set dynamically
// //   }]);

// //   useEffect(() => {
// //     console.log('userID:', userID);
// //     console.log('CategoryID:', CategoryID);
// //     // Fetch the specific category based on userID and categoryID
// //     axios.get(`http://localhost:3001/categories`)
// //     .then(response => {
// //         const category = response.data.find(
// //           cat => cat.userId === parseInt(userID) && cat.Id === parseInt(CategoryID)
// //         );

// //         if (category) {
// //           console.log('Fetched category:', category); // Debugging line
// //           setCategory(category);
// //           const newCardId = category.cards ? category.cards.length : 0;
// //           setValues(prevValues => ({
// //             ...prevValues,
// //             Id: newCardId,
// //             categoryId: parseInt(CategoryID)
// //           }
// //           )
// //           );
// //         } else {
// //           console.error('Category not found');
// //         }
// //       })
// //       .catch(error => {
// //         console.error('Error fetching category:', error);
// //       });
// //   }, [userID, CategoryID]);

// //   const handleInputChange = (event) => {
// //     const { name, value } = event.target;
// //     console.log(event.target.value)
// //     setValues({
// //       ...values,
// //       [name]: value
// //     });
// //   };

// //   const handleSubmit = () => {
// //     if (category) {
// //       // Add the new card to the category's cards array
// //       const updatedCategory = { category };
// //       console.log(`values:${values} `)
// //       if (!updatedCategory.cards) {
// //         updatedCategory.cards = [];
// //       }
// //       updatedCategory.cards.push(values);
// //       console.log(`values:${values} `)

// //       // Update the category in the backend
// //       axios.put(`http://localhost:3001/categories`, updatedCategory)
// //       .then(response => {
// //           console.log('Card created and category updated:', response.data);
// //         })
// //         .catch(error => {
// //           console.error('Error updating category:', error);
// //         });
// //     }
// //   };

// //   return (
// //       <div className='Container'>
// //         <div className='return'></div>
// //         <div className='text'>
// //           <h3>Create a New Card</h3>
// //         </div>
// //         <div className='Cardbox'>
// //           <div className='Question text'>
// //             <input
// //               className='fitQuestion'
// //               type='text'
// //               name='question'
// //               placeholder='Put your word'
// //               onChange={handleInputChange}
// //             />
// //           </div>
// //           <div className='text'>
// //             <p className='inline'>Answer</p>
// //             <img alt='discover' src={discoverIcon} width={19.94} height={15.97} />
// //             <div className='boxAnswer'>
// //               <textarea
// //                 className='boxAnswer'
// //                 name='answer'
// //                 placeholder='The answer is'
// //                 onChange={handleInputChange}
// //               />
// //             </div>
// //           </div>
// //           <div className='btns'>
// //             <button className='save orange H' onClick={handleSubmit}>Save</button>
// //           </div>
// //         </div>
// //       </div>
// //     );
// //   };

// import React, { useState, useEffect } from 'react';
// import '../../src/App.css';
// import discoverIcon from '../assets/discover.png';
// import axios from 'axios';
// import {  useNavigate, useParams } from 'react-router-dom';

// export const Createcard = () => {
//   const navigate = useNavigate();
//   const { userID, CategoryID } = useParams();
//   const [category, setCategory] = useState(null);
//   const [values, setValues] = useState({
//     question: '',
//     answer: '',
//     Id: null,
//   });

//   useEffect(() => {
//     const fetchCategory = async () => {
//       try {
//         console.log('userID:', userID);
//         console.log('CategoryID:', CategoryID);

//         const response = await axios.get(`http://localhost:3001/categories`);
//         console.log("response.date:",response.data)
//         const category = response.data.find(
//           cat => cat.userId === parseInt(userID) && cat.id === parseInt(CategoryID)
//         );

//         if (category) {
//           console.log('Fetched category:', category);
//           setCategory(category);
//           const newCardId = category.cards ? category.cards.length : 0;
//           setValues(prevValues => ({
//             ...prevValues,
//             Id: newCardId,
//           }));
//         } else {
//           console.error('Category not found');
//         }
//       } catch (error) {
//         console.error('Error fetching category:', error);
//       }
//     };

//     fetchCategory();
//   }, [userID, CategoryID]);

//   const handleInputChange = (event) => {
//     const { name, value } = event.target;
//     console.log(event.target.name)
//     setValues(prevValues => ({
//       ...prevValues,
//       [name]: value
//     }));
//   };

//   const handleSubmit = async () => {
//     if (category) {
//       try {
//         // Create a new card object
//         const newCard = {
//           Id: category.cards.length,  // Generate a new Id based on the current length of the cards array
//           question: values.question,
//           answer: values.answer,
//         };
  
//         // Add the new card to the existing cards array
//         const updatedCategory = {
//           ...category,
//           cards: [...category.cards, newCard],
//         };
  
//         // Update the category in the backend
//         const response = await axios.put(`http://localhost:3001/categories/${category.id}`, updatedCategory);

//         console.log('Card created and category updated:', response.data);
//         navigate(`/card/${userID}/${CategoryID}`);

//       } catch (error) {
//         console.error('Error updating category:', error);
//       }
//     } else {
//       console.error('Category is not defined');
//     }
//   };
  

//   return (
//     <div className='Container'>
//       <div className='return'></div>
//       <div className='text'>
//         <h3>Create a New Card</h3>
//       </div>
//       <div className='Cardbox'>
//         <div className='Question text'>
//           <input
//             className='fitQuestion'
//             type='text'
//             name='question'
//             placeholder='Put your word'
//             onChange={handleInputChange}
//           />
//         </div>
//         <div className='text'>
//           <p className='inline'>Answer</p>
//           <img alt='discover' src={discoverIcon} width={19.94} height={15.97} />
//           <div className='boxAnswer'>
//             <textarea
//               className='boxAnswer'
//               name='answer'
//               placeholder='The answer is'
//               onChange={handleInputChange}
//             />
//           </div>
//         </div>
//         <div className='btns'>
//           <button className='save orange H' onClick={handleSubmit}>Save</button>
//         </div>
//       </div>
//     </div>
//   );
// };
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

export const Createcard = () => {
  const navigate = useNavigate();
  const { userID, CategoryID } = useParams();
  const [category, setCategory] = useState(null);
  const [values, setValues] = useState({
    question: '',
    answer: '',
    Id: null,
    categoryId: null,
  });

  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/categories`);
        const fetchedCategory = response.data.find(
          cat => cat.Id === parseInt(CategoryID)
        );

        if (fetchedCategory) {
          setCategory(fetchedCategory);
          setValues(prevValues => ({
            ...prevValues,
            Id: fetchedCategory.cards.length, // Assuming new card ID is based on the length of cards
            categoryId: parseInt(CategoryID)
          }));
        } else {
          console.error('Category not found');
        }
      } catch (error) {
        console.error('Error fetching category:', error);
      }
    };

    fetchCategory();
  }, [CategoryID]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setValues(prevValues => ({
      ...prevValues,
      [name]: value
    }));
  };

  const handleSubmit = async () => {
    if (category) {
      try {
        const newCard = {
          Id: category.cards.length, // Generate new card ID
          question: values.question,
          answer: values.answer,
          categoryId: parseInt(CategoryID),
        };

        const updatedCategory = {
          ...category,
          cards: [...category.cards, newCard],
        };

        await axios.put(`http://localhost:3001/categories/${category.id}`, updatedCategory);
        navigate(`/card/${userID}/${CategoryID}`); // Navigate back to the cards view
      } catch (error) {
        console.error('Error updating category:', error);
      }
    } else {
      console.error('Category is not defined');
    }
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
            onChange={handleInputChange}
          />
        </div>
        <div className='text'>
          <p className='inline'>Answer</p>
          <div className='boxAnswer'>
            <textarea
              className='boxAnswer'
              name='answer'
              placeholder='The answer is'
              onChange={handleInputChange}
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
