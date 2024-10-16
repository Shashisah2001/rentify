import React, { useContext } from "react";
import "./MenCategory.scss";
import productImage1 from "../assets/images/men-blue-tshirt01.jpg";
import productImage2 from "../assets/images/men-shirt2.jpg";
import productImage3 from "../assets/images/men-shirt3.jpg";
import productImage4 from "../assets/images/men-shirt4.jpg";
import productImage5 from "../assets/images/men-shirt5.jpg";
import productImage6 from "../assets/images/men-shirt6.jpg";
import productImage7 from "../assets/images/men-shirt7.jpg";
import productImage8 from "../assets/images/men-shirt8.jpg";
import productImage9 from "../assets/images/men-shirt9.jpg";
import productImage10 from "../assets/images/men-shirt10.jpg";
import productImage11 from "../assets/images/men-shirt11.jpg";
import productImage12 from "../assets/images/men-shirt12.jpg";
import productImage13 from "../assets/images/men-shirt13.jpg";
import productImage14 from "../assets/images/men-sweatshirt1.jpg";
import productImage15 from "../assets/images/men-sweatshirt2.jpg";
import productImage16 from "../assets/images/men-tshirt02.jpg";
import productImage17 from "../assets/images/men-tshirt03.jpg";
import productImage18 from "../assets/images/men-tshirt04.jpg";
import productImage19 from "../assets/images/men-tshirt05.jpg";
import productImage20 from "../assets/images/men-tshirt06.jpg";
import productImage21 from "../assets/images/men-tshirt07.jpg";
import productImage22 from "../assets/images/men-tshirt08.jpg";
import productImage23 from "../assets/images/men-tshirt09.jpg";
import productImage24 from "../assets/images/men-tshirt10.jpg";
import productImage25 from "../assets/images/men-tshirt11.jpg";
import productImage26 from "../assets/images/men-tshirt12.jpg";
import productImage27 from "../assets/images/men-tshirt13.jpg";
import { GlobalContext } from "../../Context/GlobalContext";

function MenCategory() {
  const { addToCart, addToWishlist } = useContext(GlobalContext);

  const menProducts = [
    { id: 1, img: productImage1, price: 999, name: "Blue T-Shirt" },
    { id: 2, img: productImage2, price: 1499, name: "Check Shirt" },
    { id: 3, img: productImage3, price: 1799, name: "White Formal Shirt" },
    { id: 4, img: productImage4, price: 1199, name: "Blue Denim Shirt" },
    { id: 5, img: productImage5, price: 899, name: "Blue Denim Dot Shirt" },
    { id: 6, img: productImage6, price: 799, name: "Olive Formal Shirt" },
    { id: 7, img: productImage7, price: 899, name: "White Formal Shirt" },
    { id: 8, img: productImage8, price: 799, name: "Check Shirt" },
    { id: 9, img: productImage9, price: 499, name: "Check Shirt" },
    { id: 10, img: productImage10, price: 599, name: "Formal Red Shirt" },
    { id: 11, img: productImage11, price: 699, name: "Formal Khaki Shirt" },
    { id: 12, img: productImage12, price: 499, name: "Check Shirt" },
    { id: 13, img: productImage13, price: 699, name: "Black Fromal Shirt" },
    { id: 14, img: productImage14, price: 1099, name: "Orange Sweat Shirt Shirt" },
    { id: 15, img: productImage15, price: 1399, name: "Olive Sweat Shirt Shirt" },
    { id: 16, img: productImage16, price: 599, name: "White T-Shirt" },
    { id: 17, img: productImage17, price: 599, name: "Light Grey T-Shirt" },
    { id: 18, img: productImage18, price: 399, name: "Dark Grey T-Shirt" },
    { id: 19, img: productImage19, price: 499, name: "Blue T-Shirt" },
    { id: 20, img: productImage20, price: 599, name: "Red T-Shirt" },
    { id: 21, img: productImage21, price: 499, name: "Dark Blue T-Shirt" },
    { id: 22, img: productImage22, price: 699, name: "Grey T-Shirt" },
    { id: 23, img: productImage23, price: 499, name: "Light Green T-Shirt" },
    { id: 24, img: productImage24, price: 599, name: "Cream T-Shirt" },
    { id: 25, img: productImage25, price: 499, name: " Green T-Shirt" },
    { id: 26, img: productImage26, price: 399, name: " Orange T-Shirt" },
    { id: 27, img: productImage27, price: 299, name: "Yellow T-Shirt" },
  ];

  return (
    <div className="men-category-content">
      <h1 className="men-h1-content">Men's Collection</h1>
      <div className="men-content-img">
        {menProducts.map((product) => (
          <div key={product.id} className="men-category-item">
            <img src={product.img} alt="category" />
            <p>{product.name}</p>
            <p>Rs:{product.price}</p>
            <div className="men-category-buttons">
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
}

export default MenCategory;
