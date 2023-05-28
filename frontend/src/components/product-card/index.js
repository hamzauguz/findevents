import React from "react";
import "./Styles.ProductCard.css";

const ProductCard = ({ date, src, title, category, description, price, cunit, onClick }) => {
  return (
    <div className="product-card">
      <div className="badge">{date}</div>
      <div className="product-tumb">
        <img src={src} alt="" />
      </div>
      <div className="product-details">
        <span className="product-catagory">{category}</span>
        <h4 onClick={onClick}>
          <a href="">{title}</a>
        </h4>
        <p>{description}</p>
        <div className="product-bottom-details">
          <div className="product-price">
            {cunit}
            {price}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
