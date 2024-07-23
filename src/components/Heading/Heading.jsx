import React from "react";
import "./Heading.scss";

const Heading = ({ subtitle, title, reverse }) => {
  return (
    <div className={`heading ${reverse ? "heading--right" : ""}`}>
      <span className="heading__subtitle">{subtitle}</span>
      <h2
        className="heading__title"
        dangerouslySetInnerHTML={{ __html: title }}
      ></h2>
    </div>
  );
};

export default Heading;
