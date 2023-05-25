import React, { useEffect, useState } from "react";
import "./Styles.EventDetail.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import ReactStars from "react-stars";

const EventDetail = () => {
  let { id } = useParams();
  console.log("id: ", id);

  const [eventData, setEventData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost/findevents/api/event.php").then((res) => {
      setEventData(res.data);
    });
  }, []);
  const filterEvent = eventData.find((element) => element.eventid === id);
  console.log("filterEvent?: ", filterEvent);
  const ratingChanged = (newRating) => {
    console.log(newRating);
  };
  return (
    <div className="descScreen">
      <div>
        <img
          className="descImage"
          src={
            "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/The_Adicts_2011_SO36_03.jpg/220px-The_Adicts_2011_SO36_03.jpg"
          }
        />
      </div>
      <div className="eventDetailRight">
        <span className="eventtitleDesc">{filterEvent?.eventtitle}</span>

        <div className="rowContainerDetail">
          <div className="eventDescPlace">
            <span className="eventtitle">Etkinlik Tarihi</span>
            <span className="eventTitleRight">{filterEvent?.eventdate}</span>
          </div>
          <div className="eventDescPlace">
            <span className="eventtitle">Etkinlik Fiyatı</span>
            <span className="eventTitleRight">
              {filterEvent?.eventprice == 0 ? "Ücretsiz" : "₺ " + filterEvent?.eventprice}
            </span>
          </div>
        </div>

        <div className="rowContainerDetail">
          <div className="eventDescPlace">
            <span className="eventtitle">Etkinlik İli</span>
            <span className="eventTitleRight">{filterEvent?.eventprovince}</span>
          </div>
          <div className="eventDescPlace">
            <span className="eventtitle">Etkinlik İlçesi</span>
            <span className="eventTitleRight">{filterEvent?.eventdistrict}</span>
          </div>
        </div>
        <div className="eventDescPlace">
          <span className="eventtitle">Etkinlik Adresi</span>
          <span className="eventdescRight">{filterEvent?.eventaddress}</span>
        </div>
        <div className="rowContainerDetail">
          <div className="eventDescPlace">
            <span className="eventtitle">Katılacak Max Kişi Sayısı</span>
            <span className="eventTitleRight">{filterEvent?.eventpeoplecount}</span>
          </div>
          <div className="eventDescPlace">
            <span className="eventtitle">Etkinlik Puanı</span>
            <ReactStars value={3} count={5} onChange={ratingChanged} size={24} color2={"#ffd700"} />
          </div>
        </div>
        <div className="eventDescPlace">
          <span className="eventtitle">Etkinlik Açıklaması</span>
          <span className="eventdescRight">
            {filterEvent?.eventdesc}adsadsd asdsa d asd
            kmasdkmasdmsakdksadaskmasdmsakdksadaskmasdmsakdksadaskmasdmsakdksadaskmasdmsakdksadasmsakdksadas
          </span>
        </div>
        <div className="favandjoinPlace">
          <button className="favandjoinButtonStyle">Favorilere Ekle</button>
          <button className="favandjoinButtonStyle">Etkinliğe Katıl</button>
        </div>
        <div className="commentsContainer">
          <span className="commentsTitle">Yorumlar</span>
          <div className="doCommentContainer">
            <span className="docommentTitle">Yorum yap</span>
            <textarea className="commenttextPlace" />
            <ReactStars value={3} count={5} onChange={ratingChanged} size={24} color2={"#ffd700"} />
            <button className="favandjoinButtonStyle">Yorum Yap</button>
          </div>
          <div className="userCommentContainer">
            <img src="https://cdn-icons-png.flaticon.com/512/992/992659.png" width={30} height={30} />
            <div className="userCommentRightContainer">
              <div className="starswithnamePlace">
                <span className="fullNameTitle">Full Name</span>
                <ReactStars
                  edit={false}
                  className="starsCommentsPlace"
                  value={3}
                  count={5}
                  size={18}
                  color2={"#ffd700"}
                />
              </div>
              <span className="descComment">
                sfdfsdfdsfdsfdsfsfdfsdfdsfdsfdsfsfdfsdfdsfdsfdsfsfdfsdfdsfdsfdsfsfdfsdfdsfdsfdsfsfdfsdfdsfdsfdsfsfdfsdfdsfdsfdsfsfdfsdfdsfdsfdsfssfdfsdfdsfdsfdsfsfdfsdfdsfdsfdsfsfdfsdfdsfdsfdsfsfdfsdfdsfdsfdsfsfdfsdfdsfdsfdsfsfdfsdfdsfdsfdsfsfdfsdfdsfdsfdsfsfdfsdfdsfdsfdsfsfdfsdfdsfdsfdsfsfdfsdfdsfdsfdsfsfdfsdfdsfdsfdsfsfdfsdfdsfdsfdsfsfdfsdfdsfdsfdsfsfdfsdfdsfdsfdsfsfdfsdfdsfdsfdsfsfdfsdfdsfdsfdsfsfdfsdfdsfdsfdsfsfdfsdfdsfdsfdsfsfdfsdfdsfdsfdsfsfdfsdfdsfdsfdsffdfsdfdsfdsfdsfsfdfsdfdsfdsfdsf
              </span>
            </div>
          </div>
          <div className="userCommentContainer">
            <img src="https://cdn-icons-png.flaticon.com/512/992/992659.png" width={30} height={30} />
            <div className="userCommentRightContainer">
              <div className="starswithnamePlace">
                <span className="fullNameTitle">Full Name</span>
                <ReactStars
                  edit={false}
                  className="starsCommentsPlace"
                  value={3}
                  count={5}
                  size={18}
                  color2={"#ffd700"}
                />
              </div>
              <span className="descComment">
                sfdfsdfdsfdsfdsfsfdfsdfdsfdsfdsfsfdfsdfdsfdsfdsfsfdfsdfdsfdsfdsfsfdfsdfdsfdsfdsfsfdfsdfdsfdsfdsfsfdfsdfdsfdsfdsfsfdfsdfdsfdsfdsfsfdfsdfdsfdsfdsfsfdfsdfdsfdsfdsf
              </span>
            </div>
          </div>
          <div className="userCommentContainer">
            <img src="https://cdn-icons-png.flaticon.com/512/992/992659.png" width={30} height={30} />
            <div className="userCommentRightContainer">
              <div className="starswithnamePlace">
                <span className="fullNameTitle">Full Name</span>
                <ReactStars
                  edit={false}
                  className="starsCommentsPlace"
                  value={3}
                  count={5}
                  size={18}
                  color2={"#ffd700"}
                />
              </div>
              <span className="descComment">
                sfdfsdfdsfdsfdsfsfdfsdfdsfdsfdsfsfdfsdfdsfdsfdsfsfdfsdfdsfdsfdsfsfdfsdfdsfdsfdsfsfdfsdfdsfdsfdsfsfdfsdfdsfdsfdsfsfdfsdfdsfdsfdsfsfdfsdfdsfdsfdsfsfdfsdfdsfdsfdsf
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetail;
