import React from "react";
import "./Banner.scss";

const Banner = () => {
  return (
    <div className="bannerpage">
      <header className="banner-header">
        <h1>Welcome to Rentify</h1>
        <p>Discover the joy of effortless shopping.</p>
        <p>Quality you can trust, delivered to your door.</p>
        <button className="explore-btn">
          <a href="/about">Explore Now</a>
        </button>
      </header>
      <section className="features">
        <div className="feature">
          <h2>Wide Range of Products</h2>
          <p>From Fashion Wear To Jweallery, We Have It All!</p>
        </div>
        <div className="feature">
          <h2>Easy Checkout</h2>
          <p>Fast And Secure Payment Options.</p>
        </div>
        <div className="feature">
          <h2>Customer Support</h2>
          <p>We're Here To Help You 24/7.</p>
        </div>
      </section>
    </div>
  );
};

export default Banner;
