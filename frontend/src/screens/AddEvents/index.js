import React, { useState } from "react";
import "./Styles.AddEvents.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddEvents = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [games, setGames] = useState("");
  const [price, setPrice] = useState(0);
  const [date, setDate] = useState("");
  const navigate = useNavigate();

  const [inputs, setInputs] = useState([]);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post("http://localhost/findevents/event/save", inputs)
      .then(function (response) {
        console.log(response.data);
        alert("Kaydınız başarıyla oluşturulmuştur.");
        //   navigate("/home");
      });
  };

  return (
    <div className="addevent-container">
      <form onSubmit={handleSubmit} className="sellerForm">
        <div className="formInside">
          <h5>Başlık</h5>
          <input
            maxLength={40}
            className="inputTitle"
            onChange={handleChange}
            name="title"
          />
        </div>
        <div className="formInside">
          <h5 className="descBottom">Açıklama</h5>
          <textarea
            maxLength={1050}
            width={100}
            className="textAreaInput"
            name="desc"
            onChange={handleChange}
          />
        </div>

        <div className="formInside">
          <h5>Fiyat (max ₺5000)</h5>
          <input
            className="inputTitle"
            type={"number"}
            onChange={handleChange}
            name="price"
          />
        </div>
        <div className="formInside">
          <h5>Etkinlik Tarihi</h5>
          <input
            className="inputTitle"
            type="text"
            onChange={handleChange}
            name="date"
          />
        </div>
        <div className="formInside">
          <button type="submit" className="addGameButton">
            Etkinlik Oluştur
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddEvents;
