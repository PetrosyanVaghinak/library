import React from "react";
import "./footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <div className="box">
        <h3>Contact Us</h3><br />
        <p>Academy Address</p>
        <p>City, State Zip</p>
        <p>Phone: (123) 456-7890</p>
        <p>Email: info@academy.com</p>
      </div>
      <div className="box">
        <h3>Library Hours</h3> <br />
        <p>Monday - Friday: 9am - 5pm</p>
        <p>Saturday: 10am - 4pm</p>
        <p>Sunday: Closed</p>
      </div>
      <div className="box">
        <h3>Hellpfull Links</h3><br />
        <a href=""> Academy Website</a>
        <a href="">Facebook</a>
        <a href="">Twitter</a>
        <a href="">Feedback Form</a>
      </div>
    </div>
  );
}
