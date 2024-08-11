import React, { useEffect, useState } from "react";
import { Card } from "./components/Card.js";
import { EditBox } from "./components/Editbox.js";
import './App.css';
import users from './Data.json'
import {BrowserRouter, Routes, Route } from "react-router-dom"
import discoverIcon from './assets/discover.png';




function App() {
    const[index, setindex] = useState(0);
    const [isvisible, setvisible] = useState(false);
    useEffect(()=>{setvisible(false)},[index])

const Toggleanswer = ()=>{
  setvisible(!isvisible)
}

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

              >
                     <button onClick={Toggleanswer}>
            <img  alt='discover' src={discoverIcon} width={19.94} height={15.97}/>
            </button>
          <div className={isvisible ? 'visible boxAnswer' : 'hidden boxAnswer'}>
            <p>{user.cardscategory.categorycards[index].answer}</p>
            </div>
                </Card>
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
