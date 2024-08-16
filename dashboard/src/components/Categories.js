import React, {useState, useEffect} from 'react'
import '../../src/App.css'
import axios from 'axios';
import nextIcon from '../assets/next.png';
import { useNavigate} from "react-router-dom";
  
export const Categories =({userID}) => {
  const navigate = useNavigate();
  const handleCategoryClick = (CategoryID) => {
    navigate(`/card/${userID}/${CategoryID}`);
  };
  const handleAddcategory = ()=> {
    navigate(`/Createcategory/${userID}`)
  }
  const handleEditcategory = (CategoryID)=> {
    navigate(`/Categories/edit/${userID}/${CategoryID}`)
  }
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
      const deleteCategory = async (categoryID) => {
        try {
          const category = categories.find(category => category.Id === categoryID)
          await axios.delete(`http://localhost:3001/categories/${category.id}`);

          // Filter out the category you want to delete by its Id
          const updatedCategories = categories.filter(category => category.Id !== categoryID)
          // Create a new category object with the updated cards array
         
          
          // Update the category list in the state
          setCategories(updatedCategories);
    
          // Delete the category from the backend
          console.log('Category deleted successfully');
        } catch (error) {
          console.error('Error deleting category:', error);
        }
      };
    
  return (
    <div className='Container'> 
      <div className='text'>
      <h2>Your Categories</h2>
      </div>
      <div className='Cardbox'>
        <div className='text'>
        <ul>
        {categories.filter(category => category.userId === userID).map(category => (
          <li className='inline' key={category.id}>{category.categoryname}
       <button className='inline' onClick={() => handleCategoryClick(category.Id)}>
       <img alt='next' src={nextIcon} width={30} height={30} />
            </button>
            <div className='btn'>
      
      <button className='edit orange H inline' onClick={()=>handleEditcategory(category.Id)} >Edit</button>  
<button className='delete red' onClick={()=>deleteCategory(category.Id)}>Delete</button>
 </div>
 
          </li>
           
          
        ))}
          <button className='green' onClick={handleAddcategory} >
             Add+
             </button>
      

      </ul>
            
            </div>
          </div>
    

      </div>
  )
}

