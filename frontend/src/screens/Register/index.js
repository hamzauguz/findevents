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
            <form className="formClass">
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type={"text"}
                placeholder={"Emailinizi giriniz..."}
                className={"loginStandartInputNone"}
              />
              <input
                value={password}
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Şifrenizi Giriniz..."
                className={"loginStandartInputNone"}
              />
              <input
                value={againPassword}
                type="password"
                onChange={(e) => setAgainPassword(e.target.value)}
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
                  disabled={againPassword !== password || !email ? true : false}
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
