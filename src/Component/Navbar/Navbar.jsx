import React, { useState, useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Navbar.scss";
import userImage from "../assets/images/login01.png";
import searchImage from "../assets/images/search-icon.png";
import favouriteImage from "../assets/images/favourite.png";
import cartImage from "../assets/images/cart02.png";
import hamburgerImage from "../assets/images/hamburger02.png";
import logoImage from "../assets/images/logo.jpg";
import { GlobalContext } from "../../Context/GlobalContext";

function Navbar() {
  const {
    cart = [],
    wishlist = [],
    user,
    products,
    logoutUser,
  } = useContext(GlobalContext);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);
  const [isCategoryDropdownOpen, setIsCategoryDropdownOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const handleUserIconClick = () => setIsUserDropdownOpen(!isUserDropdownOpen);

  const handleSearch = () => {
    const searchResults = products.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    navigate("/search", { state: { searchResults } });
  };

  const toggleCategoryDropdown = () =>
    setIsCategoryDropdownOpen(!isCategoryDropdownOpen);

  const handleLogout = () => {
    logoutUser();
    navigate("/login");
  };

  const handleCategoryClick = (category) => {
    navigate(`/category/${category}`);
    setIsCategoryDropdownOpen(false);
  };

  return (
    <div className="navbar-container">
      <div className="logo" onClick={() => navigate("/")}>
        <img className="logo-img" src={logoImage} alt="logo" />
      </div>
      <div className={`nav-content ${isMobileMenuOpen ? "open-slider" : ""}`}>
        <ul className="nav-links">
          {["home", "product"].map((item) => (
            <li key={item}>
              <Link
                to={`/${item}`}
                className={location.pathname === `/${item}` ? "active" : ""}
              >
                {item.toUpperCase()}
              </Link>
            </li>
          ))}
          <li className="dropdown-trigger">
            <Link
              to="/category"
              onClick={toggleCategoryDropdown}
              className={
                location.pathname.startsWith("/category") ? "active" : ""
              }
            >
              CATEGORY
            </Link>
            {isCategoryDropdownOpen && (
              <ul className="dropdown">
                {["men", "women", "kids", "jewellary"].map((category) => (
                  <li key={category}>
                    <Link
                      to={`/category/${category}`}
                      onClick={() => handleCategoryClick(category)}
                      className={
                        location.pathname === `/category/${category}`
                          ? "active"
                          : ""
                      }
                    >
                      {category.toUpperCase()}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
          <li>
            <Link
              to="/about"
              className={location.pathname === "/about" ? "active" : ""}
            >
              ABOUT
            </Link>
          </li>
        </ul>
        <div className="search-container">
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <img
            className="search-img"
            src={searchImage}
            alt="search"
            onClick={handleSearch}
          />
        </div>
        <div className="dropdown-1">
          <li>
            <Link to="/wishlist">
              <img
                className="favourite-img"
                src={favouriteImage}
                alt="wishlist"
              />
              <span className="item-count">{wishlist?.length || 0}</span>{" "}
            </Link>
          </li>
          <li>
            <Link to="/cart">
              <img className="cart-img" src={cartImage} alt="cart" />
              <span className="item-count">{cart?.length || 0}</span>{" "}
            </Link>
          </li>
          <li onClick={handleUserIconClick}>
            <img className="account-img" src={userImage} alt="account" />
          </li>
          {isUserDropdownOpen && (
            <div className="user-dropdown">
              {user ? (
                <>
                  <div
                    className="dropdown-item"
                    onClick={() => navigate("/profile")}
                  >
                    Profile
                  </div>
                  <div className="dropdown-item">Username: {user.username}</div>
                  <div className="dropdown-item">Email: {user.email}</div>
                  <div
                    className="dropdown-item"
                    onClick={() => navigate("/wishlist")}
                  >
                    Wishlist
                  </div>
                  <div
                    className="dropdown-item"
                    onClick={() => navigate("/cart")}
                  >
                    Cart
                  </div>
                  <div className="dropdown-item" onClick={handleLogout}>
                    Logout
                  </div>
                </>
              ) : (
                <>
                  <div
                    className="dropdown-item"
                    onClick={() => navigate("/signup")}
                  >
                    Register
                  </div>
                  <div
                    className="dropdown-item"
                    onClick={() => navigate("/login")}
                  >
                    Login
                  </div>
                  <div
                    className="dropdown-item"
                    onClick={() => navigate("/profile")}
                  >
                    Profile
                  </div>
                </>
              )}
            </div>
          )}
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className="close-slider" onClick={toggleMobileMenu}>
          <img className="arrow-img" src={hamburgerImage} alt="Close Menu" />
        </div>
      )}
    </div>
  );
}

export default Navbar;
