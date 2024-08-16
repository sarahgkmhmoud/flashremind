const deleteCard = async (cardId) => {
    if (category) {
      try {
        // Filter out the card you want to delete by its Id
        const updatedCards = category.cards.filter(card => card.Id !== cardId);
  
        // Create a new category object with the updated cards array
        const updatedCategory = {
          ...category,
          cards: updatedCards,
        };
  
        // Update the category in the backend
        const response = await axios.put(`http://localhost:3001/categories/${category.id}`, updatedCategory);
        console.log('Card deleted and category updated:', response.data);
  
        // Update the local state to reflect the changes
        setCategory(updatedCategory);
      } catch (error) {
        console.error('Error deleting card:', error);
      }
    } else {
      console.error('Category is not defined');
    }
  };
  