import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import "./Category.scss";
import productImage1 from "../assets/images/men-blue-tshirt01.jpg"; // Men Images
import productImage2 from "../assets/images/men-shirt2.jpg";
import productImage3 from "../assets/images/men-shirt3.jpg";
import productImage4 from "../assets/images/men-shirt4.jpg";
import productImage5 from "../assets/images/men-shirt5.jpg";
import productImage6 from "../assets/images/men-shirt6.jpg";
import productImage7 from "../assets/images/men-shirt7.jpg";
import productImage8 from "../assets/images/men-shirt8.jpg";
import womenShirt1 from "../assets/images/women-shirt01.jpg"; // Women Images
import womenShirt2 from "../assets/images/women-shirt02.jpg";
import womenShirt3 from "../assets/images/women-shirt10.jpg";
import womenShirt4 from "../assets/images/women-shirt06.jpg";
import kidTshirt1 from "../assets/images/kids-tshirt01.jpg"; // Kid Images
import kidTshirt2 from "../assets/images/kids-tshirt02.jpg";
import kidTshirt3 from "../assets/images/kids-tshirt03.jpg";
import kidTshirt4 from "../assets/images/kids-tshirt04.jpg";
import kidTshirt5 from "../assets/images/kids-tshirt05.jpg";
import kidTshirt6 from "../assets/images/kids-tshirt06.jpg";
import kidTshirt7 from "../assets/images/kids-tshirt07.jpg";
import kidTshirt8 from "../assets/images/kids-shirt01.jpg";
import kidTshirt9 from "../assets/images/kids-tshirt07.jpg";
import jewelItem1 from "../assets/images/necklace01.jpg"; // Jewellery Images
import jewelItem2 from "../assets/images/silver-ring01.jpg";
import jewelItem3 from "../assets/images/Brasclet01.jpg";
import jewelItem4 from "../assets/images/necklace02.jpg";
import jewelItem5 from "../assets/images/necklace03.jpg";
import { GlobalContext } from "../../Context/GlobalContext";

function Category() {
  const { addToCart, addToWishlist } = useContext(GlobalContext);
  const [activeCategory, setActiveCategory] = useState("all");
  const navigate = useNavigate(); // Initialize useNavigate for routing

  // Men Category
  const menCategory = [
    { id: 101, img: productImage1, price: 999, name: "Blue T-Shirt" },
    { id: 102, img: productImage2, price: 1499, name: "Check Shirt" },
    { id: 103, img: productImage3, price: 1799, name: "White Formal Shirt" },
    { id: 104, img: productImage4, price: 1199, name: "Blue Denim Shirt" },
    { id: 105, img: productImage5, price: 899, name: "Blue Denim Dot Shirt" },
    { id: 106, img: productImage6, price: 799, name: "Olive Formal Shirt" },
    { id: 107, img: productImage7, price: 899, name: "White Formal Shirt" },
    { id: 108, img: productImage8, price: 1299, name: "Check Shirt" },
  ];

  // Women Category
  const womenCategory = [
    { id: 201, img: womenShirt1, price: 999, name: "Women Orange Shirt" },
    { id: 202, img: womenShirt2, price: 1199, name: "Women White Shirt" },
    { id: 203, img: womenShirt3, price: 1299, name: "Women Blue Denim Shirt" },
    { id: 204, img: womenShirt4, price: 799, name: "Women Zebra Line Shirt" },
  ];

  // Kids Category
  const kidsCategory = [
    { id: 301, img: kidTshirt1, price: 499, name: "Kids White T-shirt" },
    { id: 302, img: kidTshirt2, price: 599, name: "Kids Olive T-shirt" },
    { id: 303, img: kidTshirt3, price: 499, name: "Kids Red T-shirt" },
    { id: 304, img: kidTshirt4, price: 499, name: "Kids Blue T-shirt" },
    { id: 305, img: kidTshirt5, price: 499, name: "Kids Yellow T-shirt" },
    { id: 306, img: kidTshirt6, price: 499, name: "Kids Green T-shirt" },
    { id: 307, img: kidTshirt7, price: 499, name: "Kids Pink T-shirt" },
    { id: 308, img: kidTshirt8, price: 499, name: "Kids Grey T-shirt" },
    { id: 309, img: kidTshirt9, price: 499, name: "Kids Black T-shirt" },
  ];

  // Jewellery Category
  const jewellaryCategory = [
    { id: 401, img: jewelItem1, price: 69999, name: "Silver Necklace" },
    { id: 402, img: jewelItem2, price: 19999, name: "Silver Ring" },
    { id: 403, img: jewelItem3, price: 35999, name: "Gold Bracelet" },
    { id: 404, img: jewelItem4, price: 110999, name: "Gold Necklace" },
    { id: 405, img: jewelItem5, price: 122999, name: "Gold Necklace" },
  ];

  const categoryMap = {
    men: menCategory,
    women: womenCategory,
    kids: kidsCategory,
    jewellary: jewellaryCategory,
    all: [
      ...menCategory,
      ...womenCategory,
      ...kidsCategory,
      ...jewellaryCategory,
    ],
  };

  const displayedProducts = categoryMap[activeCategory];

  // Navigate to the product details page
  const handleProductClick = (product) => {
    navigate(`/category/${product.id}`, { state: { product } });
  };

  return (
    <div className="category-content">
      <h1 className="h1-content">CATEGORY</h1>
      <ul className="category-li-tag">
        <li
          className={activeCategory === "all" ? "active" : ""}
          onClick={() => setActiveCategory("all")}
        >
          ALL
        </li>
        <li
          className={activeCategory === "men" ? "active" : ""}
          onClick={() => setActiveCategory("men")}
        >
          MEN
        </li>
        <li
          className={activeCategory === "women" ? "active" : ""}
          onClick={() => setActiveCategory("women")}
        >
          WOMEN
        </li>
        <li
          className={activeCategory === "kids" ? "active" : ""}
          onClick={() => setActiveCategory("kids")}
        >
          KIDS
        </li>
        <li
          className={activeCategory === "jewellary" ? "active" : ""}
          onClick={() => setActiveCategory("jewellary")}
        >
          JEWELLARY
        </li>
      </ul>

      <div className="content-img">
        {displayedProducts.length > 0 ? (
          displayedProducts.map((product) => (
            <div
              key={product.id}
              className="category-item"
              onClick={() => handleProductClick(product)}
            >
              <img src={product.img} alt={`${product.name}`} />
              <p>{product.name}</p>
              <p>Rs: {product.price}</p>
              <div className="category-buttons">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    addToCart(product);
                  }}
                >
                  Add To Cart
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    addToWishlist(product);
                  }}
                >
                  Add To Wishlist
                </button>
              </div>
            </div>
          ))
        ) : (
          <p>No Product Found in this Category</p>
        )}
      </div>
    </div>
  );
}

export default Category;
