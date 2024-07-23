import React from "react";
import CTAButton from "../CTAButton/CTAButton";
import "./Banner.scss";

const Banner = ({ src, alt, subtitle, title }) => {
  return (
    <div className="banner">
      <img
        className="banner__bg"
        src={src}
        alt={alt}
        loading="lazy"
      />
      <div className="banner__info-container">
        <strong className="banner__subtitle">{subtitle}</strong>
        <h2 className="banner__title">{title}</h2>
        <CTAButton transparent />
      </div>
    </div>
  );
};

export default Banner;
