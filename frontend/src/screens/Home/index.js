import axios from "axios";
import React, { useState } from "react";
import "./Styles.Home.css";
import Carousel from "react-bootstrap/Carousel";
import { Container, Card, Col, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Home = () => {
  const [name, setName] = useState("");
  const [data, setData] = useState();
  const [sonuc, setSonuc] = useState("");
  const [count, setCount] = useState(4);

  const baglan = () => {
    axios
      .get("http://localhost:80/backend/addUser.php")
      .then((response) => {
        if (response.data == "basarili") {
          setSonuc("Bağlantı gerçekleşti");
        }
      })
      .catch((error) => {
        console.log("hata oluştu");
      });
  };

  return (
    <div>
      <div>
        <Carousel>
          <Carousel.Item interval={1000}>
            <img
              className="d-block w-100"
              src="https://www.bdc.ca/globalassets/digizuite/26400-sales-marketing-1200x630-en.png"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <img
              className="d-block w-100"
              src="https://www.bdc.ca/globalassets/digizuite/26400-sales-marketing-1200x630-en.png"
              alt="Second slide"
            />
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://www.bdc.ca/globalassets/digizuite/26400-sales-marketing-1200x630-en.png"
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={baglan}>İstek At</button>
      <h1>{sonuc}</h1>

      {data && <div className="result">API'den dönen istek = {data}</div>}
      <div>
        <Container className="p-4 d-flex flex-row">
          <Col className="m-2" md="3 ">
            <Card>
              <Card.Img
                variant="top"
                src={
                  "https://res.cloudinary.com/dwzmsvp7f/image/fetch/q_75,f_auto,w_1316/https%3A%2F%2Fmedia.insider.in%2Fimage%2Fupload%2Fc_crop%2Cg_custom%2Fv1519627962%2Fvltlogy23k1iid9pjffx.jpg"
                }
              />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                  vitae molestie magna. Vivamus sed molestie enim
                </Card.Text>
                <Button variant="primary">Read More</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col className=" m-2" md="3">
            <Card>
              <Card.Img
                variant="top"
                src={
                  "https://res.cloudinary.com/dwzmsvp7f/image/fetch/q_75,f_auto,w_1316/https%3A%2F%2Fmedia.insider.in%2Fimage%2Fupload%2Fc_crop%2Cg_custom%2Fv1519627962%2Fvltlogy23k1iid9pjffx.jpg"
                }
              />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                  vitae molestie magna. Vivamus sed molestie enim
                </Card.Text>
                <Button variant="primary">Read More</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col className=" m-2" md="3">
            <Card>
              <Card.Img
                variant="top"
                src={
                  "https://res.cloudinary.com/dwzmsvp7f/image/fetch/q_75,f_auto,w_1316/https%3A%2F%2Fmedia.insider.in%2Fimage%2Fupload%2Fc_crop%2Cg_custom%2Fv1519627962%2Fvltlogy23k1iid9pjffx.jpg"
                }
              />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                  vitae molestie magna. Vivamus sed molestie enim
                </Card.Text>
                <Button variant="primary">Read More</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col className="m-2" md="3">
            <Card>
              <Card.Img
                variant="top"
                src={
                  "https://res.cloudinary.com/dwzmsvp7f/image/fetch/q_75,f_auto,w_1316/https%3A%2F%2Fmedia.insider.in%2Fimage%2Fupload%2Fc_crop%2Cg_custom%2Fv1519627962%2Fvltlogy23k1iid9pjffx.jpg"
                }
              />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                  vitae molestie magna. Vivamus sed molestie enim
                </Card.Text>
                <Button variant="primary">Read More</Button>
              </Card.Body>
            </Card>
          </Col>
        </Container>
      </div>
    </div>
  );
};

export default Home;
