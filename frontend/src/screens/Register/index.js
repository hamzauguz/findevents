import React, { useState } from "react";
import "./Styles.Register.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [showInfo, setShowInfo] = useState(false);
  const [show, setShow] = useState(1);
  const navigate = useNavigate();

  const [message, setMessage] = useState("");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    //console.log(formvalue);
    const formData = { email: email, password: password };
    await axios
      .post("http://localhost/findevents/api/user.php", formData)
      .then((res) => {
        setMessage(res.data.success);
        navigate("/home");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="main">
      <div className="form-center">
        <div className="login-right-place">
          <div className="formwithgoogle">
            <h1 className="titleText">Kayıt Ol</h1>

            <form onSubmit={handleSubmit} method="post" className="formClass">
              <input
                name="email"
                type="text"
                placeholder={"Emailinizi giriniz..."}
                className={"loginStandartInputNone"}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                name="password"
                type="password"
                placeholder="Şifrenizi Giriniz..."
                className={"loginStandartInputNone"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {/* <input type="password" placeholder="Tekrar Şifrenizi Giriniz..." className={"loginStandartInputNone"} />
              {showInfo == true && <h5 className="failedpassword-register">Şifreler Uyuşmuyor...</h5>} */}
              <div className="twobuttons-register">
                <button
                  // disabled={againPassword !== password || !email ? true : false}
                  type="submit"
                  name="submit"
                  className={"buttonClass"}
                >
                  Kayıt Ol.
                </button>

                <button className={"buttonClass"} onClick={() => navigate("/login")}>
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
