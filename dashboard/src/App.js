import React from "react";
import { Card } from "./components/Card.js";
import { EditBox } from "./components/Editbox.js";
import { Createcard } from "./components/Createcard.js";
import {SignUpLogIn} from "./components/forms/SignUpLogIn.js"
import {Categories} from "./components/Categories.js"
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import discoverIcon from './assets/discover.png';


function App() {
  
  // const [index, setIndex] = useState(0);
  // const [isVisible, setVisible] = useState(false);

  // useEffect(() => {
  //   setVisible(false);
  // }, [index]);

  // const toggleAnswer = () => {
  //   setVisible(!isVisible);
  // }

  // const handleNextClick = (cards) => {
  //   if (index < cards.length - 1) {
  //     setIndex(index + 1);
  //   }
  // };

  // const handlePrevClick = () => {
  //   if (index > 0) {
  //     setIndex(index - 1);
  //   }
  // };

  // if (!users || !users.categories || !users.categories[0].cards) {
  //   return <div>Loading...</div>; // Render a loading state while fetching
  // }

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
           <Route 
            path="/card/edit" 
            element={<EditBox 
            />}
          />     
          <Route 
            path="/card" 
            element={
              <Card
                // nextclick={() => handleNextClick(categories[0].cards)}
                // prevclick={handlePrevClick}
              >
                <button >
                  <img alt='discover' src={discoverIcon} width={19.94} height={15.97}/>
                </button>
                <div className={ 'visible boxAnswer hidden boxAnswer'}>
                  <p>answer</p>
                </div>
              </Card>
            }
          />
          <Route path="/Createcard" element={<Createcard />} />
          <Route path="/signup" element={    <SignUpLogIn />} />
          <Route path= "/Categories" element={<Categories userID={1}/>}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  ); 
}


export default App;
