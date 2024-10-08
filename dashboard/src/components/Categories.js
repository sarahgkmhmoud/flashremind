import React, { useState, useEffect } from "react";
import "../../src/App.css";
import add_icon from "../assets/add.svg";
import axios from "axios";
import nextIcon from "../assets/next.svg";
import deleticon from '../assets/delete.svg';
import editicon from '../assets/edit.svg';
import { useNavigate, useParams } from "react-router-dom";

export const Categories = () => {
  const {userID} = useParams()
  const navigate = useNavigate();
  const handleCategoryClick = (CategoryID) => {
    navigate(`/card/${userID}/${CategoryID}`);
  };
  const handleAddcategory = () => {
    navigate(`/Createcategory/${userID}`);
  };
  const handleEditcategory = (CategoryID) => {
    navigate(`/Categories/edit/${userID}/${CategoryID}`);
  };
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    if (userID !== null) {
      axios
        .get(`http://localhost:3001/categories`)
        .then((response) => {
          setCategories(response.data);
        })
        .catch((error) => {
          console.error("Error fetching categories:", error);
        });
    }
  }, [userID]);
  const deleteCategory = async (categoryID) => {
    try {
      const category = categories.find(
        (category) => category.Id === categoryID,
      );
      await axios.delete(`http://localhost:3001/categories/${category.id}`);

      // Filter out the category you want to delete by its Id
      const updatedCategories = categories.filter(
        (category) => category.Id !== categoryID,
      );
      // Create a new category object with the updated cards array

      // Update the category list in the state
      setCategories(updatedCategories);

      // Delete the category from the backend
      console.log("Category deleted successfully");
    } catch (error) {
      console.error("Error deleting category:", error);
    }
  };

  return (
    <div className="Container">
      <div className="text">
        <h2>Your Categories</h2>
      </div>
      <div className="Cardbox">
        <div className="text">
          <ul>
            {categories
              .filter((category) => category.userId === userID)
              .map((category) => (
                <li className="inline" key={category.id}>
                  <div className="inline cat">
                  {category.categoryname}

                  <button

                    className=" transparent W"
                    onClick={() => handleCategoryClick(category.Id)}
                  >
                    <img alt="next" src={nextIcon} width={20} height={20} />
                  </button>
                  </div>

                  <div className="btn inline">
                    <button
                      className="edit orange C H"
                      onClick={() => handleEditcategory(category.Id)}
                    >
                      <img className="edit" alt="edit" src={editicon} width={20} height={20}/>
                    </button>
                    <button
                      className="delete red C H"
                      onClick={() => deleteCategory(category.Id)}
                    >
                    <img className="del" alt="del" src={deleticon} width={20} height={20}/>
 
                    </button>
                  </div>
                </li>
              ))}
            
          </ul>
        </div>
      </div>
      <div className="return">
        <button className="green" onClick={handleAddcategory}>
          <img src={add_icon} alt="add" />
        </button>
      </div>
    </div>
  );
};
