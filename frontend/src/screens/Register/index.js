import React, { useEffect, useState } from "react";
import "./Styles.Register.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Register = () => {
  const [showInfo, setShowInfo] = useState(false);
  const [show, setShow] = useState(1);
  const navigate = useNavigate();

  const [message, setMessage] = useState("");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [fullName, setFullName] = useState("");

  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("http://localhost/findevents/api/user.php").then((res) => {
      console.log(res.data);
      setUsers(res.data);
    });
  }, []);
  if (users.find((item) => item.email == "hamzaoguz123@gmail.com")) {
    console.log("email var");
  } else {
    console.log("email yok");
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    //console.log(formvalue);
    const formData = { email: email, phone, password: password, phone, fullName };
    if (email == "")
      return Swal.fire({
        title: "Error",
        text: `Lütfen maili giriniz.`,
        icon: "error",
        confirmButtonText: "OK",
      });

    if (fullName == "")
      return Swal.fire({
        title: "Error",
        text: `Lütfen ad soyad giriniz.`,
        icon: "error",
        confirmButtonText: "OK",
      });

    if (phone == "")
      return Swal.fire({
        title: "Error",
        text: `Lütfen telefon numarası giriniz.`,
        icon: "error",
        confirmButtonText: "OK",
      });

    if (phone.length != 11)
      return Swal.fire({
        title: "Error",
        text: `Lütfen telefon numarasını 11 haneli giriniz.`,
        icon: "error",
        confirmButtonText: "OK",
      });

    if (password == "")
      return Swal.fire({
        title: "Error",
        text: `Lütfen şifre giriniz.`,
        icon: "error",
        confirmButtonText: "OK",
      });

    if (password.length < 6)
      return Swal.fire({
        title: "Error",
        text: `Lütfen 6 haneli şifre giriniz.`,
        icon: "error",
        confirmButtonText: "OK",
      });

    if (users.find((item) => item.email == email)) {
      return Swal.fire({
        title: "Error",
        text: `Bu mail adresi kullanılıyor. Lütfen başka bir mail adresi ile kayıt olunuz.`,
        icon: "error",
        confirmButtonText: "OK",
      });
    }
    if (users.find((item) => item.phone == phone)) {
      return Swal.fire({
        title: "Error",
        text: `Bu telefon numarası kullanılıyor. Lütfen başka bir telefon numarası ile kayıt olunuz.`,
        icon: "error",
        confirmButtonText: "OK",
      });
    }

    await axios
      .post("http://localhost/findevents/api/user.php", formData)
      .then((res) => {
        setMessage(res.data.success);
        console.log(res);
        sessionStorage.setItem("useremail", res.data.user);
        sessionStorage.setItem("phone", res.data.phone);
        sessionStorage.setItem("fullName", res.data.fullName);

        navigate("/home");
        // window.location.reload();
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
                name="fullname"
                type="text"
                placeholder={"Ad ve soyadınızı giriniz..."}
                className={"loginStandartInputNone"}
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
              <input
                name="phone"
                type="text"
                placeholder={"Telefonunuzu giriniz(05..)"}
                className={"loginStandartInputNone"}
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
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
