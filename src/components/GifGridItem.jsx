import React from 'react';

const GifGridItem = ({ title, gif }) => {
  return (

    <div className='card animate__animated animate__backInDown'>
      <img src={gif} alt="gif-cheese" />
      <p>{title}</p>
    </div>
  );
};

export default GifGridItem;
