import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../src/App.css';
import nextIcon from '../assets/next.png';
import returnIcon from '../assets/Return.png';
import discoverIcon from '../assets/discover.png';
import { useNavigate ,useParams} from "react-router-dom";
import { FacebookIcon, FacebookShareButton, TwitterIcon, TwitterShareButton, WhatsappIcon, WhatsappShareButton } from 'react-share';

export const ShareCard = () => {
  const currentUrl = 'www.google.com'; /*window.location.href*/
  return (
    <>
      <FacebookShareButton url={currentUrl}>
        <FacebookIcon className='sharebuttom H' />
      </FacebookShareButton>

      <TwitterShareButton url={currentUrl}>
        <TwitterIcon className='sharebuttom H' />
      </TwitterShareButton>

      <WhatsappShareButton url={currentUrl}>
        <WhatsappIcon className='sharebuttom H' />
      </WhatsappShareButton>
    </>
  );
};




export const Card = () => {
  const { userID, CategoryID } = useParams(); // Use useParams to get route parameters
  console.log('User ID:', userID); // Debugging line
  console.log('Category ID:', CategoryID); // Debugging line
  const [cards, setCards] = useState([]);
  const [categoryName, setCategoryName] = useState('');
  const [index, setIndex] = useState(0);
  const [isVisible, setVisible] = useState(false);
  const [category, setCategory] = useState(null);
  const navigate = useNavigate();
  const handleEditClick = () => {
    navigate(`/card/edit/${userID}/${CategoryID}/${index}`);
  };
  const goToReturn = () => {
    navigate(`/Categories/${userID}`);
  };
  const goToCreate = () => {
    navigate(`/Createcard/${userID}/${CategoryID}`);
  };
  useEffect(() => {
    if (userID !== null) {
      axios.get(`http://localhost:3001/categories`)
        .then(response => {
          console.log('API Response:', response.data); // Debugging line

          const category = response.data.find(category => category.userId === parseInt(userID) && category.Id === parseInt(CategoryID));
          console.log('category before set:', category); // Debugging line

          if (category) {
            setCards(category.cards);
            setCategory(category)
            console.log('cards after set:', category.cards); // Debugging line

            setCategoryName(category.categoryname);
            console.log('cards after set:', category.categoryName); // Debugging line

          }
        })
        .catch(error => {
          console.error('Error fetching categories:', error);
        });
    }
  }, [userID, CategoryID]);
  const deleteCard = async (cardId) => {
    if (category) {
      try {
        // Filter out the card you want to delete by its Id
        const updatedCards = category.cards.filter(card => card.Id !== cardId).map((card,index) => card.Id = index)
        // Create a new category object with the updated cards array
        const updatedCategory = {
          ...category,
          cards: updatedCards,
        };
  
        // Update the category in the backend
        const response = await axios.put(`http://localhost:3001/categories/${category.id}`, updatedCategory);
        console.log('Card deleted and category updated:', response.data);
        if(index !== 0){
        handlePrevClick()
        }
        else{
          goToReturn()
        }
        // Update the local state to reflect the changes
        setCategory(updatedCategory);
      } catch (error) {
        console.error('Error deleting card:', error);
      }
    } else {
      console.error('Category is not defined');
    }
  };

  const toggleAnswer = () => {
    setVisible(!isVisible);
  };

  useEffect(() => {
    setVisible(false);
  }, [index]);

  const handleNextClick = () => {
    if (index < cards.length - 1) {
      setIndex(index + 1);
    }
  };

  const handlePrevClick = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  return (
    <div className='Container'>
      <div className='return'>
      <button onClick={goToReturn}>
    <img alt='next' src={returnIcon} width={50} height={31} />
  </button> 
  <button className='green' onClick={goToCreate}>
      Add+
    </button>   
       </div>
      <div className='text'>
        <h3>{categoryName}</h3>
      </div>
      <div className='Cardbox'>
        {cards.length > 0 && (
          <>
            <div className='Question text'><h4>{cards[index].question}</h4></div>
            <div className='text'>
              <p className='inline'>Answer</p>
              <button onClick={toggleAnswer}>
                <img alt='discover' src={discoverIcon} width={19.94} height={15.97} />
              </button>
              <div className={isVisible ? 'visible boxAnswer' : 'hidden boxAnswer'}>
                <p>{cards[index].answer}</p>
              </div>
            </div>
            <div className='nextCard'>
              <button onClick={handlePrevClick}>
                <img alt='prev' src={returnIcon} width={30} height={30} />
              </button>
              <button onClick={handleNextClick}>
                <img alt='next' src={nextIcon} width={30} height={30} />
              </button>
            </div>
          </>
        )}
      </div>
      <div className='btns'>
      <button className='edit orange H' onClick={handleEditClick}>Edit</button>  
      <button className='delete red' onClick={()=>deleteCard(cards[index].Id)}>Delete</button>

        <ShareCard />
      </div>
    </div>
  );
};