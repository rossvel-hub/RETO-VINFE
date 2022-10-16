import React from "react";
import Carousel from "./Carousel";
import Container from "./Container";
import Wave from "./Wave";

const Home = () => {
  return (
    <div className="container">
      <Carousel />
      {/* <Wave /> */}
      <Container />
    </div>
  );
};

export default Home;
