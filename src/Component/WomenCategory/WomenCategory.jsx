import React, { useContext } from "react";
import "./WomenCategory.scss";
import womenShirt1 from "../assets/images/women-shirt01.jpg";
import womenShirt2 from "../assets/images/women-shirt02.jpg";
import womenShirt3 from "../assets/images/women-shirt10.jpg";
import womenShirt4 from "../assets/images/women-shirt06.jpg";
import womenShirt5 from "../assets/images/women-shirt07.jpg";
import womenShirt6 from "../assets/images/women-shirt08.jpg";
import womenShirt7 from "../assets/images/women-shirt09.jpg";
import womenShirt8 from "../assets/images/women-shirt11.jpg";
import womenShirt9 from "../assets/images/women-shirt12.jpg";
import womenShirt10 from "../assets/images/women-shirt13.jpg";
import womenShirt11 from "../assets/images/women-shirt03.jpg";
import womenShirt12 from "../assets/images/women-shirt04.jpg";
import womenShirt13 from "../assets/images/women-shirt05.jpg";
import womenShirt14 from "../assets/images/women-shirt14.jpg";
import womenShirt15 from "../assets/images/women-shirt15.jpg";
import { GlobalContext } from "../../Context/GlobalContext";

const WomenCategory = () => {
  const { addToCart, addToWishlist } = useContext(GlobalContext);

  const womenProducts = [
    { id: 1, img: womenShirt1, price: 999, name: "Women Orange Shirt" },
    { id: 2, img: womenShirt2, price: 1199, name: "Women White Shirt" },
    { id: 3, img: womenShirt3, price: 1299, name: "Women Blue Denim Shirt" },
    { id: 4, img: womenShirt4, price: 799, name: "Women Zebra Line Shirt" },
    { id: 5, img: womenShirt5, price: 799, name: "Women Formal Blue Shirt" },
    { id: 6, img: womenShirt6, price: 999, name: "Women Formal Cream Shirt" },
    { id: 7, img: womenShirt7, price: 1199, name: "Women Oliv Light Shirt" },
    { id: 8, img: womenShirt8, price: 1299, name: "Women Light Brown Shirt" },
    { id: 9, img: womenShirt9, price: 799, name: "Women Formal Red Shirt" },
    { id: 10, img: womenShirt10, price: 799, name: "Women Formal Grey Shirt" },
    { id: 11, img: womenShirt11, price: 799, name: "Women Blue Shirt" },
    { id: 12, img: womenShirt12, price: 799, name: "Women Yellow Shirt" },
    { id: 13, img: womenShirt13, price: 799, name: "Women Formal Khaki Shirt" },
    { id: 14, img: womenShirt14, price: 799, name: "Women Formal Blue Shirt" },
    { id: 15, img: womenShirt15, price: 799, name: "Women Formal  Khaki Shirt" },
  ];

  return (
    <div className="women-category-content">
      <h2 className="women-h1-content">Women's Category</h2>
      <div className="women-content-img">
        {womenProducts.map((product) => (
          <div key={product.id} className="women-category-item">
            <img src={product.img} alt="category" />
            <p>{product.name}</p>
            <p>Rs:{product.price}</p>
            <div className="women-category-buttons">
              <button onClick={() => addToCart(product)}>Add To Cart</button>
              <button onClick={() => addToWishlist(product)}>
                Add To Wishlist
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WomenCategory;
