import React, { useContext, useState } from "react";
import "./AddToWishlist.scss";
import { GlobalContext } from "../../Context/GlobalContext";

const Wishlist = () => {
  const { wishlist, removeFromWishlist, addToCart } = useContext(GlobalContext);
  const [showMessage, setShowMessage] = useState("");

  // FUNCTION FOR SOFT POPUP MESSAGE
  const displayMessage = (message) => {
    setShowMessage(message);
    setTimeout(() => setShowMessage(""), 3000);
  };

  const handleRemove = (productId) => {
    removeFromWishlist(productId);
    displayMessage("Product removed from wishlist");
  };

  const handleAddToCart = (product) => {
    addToCart(product);
    displayMessage("Product added to cart");
  };

  return (
    <div className="wishlist-page">
      {showMessage && <div className="soft-popup">{showMessage}</div>}
      <h2 className="wishlist-title">Wishlist</h2>
      {wishlist.length === 0 ? (
        <p className="empty-message">Your wishlist is empty.</p>
      ) : (
        <div className="wishlist-items">
          {wishlist.map((item) => (
            <div key={item.id} className="wishlist-item">
              <img
                src={item.img}
                alt={item.name}
                className="wishlist-item-image"
              />
              <div className="item-details">
                <p className="item-name">{item.name}</p>
                <p className="item-price">Rs: {item.price}</p>
              </div>
              <button
                className="add-to-cart-btn"
                onClick={() => handleAddToCart(item)}
              >
                Add to Cart
              </button>
              <button
                className="remove-btn"
                onClick={() => handleRemove(item.id)}
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist;
