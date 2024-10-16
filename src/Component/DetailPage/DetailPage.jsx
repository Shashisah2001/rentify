import React, { useContext, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { GlobalContext } from "../../Context/GlobalContext";
import "./DetailPage.scss";

// Product Images
import womenShirt1 from "../assets/images/women-shirt01.jpg";
import womenShirt2 from "../assets/images/women-shirt02.jpg";
import womenShirt3 from "../assets/images/women-shirt10.jpg";
import womenShirt4 from "../assets/images/women-shirt06.jpg";
import menTshirt1 from "../assets/images/men-tshirt03.jpg";
import menTshirt2 from "../assets/images/men-tshirt06.jpg";
import menTshirt3 from "../assets/images/men-tshirt07.jpg";
import menTshirt4 from "../assets/images/men-tshirt08.jpg";

function DetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart, addToWishlist } = useContext(GlobalContext);

  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(null);
  const [pinCode, setPinCode] = useState("");
  const [deliveryStatus, setDeliveryStatus] = useState(null);
  const [activeTab, setActiveTab] = useState("details");

  const products = [
    {
      id: 1,
      images: [womenShirt1, womenShirt2],
      price: 999,
      name: "Women Orange Shirt",
      rating: 4.5,
      reviews: [
        { user: "Ananya", comment: "Great fit and color!" },
        { user: "Priya", comment: "Loved it. Comfortable material." },
      ],
      details: {
        fabric: "100% Cotton",
        care: "Machine Wash",
        sizes: "S, M, L, XL",
      },
    },
    {
      id: 2,
      images: [womenShirt3, womenShirt4],
      price: 1299,
      name: "Women Pink Floral Shirt",
      rating: 4.7,
      reviews: [
        { user: "Riya", comment: "Beautiful floral design!" },
        { user: "Neha", comment: "The fabric is so soft and light." },
      ],
      details: {
        fabric: "Cotton Blend",
        care: "Hand Wash",
        sizes: "S, M, L",
      },
    },
    {
      id: 3,
      images: [menTshirt1, menTshirt2],
      price: 799,
      name: "Men's Black T-Shirt",
      rating: 4.2,
      reviews: [
        { user: "Rahul", comment: "Loves the minimalist design and material." },
        { user: "Varun", comment: "Fit is great, but prefers softer fabric." },
      ],
      details: {
        fabric: "90% Cotton, 10% Polyester",
        care: "Hand Wash Only",
        sizes: "M, L, XL, XXL",
      },
    },
    {
      id: 4,
      images: [menTshirt3, menTshirt4],
      price: 1199,
      name: "Men's Navy Blue T-Shirt",
      rating: 4.6,
      reviews: [
        { user: "Vishal", comment: "Very comfortable and stylish." },
        { user: "Amit", comment: "Perfect fit and fabric quality." },
      ],
      details: {
        fabric: "100% Organic Cotton",
        care: "Machine Wash",
        sizes: "L, XL, XXL",
      },
    },
    {
      id: 5,
      images: [menTshirt1, menTshirt4],
      price: 999,
      name: "Men's Graphic T-Shirt",
      rating: 4.3,
      reviews: [
        { user: "Arjun", comment: "Awesome print and quality." },
        { user: "Suresh", comment: "Fits perfectly, highly recommend!" },
      ],
      details: {
        fabric: "80% Cotton, 20% Polyester",
        care: "Machine Wash",
        sizes: "M, L, XL",
      },
    },
  ];

  const product = products.find((item) => item.id === parseInt(id));

  if (!product) {
    return <h2>Product Not Found</h2>;
  }

  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  };

  const checkDeliveryAvailability = () => {
    if (pinCode === "12345") {
      setDeliveryStatus("Delivery available to your location.");
    } else {
      setDeliveryStatus("Sorry, delivery is not available.");
    }
  };

  return (
    <div className="detail-page">
      <button onClick={() => navigate(-1)} className="go-back">
        Go Back
      </button>
      <div className="product-container">
        <div className="product-left">
          <div className="product-gallery">
            <img
              src={selectedImage || product.images[0]}
              alt={product.name}
              className="product-main-image"
            />
            <div className="product-thumbnails">
              {product.images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={product.name}
                  className="thumbnail"
                  onClick={() => setSelectedImage(img)}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="product-right">
          <h2>{product.name}</h2>
          <p className="product-price">Rs {product.price}</p>

          <div className="product-rating">
            <span>⭐ {product.rating}</span> ({product.reviews.length} Reviews)
          </div>

          <p className="product-description">
            A stylish {product.name.toLowerCase()} made from premium materials.
          </p>

          <div className="quantity-section">
            <label htmlFor="quantity">Quantity: </label>
            <input
              type="number"
              id="quantity"
              value={quantity}
              onChange={handleQuantityChange}
              min="1"
              max="10"
            />
          </div>

          <div className="delivery-check">
            <input
              type="text"
              placeholder="Enter your PIN code"
              value={pinCode}
              onChange={(e) => setPinCode(e.target.value)}
            />
            <button onClick={checkDeliveryAvailability}>
              Check Availability
            </button>
            {deliveryStatus && <p>{deliveryStatus}</p>}
          </div>

          <div className="detail-buttons">
            <button
              className="cart-btn"
              onClick={() => addToCart(product, quantity)}
            >
              Add to Cart
            </button>
            <button
              className="wishlist-btn"
              onClick={() => addToWishlist(product)}
            >
              Add to Wishlist
            </button>
          </div>

          <div className="product-tabs">
            <button
              className={activeTab === "details" ? "active" : ""}
              onClick={() => setActiveTab("details")}
            >
              Product Details
            </button>
            <button
              className={activeTab === "reviews" ? "active" : ""}
              onClick={() => setActiveTab("reviews")}
            >
              Customer Reviews
            </button>
          </div>

          {activeTab === "details" ? (
            <div className="product-details">
              <h3>Product Specifications</h3>
              <ul>
                <li>Fabric: {product.details.fabric}</li>
                <li>Care: {product.details.care}</li>
                <li>Available Sizes: {product.details.sizes}</li>
              </ul>
            </div>
          ) : (
            <div className="product-reviews">
              <h3>Customer Reviews</h3>
              <ul>
                {product.reviews.map((review, index) => (
                  <li key={index}>
                    <strong>{review.user}:</strong> {review.comment}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default DetailPage;
