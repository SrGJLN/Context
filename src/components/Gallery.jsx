import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import IconHeart from './IconHeart';

const Gallery = () => {
  const { images } = useContext(AppContext);

  return (
    <div>
      <h1>Gallery</h1>
      {images.map((image) => (
        <div key={image.id}>
          <img src={image.src.large} alt={image.alt} />
          <IconHeart filled={image.isFavorite}
          />
        </div>
      ))}
    </div>
  );
};

export default Gallery;