import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [user, setUser] = useState(() => {
    const storedUserData = localStorage.getItem("userData");
    if (storedUserData && storedUserData !== "undefined") {
      try {
        return JSON.parse(storedUserData);
      } catch (error) {
        console.error("Error parsing userData from localStorage:", error);
        return null;
      }
    }
    return null;
  });
  const [products, setProducts] = useState([]);

  const apiUrl = "http://localhost:5000/api";

  // Helper function to get the token
  const getToken = () => localStorage.getItem("token");

  useEffect(() => {
    const fetchUserData = async () => {
      const token = getToken();
      if (!token) return;

      try {
        const response = await axios.get(`${apiUrl}/user/profile`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setUser(response.data);
        localStorage.setItem("userData", JSON.stringify(response.data));
      } catch (error) {
        console.error(
          "Failed to fetch user data:",
          error.response?.data?.message || error.message
        );
      }
    };

    const fetchProducts = async () => {
      try {
        const response = await axios.get(`${apiUrl}/product`);
        setProducts(response.data);
      } catch (error) {
        console.error(
          "Failed to fetch products:",
          error.response?.data?.message || error.message
        );
      }
    };

    fetchUserData();
    fetchProducts();
  }, [apiUrl]);

  const addToCart = async (product) => {
    try {
      const response = await axios.post(
        `${apiUrl}/cart/add`,
        { productId: product.id },
        {
          headers: { Authorization: `Bearer ${getToken()}` },
        }
      );
      setCart((prevCart) => [...prevCart, response.data]);
    } catch (error) {
      console.error(
        "Failed to add to cart:",
        error.response?.data?.message || error.message
      );
    }
  };

  const addToWishlist = async (product) => {
    try {
      const response = await axios.post(
        `${apiUrl}/wishlist/add`,
        { productId: product.id },
        {
          headers: { Authorization: `Bearer ${getToken()}` },
        }
      );
      setWishlist((prevWishlist) => [...prevWishlist, response.data]);
    } catch (error) {
      console.error(
        "Failed to add to wishlist:",
        error.response?.data?.message || error.message
      );
    }
  };

  const logoutUser = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userData");
    setUser(null);
    setCart([]);
    setWishlist([]);
  };

  return (
    <GlobalContext.Provider
      value={{
        cart,
        wishlist,
        user,
        products,
        addToCart,
        addToWishlist,
        logoutUser,
        setUser, // Expose setUser to allow updating user from other component.
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
