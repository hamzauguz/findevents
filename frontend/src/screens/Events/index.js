import React from "react";
import { useNavigate } from "react-router-dom";
import AccountCard from "../../components/accountcard";
import "./Styles.Events.css";

const Events = () => {
  const navigate = useNavigate();

  return (
    <div>
      <button
        onClick={() => navigate("/addevents")}
        className="addEvent-button"
      >
        Etkinlik Ekle
      </button>
      <div className="events-container">
        <AccountCard
          cardTitle={"İstanbulda harika bir etkinlik"}
          cardImage={
            "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/The_Adicts_2011_SO36_03.jpg/220px-The_Adicts_2011_SO36_03.jpg"
          }
          cardPrice={300}
          cardDate={"20 Ocak"}
        />
      </div>
    </div>
  );
};

export default Events;
