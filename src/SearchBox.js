import React from 'react';

const SearchBox = () => {
    return (
      <div className='pa2'>
        <input 
            className='pa3 ba b--light-blue bg-washed-red'
            type='search' 
            placeholder='search robots' 
        />
      </div> 
    );
}

export default SearchBox;