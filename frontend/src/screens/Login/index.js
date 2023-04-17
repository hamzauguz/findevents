import React, { useState } from "react";
import "./Styles.Login.css";

import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(1);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = new FormData();
    form.append("email", email);
    form.append("password", password);
    axios
      .post("http://localhost/findevents/api/login.php", form)
      .then((res) => {
        console.log("DDD", res);
        if (res.data.statusCode === 200) {
          alert(res.data.message);
          navigate("/home");
        } else if (res.data.statusCode === 401) {
          alert(res.data.message);
        }
      })
      .catch((err) => console.log("err", err));

    // try {
    //   const response = await axios.post("http://localhost/findevents/api/login.php", {
    //     email,
    //     password,
    //   });

    //   console.log(response.data);
    //   // Başarılı giriş durumu burada işlenir, örneğin token localStorage'e kaydedilebilir.
    // } catch (error) {
    //   console.error(error);
    //   // Hatalı giriş durumu burada işlenir, örneğin kullanıcıya hata mesajı gösterilir.
    // }
  };

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
            <h1 className="titleText">Giriş Yap</h1>

            <form onSubmit={handleSubmit} method="post" className="formClass">
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
                  <AiOutlineEye onClick={() => setShow(1)} size={20} color={"white"} className="showeye" />
                ) : (
                  <AiOutlineEyeInvisible onClick={() => setShow(2)} size={20} color={"white"} className="showeye" />
                )}
              </div>
              <div className="login-place-login">
                <button disabled={!email || !password} type={"submit"} className={"buttonClass"}>
                  Giriş Yap
                </button>
                <span className="forgotpassword-login">Şifremi unuttum.</span>
              </div>
              <h5 className="loginor">Yada</h5>
              <button className={"buttonClass"} onClick={() => navigate("/register")}>
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
