import React from "react";
import "./Styles.accountcard.css";

const AccountCard = ({ onClick, cardTitle, cardPrice, cardDate, cardImage, deletePlace, deleteClick, editClick }) => {
  return (
    <div onClick={onClick} className="accountCardPlace">
      <img className="accountCardImage" src={cardImage} />
      <div className="textPlace">
        <div className="titleUnderPlace">
          <h4 className="titleStyle"> {cardTitle}</h4>
          {deletePlace && (
            <div className="deleteCard">
              <span className="deleteSpan" onClick={deleteClick}>
                sil
              </span>
              <span className="editSpan" onClick={editClick}>
                düzenle
              </span>
            </div>
          )}
        </div>
        <div className="dateandprice">
          <h4 className="dateStyle">{cardDate}</h4>
          <h4 className="priceStyle">{cardPrice}TL</h4>
        </div>
      </div>
    </div>
  );
};
// image,title,price,date
export default AccountCard;
