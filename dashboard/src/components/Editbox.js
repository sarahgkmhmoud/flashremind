import React, { useState, useEffect } from 'react'
import '../../src/App.css'
import returnIcon from '../assets/Return.svg';
import discoverIcon from '../assets/discover.svg';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

export const EditBox =() => {
  const [cards, setCards] = useState([]);
  const [categoryName, setCategoryName] = useState('');
  const { userID, CategoryID, index } = useParams(); // Use useParams to get route parameters
  const [category, setCategory] = useState(null);
  const [values, setValues] = useState({
    question: '',
    answer: '',
    Id: null,
    categoryId: null,
  });
  const navigate = useNavigate(); // Hook to navigate programmatically
  const handleCategoryClick = (CategoryID) => {
    navigate(`/card/${userID}/${CategoryID}`);
  };
  useEffect(() => {
  if (userID && CategoryID) {
          axios.get(`http://localhost:3001/categories`)
        .then(response => {
          console.log('API Response:', response.data); // Debugging line

          const category = response.data.find(category => category.userId === userID && category.Id === parseInt(CategoryID));
          console.log('category before set:', category); // Debugging line
          if (category) {
          setCategory(category)
            setCards(category.cards);
            console.log('cards after set:', category.cards); // Debugging line

            setCategoryName(category.categoryname);
            console.log('cards after set:', category.categoryname); // Debugging line

          
          if (index) {
            // If cardID is present, find the specific card to edit
            const card = category.cards.find(card => card.Id === parseInt(index));
            if (card) {
              setValues(prevValues => ({
                ...prevValues,
                question: card.question,
                answer: card.answer,
                Id: card.Id,
                categoryId: parseInt(CategoryID),
              })
              )
            } else {
              console.error('Card not found');
            }
          }
           else {
            // Set new card ID for a new card
            setValues(prevValues => ({
              ...prevValues,
              categoryId: parseInt(CategoryID),
              Id: category.cards.length // Generate a new Id
            }));
          } 
        }else {
          console.error('Category not found');
        
        }
      })
        .catch(error => {
          console.error('Error fetching categories:', error);
        });
    }
  },[userID, CategoryID, index]);

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
        let updatedCategory;
        
        if (index) {
          // Update existing card
          updatedCategory = {
            ...category,
            cards: category.cards.map(card =>
              card.Id === parseInt(index)
                ? { ...card, question: values.question, answer: values.answer }
                : card
            )
          };
        } 
        

        // Update the category in the backend
        await axios.put(`http://localhost:3001/categories/${category.id}`, updatedCategory);

        // Navigate back to the cards view
        navigate(`/card/${userID}/${CategoryID}`);
      } catch (error) {
        console.error('Error updating category:', error);
      }
    } else {
      console.error('Category is not defined');
    }
  };
  return (
    <div className='Container'> 
      <div className='return'>
      <button onClick={()=>handleCategoryClick(CategoryID)}>
      <img alt='next' src={returnIcon} width={50} height={31}/>
      </button>    
      </div>
      <div className='text'>
        <h3>{categoryName}</h3>
      </div>
     {cards.length > 0 && cards[index] && (

      <div className='Cardbox'>
        <div className='Question text'>
            <input
           name="question"
           onChange={handleInputChange}
           value={values.question}
           className='fitQuestion'
           type='text' >
            
                </input>
                </div>
        <div className='text'>
            <p className='inline'>Answer</p>    
            <img  alt='discover' src={discoverIcon} width={24.94} height={20.97}/>
          <div className='boxAnswer'>
            <textarea                 name="answer"
                onChange={handleInputChange}
                value={values.answer}
                className='boxAnswer'/>
            </div>
          </div>      
     
          <div className='btns'>
            {/* <button className='share green'>Share</button> */}
            <button className='save orange H' onClick={handleSubmit}>Save</button>
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
