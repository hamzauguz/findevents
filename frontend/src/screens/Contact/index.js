import React, { useState } from "react";
import "./Styles.Contact.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, InputGroup, Row, Button } from "react-bootstrap";

const Contact = () => {
  const [form, setForm] = useState({
    first_name: "",
    last_name: "",
    mobile: "",
    email: "",
    address1: "",
    address2: "",
    city: "",
    a_state: "",
    pin: "",
    menu: "",
    order: "",
  });
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const resetButton = () => {
    setForm({
      first_name: "",
      last_name: "",
      mobile: "",
      email: "",
      address1: "",
      address2: "",
      city: "",
      a_state: "",
      pin: "",
      menu: "",
      order: "",
    });
  };
  const submitButton = (e) => {
    e.preventDefault();
    console.log(form);
    resetButton();
  };
  return (
    <div>
      <div className="contactPlace">
        <h1 className="contactText">İLETİŞİM</h1>
      </div>
      <form className="container mt-3 mb-3">
        <Row className="mb-3">
          <Form.Group controlId="formBasicEmail" className="col col-sm-6">
            <Form.Label>İsim</Form.Label>
            <Form.Control
              type="name"
              name="first_name"
              value={form.first_name}
              onChange={handleChange}
              className="form-control"
            />
          </Form.Group>
          <Form.Group controlId="formBasicEmail" className="col col-sm-6">
            <Form.Label>Soyisim</Form.Label>
            <Form.Control
              type="name"
              name="last_name"
              value={form.last_name}
              onChange={handleChange}
              className="form-control"
            />
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group controlId="formBasicMobile" className="col col-sm-6">
            <Form.Label>Telefon Numarası</Form.Label>
            <InputGroup>
              <InputGroup.Text id="basic-addon1">+90</InputGroup.Text>
              <Form.Control
                aria-label="Mobile Number"
                type="mobile"
                aria-describedby="basic-addon1"
                className="form-control"
                name="mobile"
                value={form.mobile}
                onChange={handleChange}
              />
            </InputGroup>
          </Form.Group>
          <Form.Group controlId="formBasicEmail" className="col col-sm-6">
            <Form.Label>Email</Form.Label>
            <InputGroup>
              <Form.Control
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
              />
              <InputGroup.Text id="basic-addon2">@gmail.com</InputGroup.Text>
            </InputGroup>
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group className=" col col-sm-6" controlId="formGridAddress1">
            <Form.Label>Adres</Form.Label>
            <Form.Control
              className="form-control"
              type="text"
              name="address1"
              value={form.address1}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="col col-sm-6" controlId="formGridAddress2">
            <Form.Label>Adres 2</Form.Label>
            <Form.Control
              className="form-control"
              name="address2"
              value={form.address2}
              onChange={handleChange}
              type="text"
            />
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group controlId="formGridCity" className="col col-sm-4">
            <Form.Label>Şehir</Form.Label>
            <Form.Control
              className="form-control"
              type="text"
              name="city"
              value={form.city}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="formGridState" className="col col-sm-4">
            <Form.Label>İlçe</Form.Label>
            <Form.Select
              defaultValue="Seciniz..."
              className="form-control"
              name="a_state"
              value={form.a_state}
              onChange={handleChange}
            >
              <option value="Seciniz...">Seçiniz...</option>
              <option value="istanbul">İstanbul</option>
              <option value="izmir">İzmir</option>
              <option value="ankara">Ankara</option>
              <option value="balikesir">Balikesir</option>
            </Form.Select>
          </Form.Group>
          <Form.Group controlId="formGridpin" className="col col-sm-4">
            <Form.Label>Bölge Numarası</Form.Label>
            <Form.Control
              className="form-control"
              type="pin"
              name="pin"
              value={form.pin}
              onChange={handleChange}
            />
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group controlId="formGridCheckbox" className="col col-sm-6">
            <Form.Label>Menu</Form.Label>
            <Form.Select
              defaultValue="Choose..."
              className="form-control"
              name="menu"
              value={form.menu}
              onChange={handleChange}
            >
              <option value="Seçiniz...">Seçiniz...</option>
              <option value="etkinlikolusturmak">
                Etkinlik oluşturmak istiyorum
              </option>
              <option value="etkiligekatilmak">
                Etkinliğe katılmak istiyorum
              </option>
              <option value="rezerve">Toplu rezerve yaptırmak istiyorum</option>
              <option value="canlidestek">
                Canlı desteğin beni aramasını istiyorum
              </option>
            </Form.Select>
          </Form.Group>
          <Form.Group controlId="formGridlabel" className="col col-sm-6">
            <Form.Label>Açıklama</Form.Label>
            <Form.Control
              as="textarea"
              rows="{3}"
              className="form-control"
              name="order"
              value={form.order}
              onChange={handleChange}
            />
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group controlId="formGridCheckbox" className="col col-sm-6">
            <button
              type="submit"
              onClick={submitButton}
              className="me-4 btn btn-success btn-lg btn-block"
            >
              Gönder
            </button>
            <button
              type="reset"
              onClick={resetButton}
              className="me-4 btn btn-danger btn-lg btn-block"
            >
              Sıfırla
            </button>
          </Form.Group>
        </Row>
      </form>
    </div>
  );
};

export default Contact;
