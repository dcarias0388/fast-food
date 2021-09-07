import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./header.css";
import carrusel1 from "./../../assets/carrusel/Carrusel1.jpg";
import carrusel2 from "./../../assets/carrusel/Carrusel2.jpg";
import carrusel3 from "./../../assets/carrusel/Carrusel3.jpg";
import carrusel4 from "./../../assets/carrusel/Carrusel4.jpg";
import carrusel5 from "./../../assets/carrusel/Carrusel5.jpg";

function Header() {
  return (
    <div className="Carrusel">
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100 imgCarrusel"
            src={carrusel1}
            alt="First plate"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 imgCarrusel"
            src={carrusel2}
            alt="Second plate"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 imgCarrusel"
            src={carrusel3}
            alt="Third plate"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 imgCarrusel"
            src={carrusel4}
            alt="Fourth plate"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 imgCarrusel"
            src={carrusel5}
            alt="Five plate"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Header;
