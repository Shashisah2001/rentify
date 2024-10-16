import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./Signup.scss";

function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [modalMessage, setModalMessage] = useState("");
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const apiUrl = "http://localhost:5000/api";

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${apiUrl}/auth/register`, {
        username,
        email,
        password,
        address,
        name,
        gender,
      });

      const { token, user } = response.data;
      console.log("user", user);
      localStorage.setItem("token", token);
      localStorage.setItem("userData", JSON.stringify(user));

      setModalMessage("Registration successful! Redirecting to login...");
      setShowModal(true);
      setTimeout(() => {
        navigate("/login");
      }, 1000);
    } catch (error) {
      const errorMsg =
        error.response?.data?.msg || "Something went wrong. Please try again!";
      console.log("Error:", errorMsg);
      setModalMessage(errorMsg);
      setShowModal(true);
    }
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="signup-container">
      <div className="signup-left">
        <h2>Welcome to Our Platform!</h2>
        <h3>Looks like you're new here!</h3>
        <p>Sign up with your details to get started.</p>
      </div>
      <div className="signup-right">
        <form onSubmit={handleSignup} className="signup-form">
          <h2>Register</h2>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
          <select
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            required
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
          <button type="submit">Sign Up</button>
        </form>
        <p className="login-link">
          Already have an account? <Link to="/login">Login here</Link>
        </p>
      </div>

      {showModal && (
        <div className="modal-backdrop">
          <div className="modal">
            <p>{modalMessage}</p>
            <button onClick={closeModal}>OK</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Signup;
