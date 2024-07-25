import React from "react";
import portfolioData from "@/data/portfolio.json";
import "./Portfolio.scss";

const ImageContainer = () => {
  return (
    <div className="image-container">
      <div className="image-column">
        {portfolioData.slice(0, 2).map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={image.alt}
            className="image-column__image"
            loading="lazy"
          />
        ))}
      </div>
      <div className="image-column image-column--middle">
        {portfolioData.slice(2, 4).map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={image.alt}
            className="image-column__image"
            loading="lazy"
          />
        ))}
      </div>
      <div className="image-column">
        {portfolioData.slice(4, 6).map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={image.alt}
            className="image-column__image"
            loading="lazy"
          />
        ))}
      </div>
    </div>
  );
};

export default ImageContainer;
