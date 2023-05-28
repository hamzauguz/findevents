import React, { useEffect, useState } from "react";
import "./Styles.EventDetail.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import ReactStars from "react-stars";
import Swal from "sweetalert2";

const EventDetail = () => {
  let { id } = useParams();
  console.log("id: ", id);

  const [eventData, setEventData] = useState([]);
  const [eventFavoriteData, setEventFavoriteData] = useState([]);
  const [comment, setComment] = useState([]);
  const [commentValue, setCommentValue] = useState("");
  const [ratingCount, setRatingCount] = useState(0);
  const useremail = sessionStorage.getItem("useremail");

  useEffect(() => {
    axios.get("http://localhost/findevents/api/event.php").then((res) => {
      setEventData(res.data);
    });
  }, []);
  const filterEvent = eventData?.find((element) => element.eventid === id);
  console.log("filterEvent?: ", filterEvent);
  const ratingChanged = (newRating) => {
    console.log(newRating);
    setRatingCount(newRating);
  };

  useEffect(() => {
    axios.get("http://localhost/findevents/api/favoriteevents.php").then((res) => {
      setEventFavoriteData(res?.data);
      console.log(res.data);
    });
  }, []);

  useEffect(() => {
    axios.get("http://localhost/findevents/api/comments.php").then((res) => {
      console.log("comment:: ", res.data);
      setComment(res.data);
    });
  }, []);

  const commentFilter = comment.filter((element) => element.event_id === id);
  console.log(commentFilter);

  const handleFavorite = () => {
    const form = new FormData();
    form.append("event_id", filterEvent.eventid);
    form.append("user_email", useremail);
    Swal.fire({
      title: "Favorilere Ekle",
      text: "Bu etkinliği favorilere eklemek istiyor musunuz?",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Evet",
      cancelButtonText: "Hayır",
    }).then((result) => {
      if (result.isConfirmed) {
        axios.post("http://localhost/findevents/api/favoriteevents.php", form).then((res) => {
          console.log("DDD", res.data);
        });
        Swal.fire({
          title: "Success",
          text: `Etkinlik başarıyla favorilere eklendi.`,
          icon: "success",
          confirmButtonText: "OK",
        }).then((res) => window.location.reload());
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        // Kullanıcı "Hayır" butonuna tıkladı veya dışarıya tıklandı
        // İşlemleri burada gerçekleştirin
      }
    });
  };

  const handleAddComment = () => {
    const form = new FormData();

    form.append("user_email", useremail);
    form.append("comment_text", commentValue);
    form.append("star_count", ratingCount);
    form.append("event_id", id);
    axios.post("http://localhost/findevents/api/comments.php", form).then((res) => {
      Swal.fire({
        title: "Success",
        text: `Yorum başarıyla yapıldı.`,
        icon: "success",
        confirmButtonText: "OK",
      }).then((res) => window.location.reload());
    });
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
            <ReactStars value={5} count={5} onChange={ratingChanged} size={24} color2={"#ffd700"} />
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
          <button onClick={handleFavorite} className="favandjoinButtonStyle">
            Favorilere Ekle
          </button>
        </div>
        <div className="commentsContainer">
          <span className="commentsTitle">Yorumlar</span>
          <div className="doCommentContainer">
            <span className="docommentTitle">Yorum yap</span>
            <textarea
              value={commentValue}
              onChange={(e) => setCommentValue(e.target.value)}
              className="commenttextPlace"
            />
            <ReactStars value={ratingCount} count={5} onChange={ratingChanged} size={24} color2={"#ffd700"} />
            <button onClick={handleAddComment} className="favandjoinButtonStyle">
              Yorum Yap
            </button>
          </div>
          {commentFilter.map((item, key) => {
            return (
              <div key={key} className="userCommentContainer">
                <img src="https://cdn-icons-png.flaticon.com/512/992/992659.png" width={30} height={30} />
                <div className="userCommentRightContainer">
                  <div className="starswithnamePlace">
                    <span className="fullNameTitle">{item.user_email}</span>
                    <ReactStars
                      edit={false}
                      className="starsCommentsPlace"
                      value={parseInt(item.star_count)}
                      count={5}
                      size={18}
                      color2={"#ffd700"}
                    />
                  </div>
                  <span className="descComment">{item.comment_text}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default EventDetail;
