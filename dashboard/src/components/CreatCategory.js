import React, { useState, useEffect } from 'react';
import '../../src/App.css';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid'; // Import UUID library

export const Createcategory = () => {
  const navigate = useNavigate();
  const { userID } = useParams();
  const [values, setValues] = useState({
    userId: userID,  // Fallback to null if undefined
    Id: uuidv4(),
    categoryname: "",
    cards: [],
  });

  useEffect(() => {
    const fetchCategoryCount = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/categories`);
        const categoryCount = response.data.length;
        setValues(prevValues => ({
          ...prevValues,
          Id: categoryCount + 1, // Assuming new category ID is based on the count of categories
        }));
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };
    fetchCategoryCount();
  }, [userID]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setValues(prevValues => ({
      ...prevValues,
      [name]: value
    }));
  };

  const handleSubmit = async () => {
    try {
      const newCategory = {
        ...values,
      };

      // Add the new category to the backend
      await axios.post('http://localhost:3001/categories', newCategory);

      // Navigate back to the cards view
      navigate(`/Createcard/${userID}/${newCategory.Id}`);
    } catch (error) {
      console.error('Error creating category:', error);
    }
  };

  return (
    <div className='Container'>
      <div className='text'>
        <h3>Create a New Category</h3>
      </div>
      <div className='Cardbox'>
        <div className='Question text'>
          <input
            className='fitQuestion'
            type='text'
            name='categoryname'
            placeholder="Enter category name"
            value={values.categoryname}
            onChange={handleInputChange}
          />
        </div>
        <div className='btns'>
          <button className='save orange H' onClick={handleSubmit}>Save</button>
        </div>
      </div>
    </div>
  );
};
