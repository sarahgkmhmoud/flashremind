import React, { useEffect, useState } from "react";
import "../../src/App.css";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import returnIcon from "../assets/Return.svg";

export const EditCategory = () => {
  const navigate = useNavigate(); // Hook to navigate programmatically
  const [values, setValues] = useState({
    userId: null,
    Id: null,
    categoryname: "",
    cards: [],
    id:''
  });

  const { userID, CategoryID } = useParams(); // Use useParams to get route parameters

  const handleCatagorypage = () => {
    navigate(`/Categories/${userID}`);
  };

  useEffect(() => {
    console.log("userID:", userID);
    console.log("CategoryID:", CategoryID);

    if (userID && CategoryID) {
      axios
        .get(`http://localhost:3001/categories`)
        .then((response) => {
          console.log("API response data:", response.data); // Log the response data
          const category = response.data.find(
            (category) =>
              category.userId ===userID&&
              category.Id === parseInt(CategoryID)
          );
          console.log("category before set:", category); // Debugging line

          if (category) {
            setValues((prevValues) => ({
              ...prevValues,
              userId: category.userId,
              Id: category.Id,
              categoryname: category.categoryname,
              cards: category.cards,
              id: category.id
            }));
          } else {
            console.error("Category not found");
          }
        })
        .catch((error) => {
          console.error("Error fetching categories:", error);
        });
    }
  }, [userID, CategoryID]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    axios
      .put(`http://localhost:3001/categories/${values.id}`, values)
      .then((response) => {
        console.log("Category updated", response.data);
        // Navigate back to the categories list or wherever appropriate
        navigate(`/Categories/${userID}`);
      })
      .catch((error) => {
        console.error("Error updating category:", error);
      });
  };

  return (
    <div className="Container">
      <div className="return">
        <button onClick={handleCatagorypage}>
          <img alt="next" src={returnIcon} width={50} height={31} />
        </button>
      </div>
      <div className="text">
        <h3>Edit an Existing Category</h3>
      </div>
      <div className="Cardbox">
        <div className="Question text">
          <input
            className="fitQuestion"
            type="text"
            name="categoryname"
            onChange={handleInputChange}
          />
        </div>
        <div className="btns">
          <button className="save orange H" onClick={handleSubmit}>
            Save
          </button>
        </div>
      </div>
    </div>
  );
};
