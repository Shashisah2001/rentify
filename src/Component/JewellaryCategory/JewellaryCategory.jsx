import React, { useContext } from "react";
import "./JewellaryCategory.scss";
import { Link } from "react-router-dom";
import jewelItem1 from "../assets/images/necklace01.jpg";
import jewelItem2 from "../assets/images/silver-ring01.jpg";
import jewelItem3 from "../assets/images/Brasclet01.jpg";
import jewelItem4 from "../assets/images/necklace02.jpg";
import jewelItem5 from "../assets/images/necklace03.jpg";
import { GlobalContext } from "../../Context/GlobalContext";

const jewellaryProducts = [
  { id: 1, img: jewelItem1, price: 69999, name: "Silver Necklace" },
  { id: 2, img: jewelItem2, price: 19999, name: "Silver Ring" },
  { id: 3, img: jewelItem3, price: 35999, name: "Gold Bracelet" },
  { id: 4, img: jewelItem4, price: 110999, name: "Gold Necklace" },
  { id: 5, img: jewelItem5, price: 122999, name: "Gold Necklace" },
];

const JewellaryCategory = () => {
  const { addToCart, addToWishlist } = useContext(GlobalContext);

  return (
    <div className="jewellary-category-content">
      <h1 className="jewellary-h1-content">Jewellary Collection</h1>

      <div className="item-links">
        <div className="item-list">
          <div className="item">
            <Link to="/category/jewelry/necklaces">Necklace</Link>
          </div>
          <div className="item">
            <Link to="/category/jewelry/earrings">Earring</Link>
          </div>
          <div className="item">
            <Link to="/category/jewelry/bracelets">Bracelet</Link>
          </div>
          <div className="item">
            <Link to="/category/jewelry/rings">Ring</Link>
          </div>
        </div>
      </div>

      <div className="jewellary-content-img">
        {jewellaryProducts.map((product) => (
          <div key={product.id} className="jewellary-category-item">
            <img src={product.img} alt={product.name} />
            <p>{product.name}</p>
            <p>Rs: {product.price}</p>
            <div className="jewellary-category-buttons">
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

export default JewellaryCategory;
