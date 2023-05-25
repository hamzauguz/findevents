import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AccountCard from "../../components/accountcard";
import "./Styles.Events.css";
import axios from "axios";
import Pagination from "../../components/pagination";

const Events = () => {
  const [eventData, setEventData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(5);
  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const navigate = useNavigate();
  useEffect(() => {
    axios.get("http://localhost/findevents/api/event.php").then((res) => {
      console.log(res.data);
      setEventData(res.data);
    });
  }, []);
  return (
    <div>
      <button onClick={() => navigate("/addevents")} className="addEvent-button">
        Etkinlik Ekle
      </button>
      <div className="events-container">
        {eventData
          .map((item, key) => {
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
              />
            );
          })
          .slice(firstPostIndex, lastPostIndex)}
      </div>
      <Pagination
        totalPosts={eventData.length}
        postsPerPage={postsPerPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </div>
  );
};

export default Events;
