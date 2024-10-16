import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import "./Profile.scss";
import { GlobalContext } from "../../Context/GlobalContext";

const Profile = () => {
  const navigate = useNavigate();
  const { user, setUser, logoutUser } = useContext(GlobalContext);

  const [profileImage, setProfileImage] = useState(user?.profileImage || null);
  const [name, setName] = useState(user?.name || "");
  const [email, setEmail] = useState(user?.email || "");
  const [address, setAddress] = useState(user?.address || "");
  const [gender, setGender] = useState(user?.gender || "");
  const [isEditing, setIsEditing] = useState(false);

  // Redirect to login if no user data is available
  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [navigate, user]);

  const handleLogout = () => {
    logoutUser();
    navigate("/login");
  };

  
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleNavigateToCart = () => {
    navigate("/cart");
  };

  const handleNavigateToWishlist = () => {
    navigate("/wishlist");
  };

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const handleSaveChanges = () => {
    const updatedUser = {
      ...user,
      name,
      email,
      address,
      gender,
      profileImage,
    };
    try {
      localStorage.setItem("userData", JSON.stringify(updatedUser));
      setUser(updatedUser); // Update the user state in GlobalContext
      setIsEditing(false); // Exit editing mode
    } catch (error) {
      console.error("Error saving user data:", error);
      // Optionally show an error message to the user
    }
  };

  return (
    <div className="profile-container">
      {user ? (
        <>
          <h2 className="profile-title">Profile</h2>
          <h4 className="profile-title">Hi {user.name || user.username}</h4>

          <div className="profile-image-container">
            <label htmlFor="profile-image" className="image-label">
              {profileImage ? (
                <img
                  src={profileImage}
                  alt="Profile"
                  className="profile-image"
                />
              ) : (
                <div className="placeholder-image">Add Image</div>
              )}
            </label>
            <input
              type="file"
              id="profile-image"
              accept="image/*"
              onChange={handleImageChange}
              className="image-input"
            />
          </div>

          <div className="profile-details">
            <div className="profile-info">
              <h3>Personal Information</h3>
              {isEditing ? (
                <div className="edit-form">
                  <label>
                    <strong>Name:</strong>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Enter your name"
                    />
                  </label>
                  <label>
                    <strong>Email:</strong>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                    />
                  </label>
                  <label>
                    <strong>Address:</strong>
                    <input
                      type="text"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      placeholder="Enter your address"
                    />
                  </label>
                  <label>
                    <strong>Gender:</strong>
                    <select
                      value={gender}
                      onChange={(e) => setGender(e.target.value)}
                    >
                      <option value="">Select Gender</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Other">Other</option>
                    </select>
                  </label>
                  <button className="save-btn" onClick={handleSaveChanges}>
                    Save Changes
                  </button>
                </div>
              ) : (
                <div>
                  <p>
                    <strong>Name:</strong> {name || "N/A"}
                  </p>
                  <p>
                    <strong>Email:</strong> {email || "N/A"}
                  </p>
                  <p>
                    <strong>Address:</strong> {address || "N/A"}
                  </p>
                  <p>
                    <strong>Gender:</strong> {gender || "N/A"}
                  </p>
                  <button className="edit-btn" onClick={handleEditToggle}>
                    Edit Profile
                  </button>
                </div>
              )}
            </div>

            <div className="profile-orders">
              <h3>Order History</h3>
              {user.orderHistory && user.orderHistory.length > 0 ? (
                <table className="orders-table">
                  <thead>
                    <tr>
                      <th>Order ID</th>
                      <th>Product</th>
                      <th>Date</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {user.orderHistory.map((order, index) => (
                      <tr key={index}>
                        <td>{order.orderId}</td>
                        <td>{order.product}</td>
                        <td>{order.date}</td>
                        <td>{order.status}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              ) : (
                <p>No order history available.</p>
              )}
            </div>

            <div className="profile-navigation">
              <button className="nav-btn" onClick={handleNavigateToCart}>
                View Cart
              </button>
              <button className="nav-btn" onClick={handleNavigateToWishlist}>
                View Wishlist
              </button>
            </div>
          </div>

          <button className="logout-btn" onClick={handleLogout}>
            Logout
          </button>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Profile;
