import React, { useEffect, useState } from "react";

import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import toast, { Toaster } from "react-hot-toast";

import "./Styles.ResetPassword.css";
import axios from "axios";
import Swal from "sweetalert2";

const ResetPassword = () => {
  const passwordStorage = sessionStorage.getItem("password");
  const useremailStorage = sessionStorage.getItem("useremail");

  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [reNewPassword, setReNewPassword] = useState("");
  const [users, setUsers] = useState([]);

  const [show, setShow] = useState(1);

  useEffect(() => {
    axios.get("http://localhost/findevents/api/user.php").then((res) => {
      setUsers(res.data);
      console.log("res:::", res.data);
    });
  }, []);

  const userFind = users.find((element) => element.email === useremailStorage);
  console.log("userFind: ", userFind);

  // console.log("auth:", auth.currentUser);
  const handleResetSubmit = async (e) => {
    e.preventDefault();
    if (oldPassword !== passwordStorage)
      return Swal.fire({
        title: "Eski Şifre Hatalı",
        text: `Eski şifreniz yanlış. Lütfen yeniden deneyiniz.`,
        icon: "error",
        confirmButtonText: "OK",
      });

    if (newPassword !== reNewPassword)
      return Swal.fire({
        title: "Yeni Şifre Hatalı",
        text: `Yeni şifreniz aynı değil. Lütfen yeniden deneyiniz.`,
        icon: "error",
        confirmButtonText: "OK",
      });
    if (newPassword.length < 6)
      return Swal.fire({
        title: "Min değer 6",
        text: `Lütfen en az 6 karakterli bir şifre giriniz.`,
        icon: "error",
        confirmButtonText: "OK",
      });
    const UpdateForm = {
      userpassword: newPassword,
      useremail: useremailStorage,
    };
    axios.put("http://localhost/findevents/api/user.php", UpdateForm).then((res) => {
      console.log(res.data);
      Swal.fire({
        title: "Success",
        text: `Şifreniz başarıyla değiştirilmiştir.`,
        icon: "success",
        confirmButtonText: "OK",
      }).then((res) => {
        sessionStorage.setItem("password", newPassword);
        window.location.reload();
      });
    });
  };

  return (
    <div className="sellerMain">
      <form onSubmit={handleResetSubmit} className="">
        <div className="formInside">
          <h5>Eski Parola</h5>
          <input
            maxLength={40}
            className="inputTitle"
            value={oldPassword}
            type="password"
            placeholder="******"
            onChange={(e) => setOldPassword(e.target.value)}
          />
          <span
            // onClick={() => handleForgotPassword()}
            className="forgotpassword-rstpass"
          >
            Şifremi unuttum.
          </span>
        </div>

        <div className="formInside">
          <h5>Yeni Parola (min 6 karakter)</h5>
          <input
            maxLength={25}
            className="inputTitle"
            type={show === 1 ? "password" : "text"}
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />

          {show == 2 ? (
            <AiOutlineEye onClick={() => setShow(1)} size={26} className="showeyechangepassword" />
          ) : (
            <AiOutlineEyeInvisible onClick={() => setShow(2)} size={26} className="showeyechangepassword" />
          )}
        </div>

        <div className="formInside">
          <h5>Yeni Parola Tekrar</h5>
          <input
            maxLength={25}
            className="inputTitle"
            type={show === 1 ? "password" : "text"}
            value={reNewPassword}
            onChange={(e) => setReNewPassword(e.target.value)}
          />
        </div>
        <Toaster containerStyle={{ fontSize: 20 }} position="top-center" />

        <button type="submit" className="addGameButton main-button-style">
          Şifreyi Değiştir
        </button>
      </form>
    </div>
  );
};

export default ResetPassword;
