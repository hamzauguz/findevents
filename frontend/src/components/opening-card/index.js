import React from "react";
import "./Styles.OpeningCard.css";

const OpeningCard = ({ src, title, description }) => {
  return (
    <div className="containeroc">
      <div className="cardoc">
        <div className="faceoc face1oc">
          <div className="contentoc">
            <img src={src} />
            <h3>{title}</h3>
          </div>
        </div>
        <div className="faceoc face2oc">
          <div className="contentoc-desc">
            <p>{description}</p>
            {/*  <a href="#">Read More</a> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OpeningCard;
