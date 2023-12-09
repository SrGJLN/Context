import React, { createContext, useState, useEffect } from 'react';

export const AppContext = createContext();

const URL = '/photos.json'

const AppProvider = ({ children }) => {
  const [images, setImages] = useState([]);
  const [favorites, setFavorites] = useState([]);

  const fetchImages = async () => {
    try {
      const response = await fetch(URL);
      const data = await response.json();
      setImages(data.photos);
    } catch (error) {
      console.error(error);
    }
  };

  const toggleFavorite = (id) => {
    const isFavorite = favorites.includes(id);

    if (isFavorite) {
      setFavorites(favorites.filter((favId) => favId !== id));
    } else {
      setFavorites([...favorites, id]);
    }
  };

  const isFavorite = (id) => favorites.includes(id);

  useEffect(() => {
    fetchImages();
  }, []);

  return (
    <AppContext.Provider value={{ images, toggleFavorite, isFavorite }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;