import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Product.scss";
import { GlobalContext } from "../../Context/GlobalContext";

function Product() {
  const { addToCart, addToWishlist } = useContext(GlobalContext);
  const navigate = useNavigate();

  const apiUrl = "http://localhost:5000/api/product";

  const [searchTerm, setSearchTerm] = useState("");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(`${apiUrl}`);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        console.log("Product data:", data);
        setProducts(data); // Set the products state
      } catch (error) {
        console.error("Error fetching products:", error);
        setError(error.message); // Set error message
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleProductClick = (id) => {
    navigate(`/product/${id}`);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Filter products based on search term
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Loading message
  if (loading) {
    return <div>Loading products...</div>;
  }

  // Error message
  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="product-container">
      <h1 className="product-h1">OUR COLLECTION</h1>

      <div className="search-container">
        <input
          type="text"
          placeholder="Search for products..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="search-input"
        />
      </div>

      <div className="product-images">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div key={product.id} className="product-item">
              <img
                src={product.image || "https://via.placeholder.com/150"}
                alt={product.name}
                onClick={() => handleProductClick(product.id)}
              />
              <p>{product.name}</p>
              <p>Rs: {product.price}</p>
              <div className="product-buttons">
                <button onClick={() => addToCart(product)}>Add To Cart</button>
                <button onClick={() => addToWishlist(product)}>
                  Add To Wishlist
                </button>
              </div>
            </div>
          ))
        ) : (
          <p>No products found.</p>
        )}
      </div>
    </div>
  );
}

export default Product;
