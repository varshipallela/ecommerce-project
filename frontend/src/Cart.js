// import React from "react";
// import "./App.css"; // Ensure App.css has the styles

// function Cart({ cart, setCart }) {
//   const total = cart.reduce((sum, item) => sum + item.price, 0);

//   const removeFromCart = (indexToRemove) => {
//     const updatedCart = cart.filter((_, index) => index !== indexToRemove);
//     setCart(updatedCart);
//   };

//   return (
//     <div className="cart-container">
//       <h1>Your Cart</h1>
//       {cart.length === 0 ? (
//         <p className="empty-cart">No items in cart.</p>
//       ) : (
//         <div className="cart-items">
//           {cart.map((item, index) => (
//             <div key={index} className="cart-item-card">
//               <div className="cart-item-info">
//                 <h3>{item.name}</h3>
//                 <p className="cart-item-price">₹ {item.price}</p>
//               </div>
//               <button
//                 className="btn-remove"
//                 onClick={() => removeFromCart(index)}
//               >
//                 Remove
//               </button>
//             </div>
//           ))}
//           <div className="cart-total">
//             <h2>Total: ₹ {total}</h2>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Cart;
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";

function Cart({ cart, setCart, lastOrder }) {
  const navigate = useNavigate();

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  // Debug: Log lastOrder when it changes
  useEffect(() => {
    console.log("Cart received lastOrder:", lastOrder);
  }, [lastOrder]);

  const removeFromCart = (indexToRemove) => {
    const updatedCart = cart.filter((_, index) => index !== indexToRemove);
    setCart(updatedCart);
  };

  const proceedToCheckout = () => {
    if (cart.length === 0) {
      alert("Your cart is empty!");
      return;
    }
    navigate("/checkout");
  };

  return (
    <div className="cart-container" style={{ padding: "20px", maxWidth: "1000px", margin: "0 auto" }}>
      <h1 style={{ marginBottom: "30px" }}>Your Shopping Cart</h1>

      {cart.length === 0 ? (
        <div style={{ textAlign: "center", padding: "40px" }}>
          <p className="empty-cart" style={{ fontSize: "18px", color: "#999" }}>
            Your cart is empty.
          </p>
          <button 
            onClick={() => navigate("/products")}
            style={{
              marginTop: "20px",
              padding: "10px 20px",
              background: "#3498db",
              color: "white",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer"
            }}
          >
            Continue Shopping
          </button>
        </div>
      ) : (
        <div>
          <div className="cart-items" style={{ marginBottom: "30px" }}>
            {cart.map((item, index) => (
              <div 
                key={index} 
                className="cart-item-card"
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "15px",
                  background: "white",
                  borderRadius: "8px",
                  marginBottom: "10px",
                  boxShadow: "0 2px 4px rgba(0,0,0,0.1)"
                }}
              >
                <div>
                  <h3 style={{ margin: "0 0 5px 0" }}>{item.name}</h3>
                  <p style={{ margin: 0, fontSize: "18px", fontWeight: "600", color: "#2c3e50" }}>
                    ₹ {item.price}
                  </p>
                </div>
                <button 
                  onClick={() => removeFromCart(index)}
                  style={{
                    padding: "8px 16px",
                    background: "#e74c3c",
                    color: "white",
                    border: "none",
                    borderRadius: "4px",
                    cursor: "pointer"
                  }}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          <div style={{ 
            background: "#f8f9fa", 
            padding: "20px", 
            borderRadius: "8px",
            marginBottom: "20px"
          }}>
            <h2 style={{ margin: "0 0 10px 0" }}>
              Cart Total: ₹ {total}
            </h2>
            <button 
              onClick={proceedToCheckout}
              style={{
                width: "100%",
                padding: "12px",
                background: "#27ae60",
                color: "white",
                border: "none",
                borderRadius: "6px",
                fontSize: "16px",
                fontWeight: "600",
                cursor: "pointer"
              }}
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}

      {/* Show last placed order */}
      {lastOrder && (
        <div style={{ 
          marginTop: "40px", 
          borderTop: "2px solid #dee2e6", 
          paddingTop: "30px",
          background: "#e8f5e9",
          padding: "20px",
          borderRadius: "8px"
        }}>
          <h2 style={{ color: "#27ae60", marginBottom: "20px" }}>
            ✅ Last Placed Order
          </h2>
          
          <div style={{ background: "white", padding: "15px", borderRadius: "6px" }}>
            <h3 style={{ marginTop: 0 }}>Order Items:</h3>
            <ul style={{ listStyle: "none", padding: 0 }}>
              {lastOrder.items && lastOrder.items.map((item, idx) => (
                <li 
                  key={idx}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    padding: "8px 0",
                    borderBottom: "1px solid #eee"
                  }}
                >
                  <span>{item.name}</span>
                  <span style={{ fontWeight: "600" }}>₹ {item.price}</span>
                </li>
              ))}
            </ul>
            
            <div style={{ 
              marginTop: "15px", 
              paddingTop: "15px", 
              borderTop: "2px solid #27ae60" 
            }}>
              <p style={{ fontSize: "18px", fontWeight: "700" }}>
                <strong>Total:</strong> ₹ {lastOrder.total}
              </p>
              <p style={{ color: "#666" }}>
                <strong>Ordered by:</strong> {lastOrder.user || "Guest"}
              </p>
              <p style={{ color: "#666" }}>
                <strong>Date:</strong> {new Date(lastOrder.date).toLocaleString()}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;