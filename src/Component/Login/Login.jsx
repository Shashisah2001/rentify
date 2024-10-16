import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./Login.scss";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [modalMessage, setModalMessage] = useState("");
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const apiUrl = "http://localhost:5000/api";

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${apiUrl}/auth/login`, {
        email,
        password,
      });

      const { token, user } = response.data;
      localStorage.setItem("token", token);
      localStorage.setItem("userData", JSON.stringify(user));

      // Show success modal and navigate after a delay
      setModalMessage("Login successful! Redirecting to your profile...");
      setShowModal(true);
      setTimeout(() => {
        navigate("/");
      }, 1000);
    } catch (error) {
      const errorMsg =
        (error.response && error.response.data.msg) ||
        "Something went wrong. Please try again!";

      console.error("Error", error.response);
      console.error(error);
      setModalMessage(errorMsg);
      setShowModal(true);
    }
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="login-container">
      <div className="login-left">
        <h2>Welcome Back!</h2>
        <h3>Good to see you again!</h3>
        <p>Please log in to continue.</p>
        <p>Join us and start your journey by logging into your account.</p>
      </div>
      <div className="login-right">
        <form onSubmit={handleLogin} className="login-form">
          <h2>Login</h2>
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
          <button type="submit">Login</button>
        </form>
        <p className="signup-link">
          Don't have an account? <Link to="/signup">Register here</Link>
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

export default Login;
