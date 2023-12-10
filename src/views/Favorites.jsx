import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Favorites = () => {
  const { images, isFavorite } = useContext(AppContext);
  const favoriteImages = images.filter((image) => isFavorite(image.id));

  return (
    <main className="container">
      <h2>Mis Favoritas</h2>
      <div className="row row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-5">
        
        {favoriteImages.map((image) => (
          <div className="col mt-5 cardT" key={image.id}>
            <div className="card mt-3 border-light" style={{ width: "18rem" }}>
              <img
                src={`${image.src.large}`}
                className="card-img-top"
                alt="{e.name}"
                style={{ width: "18rem", height: "15rem" }}
              />
              <div className="card-body">
                <h5 className="card-title">{image.photographer}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Favorites;

