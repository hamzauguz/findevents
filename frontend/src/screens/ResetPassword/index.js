import React, { useState } from "react";

import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import toast, { Toaster } from "react-hot-toast";

import "./Styles.ResetPassword.css";

const ResetPassword = () => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [reNewPassword, setReNewPassword] = useState("");

  const [show, setShow] = useState(1);

  // console.log("auth:", auth.currentUser);
  const handleResetSubmit = async (e) => {
    e.preventDefault();
    // const result = await resetPassword(oldPassword, newPassword);
    // if (newPassword === reNewPassword) {
    //   if (result) {
    //     setOldPassword("");
    //     setNewPassword("");
    //     setReNewPassword("");
    //     toast.success("Şifreniz değiştirildi");
    //   } else {
    //     toast.error(
    //       `Eski şifreniz hatalı ${
    //         newPassword !== reNewPassword ? "ve yeni şifreler uyuşmuyor" : ""
    //       }.`
    //     );
    //   }
    // } else {
    //   toast.error("Yeni şifre uyuşmuyor.");
    // }
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

        <button type="submit" className="addGameButton main-button-style" disabled={reNewPassword.length < 6}>
          Şifreyi Değiştir
        </button>
      </form>
    </div>
  );
};

export default ResetPassword;
