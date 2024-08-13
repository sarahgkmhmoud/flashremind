// import React, { useEffect, useState } from "react";
// import { Card } from "./components/Card.js";
// import { EditBox } from "./components/Editbox.js";
// import { Signup } from "./components/signup.js";
// import './App.css';
// import {BrowserRouter, Routes, Route } from "react-router-dom"
// import discoverIcon from './assets/discover.png';
// import axios from "axios";


// function App() {
// const [users, setUsers] = useState({})
//   useEffect(()=>{
//     const url = 'http://localhost:3001/users'
//     axios.get(url)
//       .then(res => setUsers(res.data[0]))
//       .catch(err=> console.log(err));
//   },[])  
//   console.log(users)
//     const[index, setindex] = useState(0);
//     const [isvisible, setvisible] = useState(false);
//     useEffect(()=>{setvisible(false)},[index])

// const Toggleanswer = ()=>{
//   setvisible(!isvisible)
// }

//     const handleNextClick = (card) => {
//       if (index < card.length - 1) {
//         setindex(index + 1);
//       }
      
//     };
//     const handleprevClick = () => {
//       if (index > 0) {
//         setindex(index - 1);
//       }
//     }; 
      
//   const setroutes = () => {
//     return (
      
//         users.categories[0].cards.map((card) => {
//           return (
//         <BrowserRouter key={card.cardId}>
//         <Routes>
//         <Route path="/card/edit" element={<EditBox 
//         key= {card.cardId}
//         title={users.categories[0].categoryname} 
//         question= {card.question}
//         answer = {card.answer}
//          />}/>     
//          <Route path="card" element={
//               <Card
//               key= {card.cardId}
//         title={users.categories[0].categoryname} 
//         question= {card.question}
//         answer = {card.answer}
//               nextclick ={() => handleNextClick(card)}
//               prevclick ={() => handleprevClick()}

//               >

//                      <button onClick={Toggleanswer}>
//             <img  alt='discover' src={discoverIcon} width={19.94} height={15.97}/>
//             </button>
//           <div className={isvisible ? 'visible boxAnswer' : 'hidden boxAnswer'}>
//             <p>{card.answer}</p>
//             </div>
//                 </Card>
// }
//     />
//     <Route path="signup" element={<Signup/>}></Route>
//         </Routes>
//         </BrowserRouter>
//       )
//           })
//     )
//     }

//   return (
//     <>
//     <div className="App">
//       {setroutes()}
//     </div>
//     </>
   
//   );
// }

// export default App;
import React, { useEffect, useState } from "react";
import { Card } from "./components/Card.js";
import { EditBox } from "./components/Editbox.js";
import { Createcard } from "./components/Createcard.js";
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import discoverIcon from './assets/discover.png';
import axios from "axios";

function App() {
  const [users, setUsers] = useState(null); // Start with null to indicate data is being fetched

  useEffect(() => {
    axios.get('http://localhost:3001/users/0/categories/0')
  .then(response => console.log(response.data))
  .catch(error => console.error('Error fetching category:', error));
 }, []);

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

  // return (
  //   <BrowserRouter>
  //     <div className="App">
  //       <Routes>
  //         <Route 
  //           path="/card/edit" 
  //           element={<EditBox 
  //             key={users.categories[0].cards[index].cardId}
  //             title={users.categories[0].categoryname} 
  //             question={users.categories[0].cards[index].question}
  //             answer={users.categories[0].cards[index].answer}
  //           />}
  //         />     
  //         <Route 
  //           path="/card" 
  //           element={
  //             <Card
  //               key={users.categories[0].cards[index].cardId}
  //               title={users.categories[0].categoryname} 
  //               question={users.categories[0].cards[index].question}
  //               answer={users.categories[0].cards[index].answer}
  //               nextclick={() => handleNextClick(users.categories[0].cards)}
  //               prevclick={handlePrevClick}
  //             >
  //               <button onClick={toggleAnswer}>
  //                 <img alt='discover' src={discoverIcon} width={19.94} height={15.97}/>
  //               </button>
  //               <div className={isVisible ? 'visible boxAnswer' : 'hidden boxAnswer'}>
  //                 <p>{users.categories[0].cards[index].answer}</p>
  //               </div>
  //             </Card>
  //           }
  //         />
  //         <Route path="/Createcard" element={<Createcard userId={users.userId} categoryId={users.categories[0].categoryId} cardId={users.categories[0].cards.length ? users.categories[0].cards.cardId + 1 : 0 } />} />
  //       </Routes>
  //     </div>
  //   </BrowserRouter>
  // );
}

export default App;
