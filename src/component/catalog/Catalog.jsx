import React, {useEffect , useState} from "react";
import "./catalog.css";
import { Link } from "react-router-dom";
import book1 from "../../img/4.png";
import book2 from "../../img/5.png";
import book3 from "../../img/6.jpg";
import book4 from "../../img/7.png";
import book5 from "../../img/8.jpg";
import book6 from "../../img/10.jpg";

export default function Catalog() {
  const [books, setBooks] = useState([]);
  const [book, setBook] = useState([]);


  useEffect(() => {
      fetch("http://localhost:3003/book/allbooks", {
          method: 'GET',
          credentials: 'include',
          headers: {
              'Content-Type': 'application/json'
          }
      })
          .then((response) => {
              return response.json()
          })
          .then((books) => {
            
              setBooks(books);
              setBook(books.slice(0,6))
          }).catch((e) => {
              console.log(e)
          })
  }, [])
  
 const setCatalogBooks = () => {
  let displayedBooks = books.slice(book.length, book.length + 6)
  let nextDisplayedBooks = [...book,...displayedBooks];
  setBook(nextDisplayedBooks)
 }
 

 const handleSearch = (event) =>{
  console.log(event.target.value);
    const searchValue  = event.target.value.toLowerCase()
      let filteredBooks = books.filter((book) => {
        if (book && book.title && book.title.toLowerCase().includes(searchValue)) {
          return true;
        } else {
          return false;
        }
        
      });
      setBook(filteredBooks)
 }
 
  return (
    <div className="catalogContiner">
      <div className="left">
        <div className="search">
          <input type="sumbit" placeholder="Search Books" onChange={handleSearch} />
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
        {book.map((book) => {
        // console.log(book.title);
         return ( <div className="boxNew">
            <a>
              <img src={book} />
              <h5>{book.title}</h5>
              <p>{book.authors}</p>
              <p>{book.availability}</p>
            </a>
          </div>)
          })}
          {/* <div className="boxNew">
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
          </div> */}
        </div>
          <div className="button-load">
            
          <button onClick={setCatalogBooks}>Load More</button>
          </div>
      </div>
    </div>
  );
}
