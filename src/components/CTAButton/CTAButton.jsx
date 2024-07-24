import React from "react";
import { useNavigate } from "react-router-dom";
import "./CTAButton.scss";

const CTAButton = ({ transparent }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/contacts");
  };

  return (
    <button
      className={`cta-button ${
        transparent ? "cta--transparent" : ""
      }`}
      onClick={handleClick}
    >
      Book a call
    </button>
  );
};

export default CTAButton;
