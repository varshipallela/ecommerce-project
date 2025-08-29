import React from "react";
import "./App.css"; // Ensure App.css has the styles

function Cart({ cart, setCart }) {
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  const removeFromCart = (indexToRemove) => {
    const updatedCart = cart.filter((_, index) => index !== indexToRemove);
    setCart(updatedCart);
  };

  return (
    <div className="cart-container">
      <h1>Your Cart</h1>
      {cart.length === 0 ? (
        <p className="empty-cart">No items in cart.</p>
      ) : (
        <div className="cart-items">
          {cart.map((item, index) => (
            <div key={index} className="cart-item-card">
              <div className="cart-item-info">
                <h3>{item.name}</h3>
                <p className="cart-item-price">₹ {item.price}</p>
              </div>
              <button
                className="btn-remove"
                onClick={() => removeFromCart(index)}
              >
                Remove
              </button>
            </div>
          ))}
          <div className="cart-total">
            <h2>Total: ₹ {total}</h2>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
