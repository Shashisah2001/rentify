import React, { useEffect, useState } from "react";
import "./HomePage.scss";
import homeImage1 from "../assets/images/home-banner06.png";
import homeImage2 from "../assets/images/home-banner05.png";
import homeImage3 from "../assets/images/home-banner03.png";
import homeImage4 from "../assets/images/home-banner04.png";
import homeImage5 from "../assets/images/home-banner07.png";
import Product from "../Product/Product";
import Category from "../Category/Category";
import Banner from "../Banner/Banner";

const images = [homeImage1, homeImage2, homeImage3, homeImage4, homeImage5];

function HomePage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 1700);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="homepage-content">
        <img
          className="home-img"
          src={images[currentImageIndex]}
          alt="home slider"
        />
      </div>
      <Banner />
      <Product />
      <Category />
    </>
  );
}

export default HomePage;
