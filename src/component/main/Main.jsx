import React , { useEffect , useState}  from "react";
import "./main.css";
import book1 from "../../img/1.jpg";
import book2 from "../../img/2.jpg";
import book3 from "../../img/3.png";
import Slider from "./Slider";
import { Link } from "react-router-dom";



export default  function Main() {
  const [books, setBooks] = useState([]);

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
            }).catch((e) => {
                console.log(e)
            })
    }, [])
    console.log(books);
    let foo = books.slice(0, 3)
    
  return (
    <div className="main-container">
      <h1>
        Our Library <br /> Colection of Books
      </h1>

      <div className="book-box">
      {foo.map((book) => {
        console.log(book.title);
        return (<div className="box">
          <a>
            <img src={book} />
          </a>
        <p className="title">{book.title}</p>
        <p className="author">{book.authors}</p>
      </div>)
      })}
        {/* <div className="box">
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
        </div> */}
      </div>
      <div className="view-all">
      <Link to="/catalog" > View All</Link>

      </div>
      <h3>Recat Addition</h3>
      <Slider />
    </div>
  );
}
