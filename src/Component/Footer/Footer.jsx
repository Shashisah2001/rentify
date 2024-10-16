import React from "react";
import { Link } from "react-router-dom";
import "./Footer.scss";
import facebookImage from "../assets/images/facebook01.png";
import instagramImage from "../assets/images/instagram.png";
import twitterImage from "../assets/images/twitter.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <h2>Rentify</h2>
          <p>
            Rentify is your go-to destination for affordable, high-quality
            fashion and lifestyle products for men, women, and kids. We offer a
            diverse selection of apparel and accessories to help you stay on
            trend without compromising on comfort or budget.
          </p>
        </div>

        <div className="footer-links">
          <h2>Links</h2>
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/product">Products</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            {/* <li>
              <Link to="/faq">FAQ</Link>
            </li> */}
          </ul>
        </div>

        <div className="footer-address">
          <h2>Address</h2>
          <p>
            Rentify - Premium Fashion for Men, Women, and Kids <br />
            12B Fashion Street, Adarsh Nagar <br />
            Jolly Grant, 248011, UK, India
          </p>
        </div>

        <div className="footer-contact">
          <h2>Contacts</h2>
          <p>Mail: support@rentify.com</p>
          <p>Phone: +91 7505483745</p>
          <div className="social-icons">
            <Link
              to="#"
              onClick={() => window.open("https://facebook.com", "_blank")}
            >
              <img className="image-tag" src={facebookImage} alt="facebook" />
            </Link>
            <Link
              to="#"
              onClick={() => window.open("https://instagram.com", "_blank")}
            >
              <img className="image-tag" src={instagramImage} alt="instagram" />
            </Link>
            <Link
              to="#"
              onClick={() => window.open("https://twitter.com", "_blank")}
            >
              <img className="image-tag" src={twitterImage} alt="twitter" />
            </Link>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Rentify. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
