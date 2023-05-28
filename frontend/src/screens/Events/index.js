import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AccountCard from "../../components/accountcard";
import "./Styles.Events.css";
import axios from "axios";
import Pagination from "../../components/pagination";
import ReactSlider from "react-slider";
import MultiRangeSlider from "../../components/multiRangeSlider/MultiRangeSlider";

const Events = () => {
  const [eventData, setEventData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(5);

  const [filterInput, setFilterInput] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(1000);
  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const navigate = useNavigate();
  useEffect(() => {
    axios.get("http://localhost/findevents/api/event.php").then((res) => {
      console.log(res.data);
      setEventData(res.data);
      setFilteredData(res.data);
    });
  }, []);

  const filterData = () => {
    const filtered = eventData.filter((item) => {
      const titleMatch = item.eventtitle.toLowerCase().includes(filterInput.toLowerCase());
      const priceMatch = item.eventprice >= minPrice && item.eventprice <= maxPrice;
      return titleMatch && priceMatch;
    });
    setFilteredData(filtered);
  };

  return (
    <div>
      <button onClick={() => navigate("/addevents")} className="addEvent-button">
        Etkinlik Ekle
      </button>
      <div className="events-container">
        <div className="filtereventsplace">
          <span className="filterMainTitle">Filtrele</span>
          <div className="filterTitle">
            <span>Başlığa göre arama</span>
            <input value={filterInput} onChange={(e) => setFilterInput(e.target.value)} className="filterInput" />
          </div>
          <div className="filterTitle">
            <span>Fiyata göre arama</span>
            <MultiRangeSlider
              min={0}
              max={1000}
              onChange={({ min, max }) => {
                console.log(`min = ${min}, max = ${max}`);
                setMinPrice(min);
                setMaxPrice(max);
              }}
            />
          </div>
          <button onClick={filterData} className="searchButton">
            Ara
          </button>
        </div>
        <div>
          {filteredData
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
