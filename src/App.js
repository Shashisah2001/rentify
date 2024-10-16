import React, { useContext } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { GlobalContext } from "./Context/GlobalContext";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Component/Login/Login";
import Signup from "./Component/Signup/Signup";
import Navbar from "./Component/Navbar/Navbar";
import HomePage from "./Component/HomePage/HomePage";
import About from "./Component/About/About";
import Product from "./Component/Product/Product";
import NotFound from "./Component/NotFound/NotFound";
import Footer from "./Component/Footer/Footer";
import Category from "./Component/Category/Category";
import AddToCart from "./Component/AddToCart/AddToCart";
import AddToWishlist from "./Component/AddToWishlist/AddToWishlist";
import MenCategory from "./Component/MenCategory/MenCategory";
import WomenCategory from "./Component/WomenCategory/WomenCategory";
import KidsCategory from "./Component/KidsCategory/KidsCategory";
import JewellaryCategory from "./Component/JewellaryCategory/JewellaryCategory";
import Profile from "./Component/Profile/Profile";
import DetailPage from "./Component/DetailPage/DetailPage";
import CategoryDetailPage from "./Component/CategoryDetailPage/CategoryDetailPage";
import ContactUs from "./Component/ContactUs/ContactUs";
import Payment from "./Component/Payment/Payment";

function App() {
  const { user } = useContext(GlobalContext);
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/profile" element={<Profile user={user} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/product" element={<Product />} />
          <Route path="/product/:id" element={<DetailPage />} />
          <Route path="/category" element={<Category />} />
          <Route path="/category/:id" element={<CategoryDetailPage />} />
          <Route path="/category/men" element={<MenCategory />} />
          <Route path="/category/women" element={<WomenCategory />} />
          <Route path="/category/kids" element={<KidsCategory />} />
          <Route path="/category/jewellary" element={<JewellaryCategory />} />
          <Route path="/cart" element={<AddToCart />} />
          <Route path="/wishlist" element={<AddToWishlist />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
