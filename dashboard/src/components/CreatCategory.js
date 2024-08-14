import React from 'react';
import '../../src/App.css';

export const Createcategory = () => {
  

  return (
    <div className='Container'>
      <div className='return'></div>
      <div className='text'>
        <h3>Create a New Category</h3>
      </div>
      <div className='Cardbox'>
        <div className='Question text'>
          <input
            className='fitQuestion'
            type='text'
            name='question'
            placeholder='Put your name'
          />
        
        </div>
        <div className='btns'>
          <button className='save orange H' >Save</button>
        </div>
      </div>
    </div>
  );
};