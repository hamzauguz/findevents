import React from "react";

import Carousel from "react-elastic-carousel";

import "./Styles.CarouselMultipleSlider.css";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

const CarouselMultipleSlider = ({ props }) => {
  return (
    <>
      <div className="App">
        <Carousel breakPoints={breakPoints}>{props}</Carousel>
      </div>
    </>
  );
};

export default CarouselMultipleSlider;
