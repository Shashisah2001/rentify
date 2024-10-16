import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Payment.scss";

const Payment = () => {
  const [paymentDetails, setPaymentDetails] = useState({
    cardName: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPaymentDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handlePayment = (e) => {
    e.preventDefault();
    // Simulate payment processing
    setTimeout(() => {
      setPaymentSuccess(true);
      setTimeout(() => navigate("/"), 3500);
    }, 1000);
  };

  return (
    <div className="payment-page">
      <h2 className="payment-title">Payment Details</h2>

      {paymentSuccess ? (
        <div className="payment-success">
          <h3>Payment Successful!</h3>
          <p>Thank you for your purchase....</p>
        </div>
      ) : (
        <form className="payment-form" onSubmit={handlePayment}>
          <div className="form-group">
            <label htmlFor="cardName">Cardholder's Name</label>
            <input
              type="text"
              id="cardName"
              name="cardName"
              value={paymentDetails.cardName}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="cardNumber">Card Number</label>
            <input
              type="text"
              id="cardNumber"
              name="cardNumber"
              value={paymentDetails.cardNumber}
              onChange={handleInputChange}
              required
              maxLength="16"
              pattern="\d{16}"
              placeholder="1234 5678 9012 3456"
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="expiryDate">Expiry Date</label>
              <input
                type="text"
                id="expiryDate"
                name="expiryDate"
                value={paymentDetails.expiryDate}
                onChange={handleInputChange}
                required
                placeholder="MM/YY"
              />
            </div>

            <div className="form-group">
              <label htmlFor="cvv">CVV</label>
              <input
                type="text"
                id="cvv"
                name="cvv"
                value={paymentDetails.cvv}
                onChange={handleInputChange}
                required
                maxLength="3"
                pattern="\d{3}"
                placeholder="123"
              />
            </div>
          </div>

          <button type="submit" className="pay-now-btn">
            Pay Now
          </button>
        </form>
      )}
    </div>
  );
};

export default Payment;
