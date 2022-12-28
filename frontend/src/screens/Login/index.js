import React, { useState } from "react";
import "./Styles.Login.css";

import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(1);
  const navigate = useNavigate();

  return (
    <div className="main">
      <div className="form-center">
        <div className="login-left-place">
          <img
            className="left-login-img"
            src="https://blog.way.com/wp-content/uploads/2022/12/Reggae-Fest-Live-New-Years-Eve-2022.jpg"
          />
        </div>
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
              <div className="showhidePassword">
                <input
                  value={password}
                  type={show == 1 && "password"}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Şifrenizi Giriniz..."
                  className={"loginStandartInputNone"}
                />
                {show == 2 ? (
                  <AiOutlineEye
                    onClick={() => setShow(1)}
                    size={20}
                    color={"white"}
                    className="showeye"
                  />
                ) : (
                  <AiOutlineEyeInvisible
                    onClick={() => setShow(2)}
                    size={20}
                    color={"white"}
                    className="showeye"
                  />
                )}
              </div>
              <div className="login-place-login">
                <button
                  disabled={!email || !password}
                  type={"submit"}
                  className={"buttonClass"}
                >
                  Giriş Yap
                </button>
                <span className="forgotpassword-login">Şifremi unuttum.</span>
              </div>
              <h5 className="loginor">Yada</h5>
              <button
                className={"buttonClass"}
                onClick={() => navigate("/register")}
              >
                Kayıt Ol.
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
