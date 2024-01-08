import React from "react";
import logo from "../../img/logo.webp";
import "./header.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>

      <div className="logo">
        <img src={logo} alt="" srcset="" />
      </div>
      <nav>
     <Link to="/">Home</Link>
     <Link to="/catalog">Catalog</Link>
     <Link to="/login">Login</Link>
       
      </nav>
      
    </header>
    
   
    
  );
}
