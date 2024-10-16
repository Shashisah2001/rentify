import React, { useContext } from "react";
import "./KidsCategory.scss";
import kidShirt1 from "../assets/images/kids-tshirt01.jpg";
import kidShirt2 from "../assets/images/kids-tshirt02.jpg";
import kidShirt3 from "../assets/images/kids-tshirt03.jpg";
import kidShirt4 from "../assets/images/kids-tshirt04.jpg";
import { GlobalContext } from "../../Context/GlobalContext";

const KidsCategory = () => {
  const { addToCart, addToWishlist } = useContext(GlobalContext);

  const kidsProducts = [
    { id: 1, img: kidShirt1, price: 499, name: "White T-shirt" },
    { id: 2, img: kidShirt2, price: 599, name: "Olive T-shirt" },
    { id: 3, img: kidShirt3, price: 399, name: "White T-shirt " },
    { id: 4, img: kidShirt4, price: 299, name: "Black T-shirt" },
    { id: 1, img: kidShirt1, price: 499, name: "White T-shirt" },
    { id: 2, img: kidShirt2, price: 599, name: "Olive T-shirt" },
    { id: 3, img: kidShirt3, price: 399, name: "White T-shirt " },
    { id: 4, img: kidShirt4, price: 299, name: "Black T-shirt" },
    { id: 4, img: kidShirt4, price: 299, name: "Black T-shirt" },
  ];

  return (
    <div className="kids-category-content">
      <h2 className="kids-h1-content">Kid's Category</h2>
      <div className="kids-content-img">
        {kidsProducts.map((product) => (
          <div key={product.id} className="kids-category-item">
            <img src={product.img} alt="category" />
            <p>{product.name}</p>
            <p>Rs:{product.price}</p>
            <div className="kids-category-buttons">
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

export default KidsCategory;
