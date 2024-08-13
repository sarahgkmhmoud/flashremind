import React, {useState, useEffect} from 'react'
import '../../src/App.css'
import axios from 'axios';
import nextIcon from '../assets/next.png';
import { useNavigate } from "react-router-dom";
export function NavigatCardButton() {
  const navigate = useNavigate(); // Hook to navigate programmatically

  const goTocard = () => {
    navigate('/card'); 
  }// Navigate to the "About" component
    return(
      <button onClick={goTocard}>
            <img alt='next' src={nextIcon} width={30} height={30} />
            </button>)
  };
export const Categories =({userID}) => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        if (userID !== null) {
          axios.get(`http://localhost:3001/categories`)
            .then(response => {
              setCategories(response.data);
            })
            .catch(error => {
              console.error('Error fetching categories:', error);
            });
        }
      }, [userID]);
  return (
    <div className='Container'> 
      <div className='text'>
      <h2>Your Categories</h2>
      </div>
      <div className='Cardbox'>
        <div className='text'>
        <ul>
        {categories.filter(category => category.userId === userID).map(category => (
          <li key={category.categoryId}>{category.categoryname}
       <NavigatCardButton/> 
          </li>
           
          
        ))}
          <button className='green' >
             Add+
             </button>
      </ul>
            
            </div>
          </div>
    

      </div>
  )
}

