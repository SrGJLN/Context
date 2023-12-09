import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import IconHeart from "./IconHeart";

const Gallery = () => {
  const { images, isFavorite, toggleFavorite} = useContext(AppContext);

  return (
    <main className="container">
      <div className="row row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-3">
        {images.map((image) => (
          <div className="col mt-5 cardT" key={image.id}>
            <div className="card mt-3 border-light" style={{ width: "18rem" }}>
              <img
                src={`${image.src.large}`}
                className="card-img-top"
                alt="{e.name}"
                style={{ width: "18rem", height: "15rem" }}
              />
              <IconHeart
                isFavorite={isFavorite(image.id)}
                onClick={() => toggleFavorite(image.id)}
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

export default Gallery;

