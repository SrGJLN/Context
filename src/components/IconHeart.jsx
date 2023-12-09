import React from 'react';

const IconHeart = ({ isFavorite, onClick }) => {
  return (
    <span onClick={onClick}>
      {isFavorite ? '❤️' : '🤍'}
    </span>
  );
};

export default IconHeart;

