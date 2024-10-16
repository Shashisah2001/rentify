import React, { useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { GlobalContext } from "../../Context/GlobalContext";
import "./CategoryDetailPage.scss";

// Importing images
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

function CategoryDetailPage() {
  const { categoryId } = useParams();
  const navigate = useNavigate();
  const { addToCart, addToWishlist } = useContext(GlobalContext);

  // FUNCTION TO CAPITALIZE CATEGORY NAME
  const capitalizeFirstLetter = (string) =>
    string.charAt(0).toUpperCase() + string.slice(1);

  // Product List
  const products = [
    // Men's Products
    {
      id: 101,
      img: productImage1,
      price: 999,
      name: "Blue T-Shirt",
      category: "men",
      rating: 4.3,
    },
    {
      id: 102,
      img: productImage2,
      price: 1499,
      name: "Check Shirt",
      category: "men",
      rating: 4.5,
    },
    {
      id: 103,
      img: productImage3,
      price: 1799,
      name: "White Formal Shirt",
      category: "men",
      rating: 4.7,
    },
    {
      id: 104,
      img: productImage4,
      price: 1199,
      name: "Blue Denim Shirt",
      category: "men",
      rating: 4.4,
    },
    {
      id: 105,
      img: productImage5,
      price: 899,
      name: "Blue Denim Dot Shirt",
      category: "men",
      rating: 4.0,
    },
    {
      id: 106,
      img: productImage6,
      price: 799,
      name: "Olive Formal Shirt",
      category: "men",
      rating: 3.9,
    },
    {
      id: 107,
      img: productImage7,
      price: 899,
      name: "White Formal Shirt",
      category: "men",
      rating: 4.5,
    },
    {
      id: 108,
      img: productImage8,
      price: 1299,
      name: "Check Shirt",
      category: "men",
      rating: 4.6,
    },

    // Women's Products
    {
      id: 201,
      img: womenShirt1,
      price: 999,
      name: "Women Orange Shirt",
      category: "women",
      rating: 4.2,
    },
    {
      id: 202,
      img: womenShirt2,
      price: 1199,
      name: "Women White Shirt",
      category: "women",
      rating: 4.1,
    },
    {
      id: 203,
      img: womenShirt3,
      price: 1299,
      name: "Women Blue Denim Shirt",
      category: "women",
      rating: 4.4,
    },
    {
      id: 204,
      img: womenShirt4,
      price: 799,
      name: "Women Zebra Line Shirt",
      category: "women",
      rating: 4.0,
    },

    // Kids' Products
    {
      id: 301,
      img: kidTshirt1,
      price: 499,
      name: "Kids White T-shirt",
      category: "kids",
      rating: 4.1,
    },
    {
      id: 302,
      img: kidTshirt2,
      price: 599,
      name: "Kids Olive T-shirt",
      category: "kids",
      rating: 4.2,
    },
    {
      id: 303,
      img: kidTshirt3,
      price: 499,
      name: "Kids Red T-shirt",
      category: "kids",
      rating: 4.0,
    },
    {
      id: 304,
      img: kidTshirt4,
      price: 499,
      name: "Kids Blue T-shirt",
      category: "kids",
      rating: 4.1,
    },
    {
      id: 305,
      img: kidTshirt5,
      price: 499,
      name: "Kids Yellow T-shirt",
      category: "kids",
      rating: 4.0,
    },
    {
      id: 306,
      img: kidTshirt6,
      price: 499,
      name: "Kids Green T-shirt",
      category: "kids",
      rating: 4.1,
    },
    {
      id: 307,
      img: kidTshirt7,
      price: 499,
      name: "Kids Pink T-shirt",
      category: "kids",
      rating: 4.0,
    },
    {
      id: 308,
      img: kidTshirt8,
      price: 499,
      name: "Kids Grey T-shirt",
      category: "kids",
      rating: 4.0,
    },
    {
      id: 309,
      img: kidTshirt9,
      price: 499,
      name: "Kids Black T-shirt",
      category: "kids",
      rating: 4.2,
    },

    // Jewellery Products
    {
      id: 401,
      img: jewelItem1,
      price: 69999,
      name: "Silver Necklace",
      category: "jewellery",
      rating: 4.9,
    },
    {
      id: 402,
      img: jewelItem2,
      price: 19999,
      name: "Silver Ring",
      category: "jewellery",
      rating: 4.8,
    },
    {
      id: 403,
      img: jewelItem3,
      price: 35999,
      name: "Gold Bracelet",
      category: "jewellery",
      rating: 4.7,
    },
    {
      id: 404,
      img: jewelItem4,
      price: 110999,
      name: "Gold Necklace",
      category: "jewellery",
      rating: 4.9,
    },
    {
      id: 405,
      img: jewelItem5,
      price: 122999,
      name: "Gold Necklace",
      category: "jewellery",
      rating: 4.9,
    },
  ];

  // Filter products by categoryId
  const filteredProducts = products.filter(
    (product) => product.category === categoryId
  );

  if (filteredProducts.length === 0) {
    return (
      <div className="no-products">
        <button onClick={() => navigate(-1)} className="go-back">
          Go Back
        </button>
        <h2>No Product Found in this Category</h2>
      </div>
    );
  }

  return (
    <div className="category-detail-page">
      <button onClick={() => navigate(-1)} className="go-back">
        Go Back
      </button>
      <h1>{capitalizeFirstLetter(categoryId)} Products</h1>
      <div className="product-list">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            addToCart={addToCart}
            addToWishlist={addToWishlist}
          />
        ))}
      </div>
    </div>
  );
}

const ProductCard = ({ product, addToCart, addToWishlist }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === product.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? product.images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="product-card">
      <div className="product-image-carousel">
        <img
          src={product.images[currentImageIndex]}
          alt={product.name}
          className="product-image"
        />
        {product.images.length > 1 && (
          <div className="image-nav">
            <button onClick={prevImage}>Prev</button>
            <button onClick={nextImage}>Next</button>
          </div>
        )}
      </div>
      <h2>{product.name}</h2>
      <p className="product-price">Rs {product.price}</p>
      <div className="product-rating">⭐ {product.rating}</div>
      <div className="product-actions">
        <button onClick={() => addToCart(product, 1)} className="cart-btn">
          Add to Cart
        </button>
        <button onClick={() => addToWishlist(product)}>Add to Wishlist</button>
      </div>
    </div>
  );
};

export default CategoryDetailPage;
