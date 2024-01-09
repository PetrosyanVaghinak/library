import React from "react";
import "./catalog.css";
import { Link } from "react-router-dom";
import book1 from "../../img/4.png";
import book2 from "../../img/5.png";
import book3 from "../../img/6.jpg";
import book4 from "../../img/7.png";
import book5 from "../../img/8.jpg";
import book6 from "../../img/10.jpg";


export default function Catalog() {
  return (
    <div className="catalogContiner">
<div className="left">
<div className="search">
        <input type="sumbit" placeholder="Search Books" />
        <button type="button"> Search</button>
      </div>
      <br />
      <div className="filterOption">
        <h3>Filter Options</h3>
        <Link>All Books</Link>
        <Link>Fiction</Link>
        <Link>Non-Fiction</Link>
        <Link>Biography</Link>
        <Link>History</Link>
      </div>
      <div className="button">
        <button>Reset Filters</button>
      </div>

</div>
<div className="right">
<div className="books-box">
        <div className="boxNew">
          <a>
            <img src={book1} />
            <h3>Book Title</h3>
            <p>Author</p>
            <p>Available</p>
          </a>
        </div>
        <div className="boxNew">
          <a>
            <img src={book2} />
            <h3>Book Title</h3>
            <p>Author</p>
            <p>Available</p>
          </a>
        </div>
        <div className="boxNew">
          <a>
            <img src={book3} />
            <h3>Book Title</h3>
            <p>Author</p>
            <p>Available</p>
          </a>
        </div>
        <div className="boxNew">
          <a>
            <img src={book4} />
            <h3>Book Title</h3>
            <p>Author</p>
            <p>Available</p>
          </a>
        </div>
        <div className="boxNew">
          <a>
            <img src={book5} />
            <h3>Book Title</h3>
            <p>Author</p>
            <p>Available</p>
          </a>
        </div>
        <div className="boxNew">
          <a>
            <img src={book6} />
            <h3>Book Title</h3>
            <p>Author</p>
            <p>Available</p>
          </a>
        </div>
        
      </div>
      <button >Load More</button>

</div>
 
    </div>
  );
}
