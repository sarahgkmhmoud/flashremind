import React from "react";
import { Card } from "./components/Card.js";
import { EditBox } from "./components/Editbox.js";
import './App.css';
import users from './Data.json'
import {BrowserRouter, Routes, Route } from "react-router-dom"


function App() {
  

  
      
  const Editboxbath = () => {
    return (
      
        users.map((user) => {
          return (
        <BrowserRouter>
        <Routes>
        <Route path="/edit" element={<EditBox 
        key= {user.id}
        title={user.cardscategory.categoryname} 
        question= {user.cardscategory.categorycards[0].question}
        answer = {user.cardscategory.categorycards[0].answer}
        />}/>     <Route path="card" element={<Card
    key= {user.id}
    title={user.cardscategory.categoryname} 
    question= {user.cardscategory.categorycards[0].question}
    answer = {user.cardscategory.categorycards[0].answer}
    />}/>
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
