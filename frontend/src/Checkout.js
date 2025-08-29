import React from "react";
import { useNavigate } from "react-router-dom";

function Checkout({ cart }) {
  const total = cart.reduce((sum, item) => sum + item.price, 0);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Order placed successfully!");
    navigate("/");             // Go back to home page
    window.location.reload();  // Clear cart
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Checkout</h1>
      <h3>Total Amount: ₹ {total}</h3>

      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "10px", width: "300px" }}>
        <input type="text" placeholder="Full Name" required />
        <input type="email" placeholder="Email" required />
        <input type="text" placeholder="Address" required />
        <button type="submit">Place Order</button>
      </form>
    </div>
  );
}

export default Checkout;
