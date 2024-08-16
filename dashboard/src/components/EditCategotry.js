import React,{useEffect, useState} from 'react';
import '../../src/App.css';
import axios from 'axios';
import { useParams ,useNavigate} from 'react-router-dom';
import returnIcon from '../assets/Return.png';

export const EditCategory= () => {
    const navigate = useNavigate(); // Hook to navigate programmatically
  const handleCatagorypage = () => {
    navigate(`/Categories/${userID}`);
  };
    const [categoryName, setCategoryName] = useState('');
    const { userID, CategoryID} = useParams(); // Use useParams to get route parameters
    useEffect(() => {
        console.log('userID:', userID);
        console.log('CategoryID:', CategoryID);
        
        if (userID !== null) {
          axios.get(`http://localhost:3001/categories`)
            .then(response => {
                console.log('API response data:', response.data); // Log the response data

              const category = response.data.find(category => category.userId === parseInt(userID) && category.Id === parseInt(CategoryID));
              console.log('category before set:', category); // Debugging line
    
              if (category) {
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
      <button onClick={handleCatagorypage}>
      <img alt='next' src={returnIcon} width={50} height={31}/>
      </button>    
      </div>
      <div className='text'>
      <h3>Edit an Existing Category</h3>
      </div>
      <div className='Cardbox'>
        <div className='Question text'>
          <input
            className='fitQuestion'
            type='text'
            name='question'
            defaultValue={categoryName}          />
        
        </div>
        <div className='btns'>
          <button className='save orange H' >Save</button>
        </div>
      </div>
    </div>
  );
};