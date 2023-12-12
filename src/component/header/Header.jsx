import React from "react";
import logo from "../../img/logo.webp";
import "./header.css";
export default function Header() {
  return (
    <header>
      <div className="logo">
        <img src={logo} alt="" srcset="" />
      </div>
      <nav>
        <a href="">Home</a>
        <a href="">Catalog</a>
        <a href="">Login</a>
      </nav>
    </header>
  );
}
