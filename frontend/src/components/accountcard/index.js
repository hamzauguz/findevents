import React from "react";
import "./Styles.accountcard.css";

const AccountCard = ({
  onClick,
  cardTitle,
  cardPrice,
  cardDate,
  cardImage,
  deletePlace,
  deleteClick,
  editClick,
  editInPlace,
}) => {
  return (
    <div className="accountCardMain">
      <div onClick={onClick} className="accountCardPlace">
        <img className="accountCardImage" src={cardImage} />
        <div className="textPlace">
          <div className="titleUnderPlace">
            <h4 className="titleStyle"> {cardTitle}</h4>
          </div>
          <div className="dateandprice">
            <h4 className="dateStyle">{cardDate}</h4>
            <h4 className="priceStyle">{cardPrice}TL</h4>
          </div>
        </div>
      </div>
      {deletePlace && (
        <div className="deleteCard">
          <button className="deleteSpan" onClick={deleteClick}>
            sil
          </button>
          {editInPlace && (
            <button className="editSpan" onClick={editClick}>
              düzenle
            </button>
          )}
        </div>
      )}
    </div>
  );
};
// image,title,price,date
export default AccountCard;
