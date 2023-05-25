import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Styles.Home.css";
import Carousel from "react-bootstrap/Carousel";
import { Container, Card, Col, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import { useNavigate } from "react-router-dom";
import ProductCard from "../../components/product-card";
import CarouselMultipleSlider from "../../components/carousel-multiple-slider";
import OpeningCard from "../../components/opening-card";
import Rules from "../../apis/rules.json";

const Home = () => {
  const [name, setName] = useState("");
  const [data, setData] = useState();
  const [sonuc, setSonuc] = useState("");
  const [count, setCount] = useState(4);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  const [eventData, setEventData] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    axios.get("http://localhost/findevents/api/event.php").then((res) => {
      console.log(res.data);
      setEventData(res.data);
    });
  }, []);

  return (
    <div className="home-container">
      <div className="slider-place">
        <Carousel
          swipeable={false}
          draggable={false}
          showDots={true}
          responsive={responsive}
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          autoPlaySpeed={1000}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={500}
          removeArrowOnDeviceType={["tablet", "mobile"]}
          itemClass="carousel-item-padding-40-px"
        >
          <Carousel.Item interval={3000}>
            <img
              className="slider-img1"
              src="https://sadievents.com/wp-content/uploads/2017/12/dbe74e11-82f3-4f7a-8397-c3d23f721e00.jpg"
              alt="First slide"
            />
            {/* <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption> */}
          </Carousel.Item>
          <Carousel.Item interval={3000}>
            <img
              className="slider-img1"
              src="https://www.bdc.ca/globalassets/digizuite/26400-sales-marketing-1200x630-en.png"
              alt="Second slide"
            />
            {/* <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption> */}
          </Carousel.Item>
          <Carousel.Item interval={3000}>
            <img
              className="slider-img1"
              src="https://www.citycenterdc.com/wp-content/uploads/2023/01/IMG_5934-800x600.jpg"
              alt="Third slide"
            />
            {/* <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption> */}
          </Carousel.Item>
        </Carousel>
      </div>
      <div className="rulesPlace">
        <h2>
          <strong className="cardHomeTitle">Kurallar</strong>
          <hr className="lineCarousel" />
        </h2>
        <CarouselMultipleSlider
          props={Rules.map((item, key) => (
            <OpeningCard key={key} title={item.title} src={item.img} description={item.desc} />
          ))}
        />
      </div>
      <div className="cardCarouselPlace">
        <h2>
          <strong className="cardHomeTitle">Son Eklenen Etkinlikler</strong>
          <hr className="lineCarousel" />
        </h2>
        <CarouselMultipleSlider
          props={eventData.map((item, key) => (
            <ProductCard
              key={key}
              date={item.eventdate}
              src={"https://www.dignited.com/wp-content/uploads/2022/11/band-checklist-what-to-bring-to-a-gig.jpg"}
              price={item.eventprice}
              cunit={"₺"}
              title={item.eventtitle.length > 25 ? `${item.eventtitle.substring(0, 25)}...` : item.eventtitle}
              description={item.eventdesc.length > 20 ? `${item.eventdesc.substring(0, 20)}...` : item.eventdesc}
              // onClick={() =>
              //   navigate(`/gameposts/${gameAdd.id}`, {
              //     state: { gameAdd },
              //   })
              // }
              onClick={() => navigate(`/events/${item.eventid}`, { state: { item } })}
            />
          ))}
        />
      </div>
    </div>
  );
};

export default Home;
