import React from "react";
import "./About.scss";
import aboutImage from "../assets/images/shopping07.avif";
import fastShipImage from "../assets/images/shipping.png";
import sustainableImage from "../assets/images/sustainable1.png";
import trustImage from "../assets/images/trust1.png";

function About() {
  return (
    <>
      <div className="main-div">
        <h1 className="about-h1">ABOUT US</h1>
        <div className="about-container">
          <div className="about-content">
            <h1>About Rentify</h1>
            <p className="content-p">
              Welcome to <strong>Rentify</strong>, where fashion meets
              affordability and sustainability. Whether you're looking to
              elevate your wardrobe with timeless pieces or refresh your look
              with the latest trends, Rentify is your one-stop destination. Our
              curated collections for men, women, and kids are designed with
              your unique style in mind, offering a perfect blend of quality,
              comfort, and modern flair—without breaking the bank.
            </p>
            <p className="content-p">
              At Rentify, we believe fashion is for everyone, and our goal is to
              make every shopping experience effortless, enjoyable, and full of
              delightful discoveries. Join the Rentify family and step into a
              world where style and substance go hand in hand.
            </p>
            <button className="cta-button">
              <a href="/category">Explore Our Collection</a>
            </button>
          </div>
          <div className="image-overlay">
            <img src={aboutImage} alt="about" />
            <div className="overlay-text">Quality Fashion for Everyone</div>
          </div>
        </div>
        <div className="mission-section">
          <h2 className="h2-tag">Our Mission</h2>
          <p>
            At<strong> Rentify</strong>, our mission is to provide affordable,
            high-quality fashion that meets the needs of every individual while
            contributing to a sustainable future.
          </p>
          <div className="trust-badges">
            <div className="badge">
              <img src={fastShipImage} alt="Fast Shipping" />
              <p>Fast & Reliable Shipping</p>
            </div>
            <div className="badge">
              <img src={sustainableImage} alt="Sustainable Products" />
              <p>Eco-Friendly & Sustainable Products</p>
            </div>
            <div className="badge">
              <img src={trustImage} alt="Customer Satisfaction Guaranteed" />
              <p>Customer Satisfaction Guaranteed</p>
            </div>
          </div>
        </div>
        <div className="contact-section">
          <h2 className="h2-tag">Contact Us</h2>
          <p>Have questions? We're here to help!</p>
          <p>Email: support@rentify.com | Phone: +91 7505483745</p>
          <p>
            Address: 12B Fashion Street, Adarsh Nagar, Jolly Grant, 248011, UK,
            India
          </p>
        </div>
      </div>
    </>
  );
}

export default About;
