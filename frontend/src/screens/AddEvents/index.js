import React, { useState } from "react";
import "./Styles.AddEvents.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { Steps } from "rsuite";

import "rsuite/dist/rsuite.min.css";

const AddEvents = () => {
  const [eventtitle, setEventTitle] = useState("");
  const [eventdesc, setEventDesc] = useState("");

  const [eventprovince, setEventProvince] = useState("");
  const [eventdistrict, setEventDistrict] = useState("");
  const [eventaddress, setEventAddress] = useState("");
  const [eventprice, setEventPrice] = useState(0);

  const [eventdate, setEventDate] = useState("");
  const [eventpeoplecount, setEventPeopleCount] = useState(0);

  const [owneremail, setOwnerEmail] = useState(sessionStorage.getItem("useremail"));

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("event title: ", eventtitle);
    console.log("event desc: ", eventdesc);
    console.log("event province: ", eventprovince);
    console.log("event district: ", eventdistrict);
    console.log("event address: ", eventaddress);
    console.log("event price: ", eventprice);
    console.log("event date: ", eventdate);
    console.log("event peoplecount: ", eventpeoplecount);
    console.log("owner email: ", owneremail);

    const form = new FormData();
    form.append("eventtitle", eventtitle);
    form.append("eventdesc", eventdesc);
    form.append("eventprovince", eventprovince);
    form.append("eventdistrict", eventdistrict);
    form.append("eventaddress", eventaddress);
    form.append("eventprice", eventprice);
    form.append("eventdate", eventdate);
    form.append("eventpeoplecount", eventpeoplecount);
    form.append("owneremail", owneremail);

    axios
      .post("http://localhost/findevents/api/event.php", form)
      .then((res) => {
        console.log("DDD", res.data);
        if (res.data.success == "Event Added Successfully") {
          Swal.fire({
            title: "Success",
            text: `Etkinlik başarıyla oluşturulmuştur.`,
            icon: "success",
            confirmButtonText: "OK",
          });
          navigate("/home");
        } else {
          Swal.fire({
            title: "Error",
            text: `Etkinlik oluşturulamadı.`,
            icon: "error",
            confirmButtonText: "OK",
          });
        }
      })
      .catch((err) => console.log("err", err));
  };
  const [stepNumber, setStepNumber] = useState(0);
  return (
    <div className="addevent-container">
      <form onSubmit={handleSubmit} className="sellerForm">
        <Steps current={stepNumber}>
          <Steps.Item title="Ön bilgi" />
          <Steps.Item title="Tarih ve Kişi" />
          <Steps.Item title="Adres" />
          <Steps.Item title="Fiyat" />
        </Steps>
        {stepNumber === 0 && (
          <div>
            <div className="formInside">
              <input
                placeholder="title"
                maxLength={40}
                className="inputTitle"
                onChange={(e) => setEventTitle(e.target.value)}
                name="eventtitle"
                value={eventtitle}
              />
            </div>
            <div className="formInside">
              <input
                maxLength={1050}
                width={100}
                placeholder="description"
                className="textAreaInput"
                name="eventdesc"
                onChange={(e) => setEventDesc(e.target.value)}
                value={eventdesc}
              />
            </div>
            <button
              type="button"
              onClick={() => {
                eventtitle !== "" && eventdesc !== ""
                  ? setStepNumber(1)
                  : Swal.fire({
                      title: "Uyarı",
                      text: `Lütfen gerekli alanları doldurunuz!`,
                      icon: "warning",
                      confirmButtonText: "OK",
                    });
              }}
              className="step0"
            >
              2. adıma geç
            </button>
          </div>
        )}
        {stepNumber === 1 && (
          <>
            <div className="formInside">
              <input
                placeholder="date"
                maxLength={40}
                className="inputTitle"
                onChange={(e) => setEventDate(e.target.value)}
                name="eventdate"
                value={eventdate}
              />
            </div>
            <div className="formInside">
              <input
                placeholder="people count"
                maxLength={40}
                className="inputTitle"
                onChange={(e) => setEventPeopleCount(e.target.value)}
                name="eventpeoplecount"
                value={eventpeoplecount}
              />
            </div>
            <div className="betweenDiv">
              <button type="button" onClick={() => setStepNumber(0)} className="backButton">
                Geri
              </button>
              <button
                type="button"
                onClick={() => {
                  eventdate !== "" && eventpeoplecount !== 0
                    ? setStepNumber(2)
                    : Swal.fire({
                        title: "Uyarı",
                        text: `Lütfen gerekli alanları doldurunuz!`,
                        icon: "warning",
                        confirmButtonText: "OK",
                      });
                }}
                className="stepbetween"
              >
                3. adıma geç
              </button>
            </div>
          </>
        )}
        {stepNumber === 2 && (
          <>
            <div className="formInside">
              <input
                placeholder="event province"
                maxLength={40}
                className="inputTitle"
                onChange={(e) => setEventProvince(e.target.value)}
                name="eventprovince"
                value={eventprovince}
              />
            </div>
            <div className="formInside">
              <input
                placeholder="event district"
                maxLength={40}
                className="inputTitle"
                onChange={(e) => setEventDistrict(e.target.value)}
                name="eventdistrict"
                value={eventdistrict}
              />
            </div>
            <div className="formInside">
              <input
                placeholder="event address"
                maxLength={100}
                className="inputTitle"
                onChange={(e) => setEventAddress(e.target.value)}
                name="eventaddress"
                value={eventaddress}
              />
            </div>
            <div className="betweenDiv">
              <button type="button" onClick={() => setStepNumber(1)} className="backButton">
                Geri
              </button>
              <button
                type="button"
                onClick={() => {
                  eventprovince !== "" && eventdistrict !== "" && eventaddress !== ""
                    ? setStepNumber(3)
                    : Swal.fire({
                        title: "Uyarı",
                        text: `Lütfen gerekli alanları doldurunuz!`,
                        icon: "warning",
                        confirmButtonText: "OK",
                      });
                }}
                className="stepbetween"
              >
                Son adıma geç
              </button>
            </div>
          </>
        )}
        {stepNumber === 3 && (
          <>
            <div className="formInside">
              <input
                placeholder="event price"
                maxLength={40}
                className="inputTitle"
                onChange={(e) => setEventPrice(e.target.value)}
                name="eventprice"
                value={eventprice}
              />
            </div>
            <div className="betweenDiv">
              <button type="button" onClick={() => setStepNumber(2)} className="backButton">
                Geri
              </button>
              <button type="submit" className="stepbetween">
                Etkinliği ekle
              </button>
            </div>
          </>
        )}
      </form>
    </div>
  );
};

export default AddEvents;
