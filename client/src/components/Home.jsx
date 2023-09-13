import React, {Component} from "react";
import { Header } from "./layouts/Header";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'

export default function Home() {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500
  };

  return (
    <div className="home">
      <h1 className="titleHome">Bienvenido a Mentius Connection</h1>
      <div className="slider-container">
        <Slider {...settings} className="slider">
          <div>
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </div>
          <div>
            <img src={reactLogo} className="logo react" alt="React logo" />
          </div>
          <div>
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </div>
          <div>
            <img src={reactLogo} className="logo react" alt="React logo" />
          </div>
          <div>
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </div>
          <div>
            <img src={reactLogo} className="logo react" alt="React logo" />
          </div>
          <div>
            <img src={reactLogo} className="logo react" alt="React logo" />
          </div>
        </Slider>
      </div>
    </div>
  );
}
