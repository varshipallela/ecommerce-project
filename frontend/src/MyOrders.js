import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function MyOrders({ user }) {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!user) return;

    const fetchOrders = async () => {
      try {
        const { data } = await axios.get(
          "http://localhost:5000/api/orders/myorders",
          {
            headers: {
              Authorization: `Bearer ${user.token}`,
            },
          }
        );
        setOrders(data);
        setLoading(false);
      } catch (err) {
        setError(err.response?.data?.message || "Failed to fetch orders");
        setLoading(false);
      }
    };

    fetchOrders();
  }, [user]);

  if (!user) return <h2>Please login to view your orders</h2>;
  if (loading) return <h2>Loading orders...</h2>;
  if (error) return <h2 style={{ color: "red" }}>{error}</h2>;
  if (orders.length === 0) return <h2>No orders found</h2>;

  return (
    <div className="orders-container">
      <h2>My Orders</h2>
      {orders.map((order) => (
        <div className="order-card" key={order._id}>
          <h3>Order ID: {order._id}</h3>
          <p>Total Price: ₹{order.totalPrice}</p>
          <p>Status: {order.isDelivered ? "Delivered" : "Pending"}</p>
          <p>Items:</p>
          <ul>
            {order.orderItems.map((item, idx) => (
              <li key={idx}>
                {item.name} - Qty: {item.qty} - Price: ₹{item.price}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default MyOrders;
