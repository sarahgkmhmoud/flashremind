import React, { useState } from "react";
import { Card } from "./components/Card.js";
import { EditBox } from "./components/Editbox.js";
import './App.css';
import users from './Data.json'
import {BrowserRouter, Routes, Route } from "react-router-dom"


function App() {
    const[index, setindex] = useState(0);

    const handleNextClick = (user) => {
      if (index < user.cardscategory.categorycards.length - 1) {
        setindex(index + 1);
      }
    };
    const handleprevClick = () => {
      if (index > 0) {
        setindex(index - 1);
      }
    }; 
      
  const Editboxbath = () => {
    return (
      
        users.map((user) => {
          return (
        <BrowserRouter>
        <Routes>
        <Route path="/edit" element={<EditBox 
        key= {user.id}
        title={user.cardscategory.categoryname} 
        question= {user.cardscategory.categorycards[index].question}
        answer = {user.cardscategory.categorycards[index].answer}
         />}/>     
         <Route path="card" element={
              <Card
              key= {user.id}
              title={user.cardscategory.categoryname} 
              question= {user.cardscategory.categorycards[index].question}
              answer = {user.cardscategory.categorycards[index].answer}
              nextclick ={() => handleNextClick(user)}
              prevclick ={() => handleprevClick()}

              />
}
    />
        </Routes>
        </BrowserRouter>
      )
          })
    )
    }
     
   
      
      
    
    


  return (
    <>
     <div className="App">
      {Editboxbath()}
    </div>
    </>
   
  );
}

export default App;
