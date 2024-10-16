import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AddToCart.scss";
import { GlobalContext } from "../../Context/GlobalContext";

const Cart = () => {
  const { cart, totalCartAmount, removeFromCart, addToCart } =
    useContext(GlobalContext);
  const [showMessage, setShowMessage] = useState("");
  const [recentlyRemoved, setRecentlyRemoved] = useState(null);
  const navigate = useNavigate();

  // FUNCTION FOR SOFT POPUP MESSAGE
  const displayMessage = (message) => {
    setShowMessage(message);
    setTimeout(() => setShowMessage(""), 3000);
  };

  // Handle remove item and store it in recently removed state
  const handleRemove = (item) => {
    removeFromCart(item.id);
    setRecentlyRemoved(item);
    displayMessage("Item Removed. Undo?");
  };

  // Handle Undo action
  const handleUndo = () => {
    if (recentlyRemoved) {
      addToCart(recentlyRemoved);
      setRecentlyRemoved(null);
      displayMessage("Item Restored");
    }
  };

  // Handle Buy Now action
  const handleBuyNow = () => {
    navigate("/payment");
  };

  return (
    <div className="cart-page">
      {showMessage && <div className="soft-popup">{showMessage}</div>}
      <h2 className="cart-title">Shopping Cart</h2>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="cart-items">
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.img} alt={item.name} className="cart-item-image" />
              <div className="item-details">
                <p className="item-name">{item.name}</p>
                <p className="item-price">Rs: {item.price}</p>
                <p className="item-quantity">Quantity: {item.quantity}</p>
              </div>
              <button className="remove-btn" onClick={() => handleRemove(item)}>
                Remove
              </button>
            </div>
          ))}
          <h3 className="total-amount">Total Amount: Rs {totalCartAmount}</h3>
          <div className="cart-actions">
            <button className="buy-btn" onClick={handleBuyNow}>
              Buy Now
            </button>
            {recentlyRemoved && (
              <button className="undo-btn" onClick={handleUndo}>
                Undo
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
