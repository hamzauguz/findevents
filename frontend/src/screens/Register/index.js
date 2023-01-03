import React, { useState } from "react";
import "./Styles.Register.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [againPassword, setAgainPassword] = useState("");
  const [showInfo, setShowInfo] = useState(false);
  const [show, setShow] = useState(1);
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
      .post("http://localhost/findevents/user/save", inputs)
      .then(function (response) {
        console.log(response.data);
        alert("Kaydınız başarıyla oluşturulmuştur.");
        navigate("/home");
      });
  };

  return (
    <div className="main">
      <div className="form-center">
        <div className="login-right-place">
          <div className="formwithgoogle">
            <button className="googlePlace">
              <img
                src={
                  "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2048px-Google_%22G%22_Logo.svg.png"
                }
                height={40}
                width={40}
              />
              <h2 className="signingooletextlogin">Sign in with Google</h2>
            </button>
            <form onSubmit={handleSubmit} className="formClass">
              <input
                name="email"
                type="text"
                placeholder={"Emailinizi giriniz..."}
                className={"loginStandartInputNone"}
                onChange={handleChange}
              />
              <input
                name="password"
                type="password"
                placeholder="Şifrenizi Giriniz..."
                className={"loginStandartInputNone"}
                onChange={handleChange}
              />
              <input
                type="password"
                placeholder="Tekrar Şifrenizi Giriniz..."
                className={"loginStandartInputNone"}
              />
              {showInfo == true && (
                <h5 className="failedpassword-register">
                  Şifreler Uyuşmuyor...
                </h5>
              )}
              <div className="twobuttons-register">
                <button
                  // disabled={againPassword !== password || !email ? true : false}
                  type="submit"
                  className={"buttonClass"}
                >
                  Kayıt Ol.
                </button>

                <button
                  className={"buttonClass"}
                  onClick={() => navigate("/login")}
                >
                  Zaten Hesabım var.
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="login-left-place">
          <img
            className="left-login-img"
            src="https://blog.way.com/wp-content/uploads/2022/12/Reggae-Fest-Live-New-Years-Eve-2022.jpg"
          />
        </div>
      </div>
    </div>
  );
};

export default Register;
