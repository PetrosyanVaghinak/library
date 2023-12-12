import React, { Component } from "react";
import Slider from "react-slick";
import "./main.css";
import book1 from "../../img/4.png";
import book2 from "../../img/5.png";
import book3 from "../../img/6.jpg";
import book4 from "../../img/7.png";
import book5 from "../../img/8.jpg";
import book6 from "../../img/9.jpg";

export default class AutoPlay extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 3000,
      autoplaySpeed: 3000,
      cssEase: "linear",
    };
    return (
      <div className="slider">
        <Slider {...settings}>
          <div>
            <img src={book1} alt="" />
          </div>
          <div>
            <img src={book2} alt="" />
          </div>
          <div>
            <img src={book3} alt="" />
          </div>
          <div>
            <img src={book4} alt="" />
          </div>
          <div>
            <img src={book5} alt="" />
          </div>
          <div>
            <img src={book6} alt="" />
          </div>
        </Slider>
      </div>
    );
  }
}