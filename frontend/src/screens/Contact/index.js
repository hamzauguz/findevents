import React from "react";
import "./Styles.Contact.css";
import axios from "axios";

const Contact = () => {
  const [formStatus, setFormStatus] = React.useState("Send");
  const onSubmit = (e) => {
    e.preventDefault();
    setFormStatus("Submitting...");
    const { name, useremail, usermessage } = e.target.elements;
    let conFom = {
      name: name.value,
      useremail: useremail.value,
      usermessage: usermessage.value,
    };
    console.log(conFom);

    const form = new FormData();
    form.append("name", conFom.name);
    form.append("useremail", conFom.useremail);
    form.append("usermessage", conFom.usermessage);
    console.log(form);
    axios.post("http://localhost/findevents/api/contact.php", form).then((res) => {
      console.log(res.data);
      window.location.reload();
    });
  };
  return (
    <div className="container mt-5 containerContactMain">
      <img
        className="contact-form-image"
        src="https://www.ucelrulo.com.tr/wp-content/uploads/2017/09/contact-us-banner.jpg"
      />
      <h2 className="mb-3">İletişim Formu</h2>
      <form onSubmit={onSubmit}>
        <div className="mb-3">
          <label className="form-label" htmlFor="name">
            Name
          </label>
          <input className="form-control" name="name" type="text" required />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="useremail">
            Email
          </label>
          <input className="form-control" type="email" name="useremail" id="useremail" required />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="usermessage">
            Message
          </label>
          <textarea className="form-control" id="usermessage" name="usermessage" required />
        </div>
        <button className="btn btn-danger" type="submit">
          {formStatus}
        </button>
      </form>
    </div>
  );
};
export default Contact;
