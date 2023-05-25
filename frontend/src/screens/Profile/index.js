import React, { useEffect, useState } from "react";
import "./Styles.Profile.css";
import AccountCard from "../../components/accountcard";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Pagination from "../../components/pagination";

const Profile = () => {
  const useremail = sessionStorage.getItem("useremail");
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
  console.log(eventData);
  const EventDataFilter = eventData.filter((email) => email.owneremail === useremail);
  console.log(EventDataFilter);

  return (
    <div className="profilePlace">
      <div className="sellerAccountPlace">
        <img
          className="imageSellerAccount"
          width={200}
          height={200}
          src={
            "https://www.arabateknikbilgi.com/wp-content/uploads/2021/04/ArabaTeknikBilgi-1993-2002-Toyota-Supra-3.0i-1-1.jpg"
          }
        />
        <div className="userInfoSeller">
          <div className="userinfoSellerAccount">
            <h4>Kullanıcı Bilgileri</h4>
            <hr className="lineAccountPlace" />
          </div>
          <div className="usernamePlaceSellerAccount">
            <div>
              <h3>Ülke</h3>
              <span>Türkiye</span>
            </div>
            <div className="rightAccount">
              <h3>İsim Soyisim</h3>
              <span>Hamza Uğuz</span>
            </div>
          </div>
          <div className="usernamePlaceSellerAccount">
            <div>
              <h3>E-mail Adresi</h3>
              <span>{useremail}</span>
            </div>
            <div className="rightAccount">
              <h3>Telefon Numarası</h3>
              <span>05459551668</span>
            </div>
          </div>
        </div>
      </div>
      <div>
        <button onClick={() => navigate("/addevents")} className="addEvent-button">
          Etkinlik Ekle
        </button>
        <div className="events-container">
          {EventDataFilter.map((item, key) => {
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
              />
            );
          }).slice(firstPostIndex, lastPostIndex)}
        </div>
      </div>
      <Pagination
        totalPosts={EventDataFilter.length}
        postsPerPage={postsPerPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </div>
  );
};

export default Profile;
