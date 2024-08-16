import React from "react";
import { Card } from "./components/Card.js";
import { EditBox } from "./components/Editbox.js";
import { Createcard } from "./components/Createcard.js";
import {SignUpLogIn} from "./components/forms/SignUpLogIn.js"
import {Categories} from "./components/Categories.js"
import { EditCategory } from "./components/EditCategotry.js";
import { Createcategory } from "./components/CreatCategory.js";
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
 

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
        <Route path="/card/edit/:userID/:CategoryID/:index" element={<EditBox />} />    
          <Route path="/card/:userID/:CategoryID" element={<Card />}/>
          <Route path="/Createcard/:userID/:CategoryID" element={<Createcard />} />
          <Route path="/" element={    <SignUpLogIn />} />
          <Route path= "/Categories/:userID" element={<Categories userID={0}/>}/>
          <Route path="Createcategory/:userID" element={<Createcategory/>}/>
          <Route path="/Categories/edit/:userID/:CategoryID" element={<EditCategory/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  ); 
}


export default App;
