import React, { useEffect, useState } from "react";
import "./Styles.FavoriEvents.css";
import AccountCard from "../../components/accountcard";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const FavoriEvents = () => {
  const useremail = sessionStorage.getItem("useremail");

  const [eventData, setEventData] = useState([]);
  const [eventFavoriteData, setEventFavoriteData] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    axios.get("http://localhost/findevents/api/event.php").then((res) => {
      setEventData(res.data);
      console.log("res::", res.data);
    });
  }, []);

  useEffect(() => {
    axios.get("http://localhost/findevents/api/favoriteevents.php").then((res) => {
      setEventFavoriteData(res.data);
      console.log(res.data);
    });
  }, []);

  const filteredEvents = eventData.filter((event) => {
    return eventFavoriteData.some((favorite) => {
      return favorite.user_email === useremail && favorite.event_id === event.eventid;
    });
  });

  console.log("filteredEvents: ", filteredEvents);

  return (
    <div className="favoriteEventPlace">
      <span className="favoriteTitle">Favorilere Eklediğiniz Etkinlikler</span>
      {filteredEvents.map((item, key) => {
        return (
          <AccountCard
            onClick={() => navigate(`/events/${item.eventid}`, { state: { item } })}
            key={key}
            cardTitle={item.eventtitle}
            cardImage={
              "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/The_Adicts_2011_SO36_03.jpg/220px-The_Adicts_2011_SO36_03.jpg"
            }
            cardPrice={item.eventprice}
            cardDate={item.eventdate}
            deletePlace
            deleteClick={() => {
              //  handleDelete(item.eventid);
              console.log("tiklandı", item.eventid);
            }}
            editClick={() => navigate("/editevent", { state: { item } })}
          />
        );
      })}
    </div>
  );
};

export default FavoriEvents;
