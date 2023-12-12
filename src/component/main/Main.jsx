import React from "react";
import "./main.css";
import book1 from "../../img/1.jpg";
import book2 from "../../img/2.jpg";
import book3 from "../../img/3.png";
import Slider from "./Slider"

export default function Main() {
  return (
    <div className="main-container">
      <h1>
        Our Library <br /> Colection of Books
      </h1>

      <div className="book-box">
        <div className="box">
          <a>
            <img src={book1} />
          </a>
          <p className="title">Linux Title</p>
          <p className="author">Linux offical</p>
        </div>
        <div className="box">
          <a>
            <img src={book2} />
          </a>
          <p className="title">Linux Title</p>
          <p className="author">Linux offical</p>
        </div>
        <div className="box">
          <a>
            <img src={book3} />
          </a>
          <p className="title">Linux Title</p>
          <p className="author">Linux offical</p>
        </div>
      </div>
      <a className="main-button">
        <button>View All</button>
      </a>
      <h3>Recat Addition</h3>
      <Slider/>
    </div>
  );
}
