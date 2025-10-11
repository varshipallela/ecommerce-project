import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./App.css"; // Keep your styling

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // ✅ Backend API Base URL (uses .env variable if available)
 

    const API_BASE_URL = "https://ecommerce-backen-y6qo.onrender.com";

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post(`${API_BASE_URL}/api/users/register`, {
        name,
        email,
        password,
      });

      if (data) {
        alert("✅ Registered Successfully!");
        navigate("/login");
      }
    } catch (err) {
      console.error("Registration Error:", err);
      alert(err.response?.data?.message || "❌ Registration failed!");
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Register</h2>
        <form onSubmit={handleSubmit} className="auth-form">
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <input
            type="email"
            placeholder="Email Address"
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

          <button type="submit" className="btn-primary">
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;
