import React, { useEffect, useState } from "react";
import "./Styles.Profile.css";
import AccountCard from "../../components/accountcard";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Pagination from "../../components/pagination";
import Swal from "sweetalert2";

const Profile = () => {
  const useremail = sessionStorage.getItem("useremail");
  const phoneKey = sessionStorage.getItem("phone");
  const fullNameKey = sessionStorage.getItem("fullName");

  const [eventData, setEventData] = useState([]);
  const [users, setUsers] = useState([]);
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
  const handleDelete = (eventid) => {
    Swal.fire({
      title: "Sil",
      text: "Bu etkinliği silmek istiyor musunuz?",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Evet",
      cancelButtonText: "Hayır",
    }).then((result) => {
      if (result.isConfirmed) {
        // Kullanıcı "Evet" butonuna tıkladı
        // İşlemleri burada gerçekleştirin
        Swal.fire({
          title: "Success",
          text: `Etkinlik başarıyla silindi.`,
          icon: "success",
          confirmButtonText: "OK",
        }).then((res) => window.location.reload());
        axios
          .delete("http://localhost/findevents/api/event.php?eventid=" + parseInt(eventid))
          .then((res) => console.log("silindi", res.data));

        console.log("hanndle delete:: ", eventid);
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        // Kullanıcı "Hayır" butonuna tıkladı veya dışarıya tıklandı
        // İşlemleri burada gerçekleştirin
      }
    });
  };
  return (
    <div className="profilePlace">
      <div className="sellerAccountPlace">
        <img
          className="imageSellerAccount"
          width={200}
          height={200}
          src={"https://cdn-icons-png.flaticon.com/512/1946/1946429.png"}
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
              <span>{fullNameKey}</span>
            </div>
          </div>
          <div className="usernamePlaceSellerAccount">
            <div>
              <h3>E-mail Adresi</h3>
              <span>{useremail}</span>
            </div>
            <div className="rightAccount">
              <h3>Telefon Numarası</h3>
              <span>{phoneKey}</span>
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
                editInPlace
                deleteClick={() => {
                  handleDelete(item.eventid);
                  console.log("tiklandı", item.eventid);
                }}
                editClick={() => navigate("/editevent", { state: { item } })}
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
