// // import React from "react";
// // import { useNavigate } from "react-router-dom";

// // function Checkout({ cart }) {
// //   const total = cart.reduce((sum, item) => sum + item.price, 0);
// //   const navigate = useNavigate();

// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     alert("Order placed successfully!");
// //     navigate("/");             // Go back to home page
// //     window.location.reload();  // Clear cart
// //   };

// //   return (
// //     <div style={{ padding: "20px" }}>
// //       <h1>Checkout</h1>
// //       <h3>Total Amount: ₹ {total}</h3>

// //       <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "10px", width: "300px" }}>
// //         <input type="text" placeholder="Full Name" required />
// //         <input type="email" placeholder="Email" required />
// //         <input type="text" placeholder="Address" required />
// //         <button type="submit">Place Order</button>
// //       </form>
// //     </div>
// //   );
// // }

// // export default Checkout;
// import React from "react";
// import { useNavigate } from "react-router-dom";

// function Checkout({ cart, user, setCart, setLastOrder }) {
//   const navigate = useNavigate();
//   const total = cart.reduce((sum, item) => sum + item.price, 0);

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (cart.length === 0) {
//       alert("Cart is empty!");
//       return;
//     }

//     // Create order object
//     const newOrder = { 
//       items: cart, 
//       total, 
//       date: new Date().toISOString(),
//       user: user?.name || "Guest" 
//     };

//     console.log("Saving order:", newOrder); // Debug log

//     // ✅ Update state (this will trigger localStorage save in App.js)
//     setLastOrder(newOrder);

//     // Clear cart
//     setCart([]);

//     alert("✅ Order placed successfully!");
//     navigate("/cart"); // redirect to cart page to see last order
//   };

//   return (
//     <div className="checkout-container" style={{ padding: "20px", maxWidth: "600px", margin: "0 auto" }}>
//       <h1>Checkout</h1>
      
//       <div className="order-summary" style={{ 
//         background: "#f8f9fa", 
//         padding: "15px", 
//         borderRadius: "8px",
//         marginBottom: "20px" 
//       }}>
//         <h3>Order Summary</h3>
//         <ul style={{ listStyle: "none", padding: 0 }}>
//           {cart.map((item, idx) => (
//             <li key={idx} style={{ 
//               display: "flex", 
//               justifyContent: "space-between",
//               padding: "8px 0",
//               borderBottom: "1px solid #dee2e6"
//             }}>
//               <span>{item.name}</span>
//               <span>₹ {item.price}</span>
//             </li>
//           ))}
//         </ul>
//         <h3 style={{ 
//           marginTop: "15px", 
//           paddingTop: "15px", 
//           borderTop: "2px solid #333" 
//         }}>
//           Total Amount: ₹ {total}
//         </h3>
//       </div>

//       <form
//         onSubmit={handleSubmit}
//         style={{ 
//           display: "flex", 
//           flexDirection: "column", 
//           gap: "15px"
//         }}
//       >
//         <input 
//           type="text" 
//           placeholder="Full Name" 
//           defaultValue={user?.name || ""} 
//           required 
//           style={{
//             padding: "10px",
//             borderRadius: "4px",
//             border: "1px solid #ccc"
//           }}
//         />
//         <input 
//           type="email" 
//           placeholder="Email" 
//           defaultValue={user?.email || ""} 
//           required 
//           style={{
//             padding: "10px",
//             borderRadius: "4px",
//             border: "1px solid #ccc"
//           }}
//         />
//         <input 
//           type="text" 
//           placeholder="Address" 
//           required 
//           style={{
//             padding: "10px",
//             borderRadius: "4px",
//             border: "1px solid #ccc"
//           }}
//         />
//         <input 
//           type="tel" 
//           placeholder="Phone Number" 
//           required 
//           style={{
//             padding: "10px",
//             borderRadius: "4px",
//             border: "1px solid #ccc"
//           }}
//         />
//         <button 
//           type="submit"
//           style={{
//             padding: "12px",
//             background: "#3498db",
//             color: "white",
//             border: "none",
//             borderRadius: "6px",
//             fontSize: "16px",
//             fontWeight: "600",
//             cursor: "pointer"
//           }}
//         >
//           Place Order
//         </button>
//       </form>
//     </div>
//   );
// }

// export default Checkout;
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaHeart, FaTrash, FaMinus, FaPlus } from "react-icons/fa";
import "./App.css";

function Checkout({ cart, user, setCart, setLastOrder, addToWishlist }) {
  const navigate = useNavigate();
  const [shippingInfo, setShippingInfo] = useState({
    fullName: user?.name || "",
    email: user?.email || "",
    phone: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
  });

  // Calculate total
  const calculateTotal = () => {
    return cart.reduce((sum, item) => sum + (item.price * (item.quantity || 1)), 0);
  };

  const total = calculateTotal();
  const deliveryCharge = total > 1000 ? 0 : 50;
  const grandTotal = total + deliveryCharge;

  // Update quantity
  const updateQuantity = (index, change) => {
    const updatedCart = [...cart];
    const newQuantity = (updatedCart[index].quantity || 1) + change;
    
    if (newQuantity > 0 && newQuantity <= 10) {
      updatedCart[index].quantity = newQuantity;
      setCart(updatedCart);
    }
  };

  // Update size
  const updateSize = (index, size) => {
    const updatedCart = [...cart];
    updatedCart[index].selectedSize = size;
    setCart(updatedCart);
  };

  // Remove item from cart
  const removeFromCart = (index) => {
    const updatedCart = cart.filter((_, i) => i !== index);
    setCart(updatedCart);
  };

  // Move to wishlist
  const moveToWishlist = (index) => {
    const item = cart[index];
    addToWishlist(item);
    removeFromCart(index);
    alert(`${item.name} moved to wishlist!`);
  };

  // Handle input change
  const handleInputChange = (e) => {
    setShippingInfo({
      ...shippingInfo,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    if (cart.length === 0) {
      alert("Cart is empty!");
      return;
    }

    // Check if all items have size selected (if applicable)
    const missingSize = cart.some(item => 
      ["Women", "Men", "Kids"].includes(item.category) && !item.selectedSize
    );

    if (missingSize) {
      alert("Please select size for all clothing items!");
      return;
    }

    // Create order object
    const newOrder = {
      items: cart.map(item => ({
        ...item,
        quantity: item.quantity || 1,
        selectedSize: item.selectedSize || "N/A"
      })),
      total: grandTotal,
      date: new Date().toISOString(),
      user: user?.name || "Guest",
      shippingInfo,
    };

    console.log("Order placed:", newOrder);

    // Save order
    setLastOrder(newOrder);

    // Clear cart
    setCart([]);

    alert("✅ Order placed successfully!");
    navigate("/cart");
  };

  const availableSizes = ["XS", "S", "M", "L", "XL", "XXL"];

  return (
    <div className="checkout-page">
      <div className="checkout-container">
        {/* Left Side - Cart Items */}
        <div className="checkout-left">
          <h2>Shopping Bag ({cart.length} {cart.length === 1 ? 'item' : 'items'})</h2>

          {cart.length === 0 ? (
            <div className="empty-cart-checkout">
              <p>Your cart is empty!</p>
              <button onClick={() => navigate("/products")} className="btn-shop">
                Continue Shopping
              </button>
            </div>
          ) : (
            <div className="cart-items-list">
              {cart.map((item, index) => (
                <div key={index} className="checkout-item-card">
                  {/* Product Image */}
                  <div className="checkout-item-image">
                    <img src={item.image} alt={item.name} />
                  </div>

                  {/* Product Details */}
                  <div className="checkout-item-details">
                    <h3>{item.name}</h3>
                    <p className="item-description">{item.description}</p>
                    
                    {/* Size Selection - Only for clothing */}
                    {["Women", "Men", "Kids"].includes(item.category) && (
                      <div className="size-selector">
                        <label>Size:</label>
                        <div className="size-buttons">
                          {availableSizes.map((size) => (
                            <button
                              key={size}
                              className={`size-btn ${item.selectedSize === size ? 'selected' : ''}`}
                              onClick={() => updateSize(index, size)}
                            >
                              {size}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Quantity Controls */}
                    <div className="quantity-controls">
                      <label>Qty:</label>
                      <div className="qty-buttons">
                        <button 
                          onClick={() => updateQuantity(index, -1)}
                          disabled={(item.quantity || 1) <= 1}
                        >
                          <FaMinus />
                        </button>
                        <span className="qty-display">{item.quantity || 1}</span>
                        <button 
                          onClick={() => updateQuantity(index, 1)}
                          disabled={(item.quantity || 1) >= 10}
                        >
                          <FaPlus />
                        </button>
                      </div>
                    </div>

                    {/* Price */}
                    <div className="item-price">
                      <span className="price-label">Price:</span>
                      <span className="price-value">₹ {item.price * (item.quantity || 1)}</span>
                    </div>

                    {/* Action Buttons */}
                    <div className="item-actions">
                      <button 
                        className="btn-wishlist"
                        onClick={() => moveToWishlist(index)}
                        title="Move to Wishlist"
                      >
                        <FaHeart /> Move to Wishlist
                      </button>
                      <button 
                        className="btn-remove"
                        onClick={() => removeFromCart(index)}
                        title="Remove"
                      >
                        <FaTrash /> Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Right Side - Order Summary & Shipping */}
        <div className="checkout-right">
          {/* Order Summary */}
          <div className="order-summary-box">
            <h3>Price Details</h3>
            <div className="summary-row">
              <span>Total MRP</span>
              <span>₹ {total}</span>
            </div>
            <div className="summary-row">
              <span>Delivery Charge</span>
              <span className={deliveryCharge === 0 ? 'free' : ''}>
                {deliveryCharge === 0 ? 'FREE' : `₹ ${deliveryCharge}`}
              </span>
            </div>
            {total > 0 && total < 1000 && (
              <p className="free-delivery-msg">
                Add ₹ {1000 - total} more for FREE delivery!
              </p>
            )}
            <hr />
            <div className="summary-row total">
              <span>Total Amount</span>
              <span>₹ {grandTotal}</span>
            </div>
          </div>

          {/* Shipping Form */}
          {cart.length > 0 && (
            <div className="shipping-form-box">
              <h3>Delivery Address</h3>
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="fullName"
                  placeholder="Full Name *"
                  value={shippingInfo.fullName}
                  onChange={handleInputChange}
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email *"
                  value={shippingInfo.email}
                  onChange={handleInputChange}
                  required
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number *"
                  value={shippingInfo.phone}
                  onChange={handleInputChange}
                  required
                  pattern="[0-9]{10}"
                  title="Please enter 10 digit phone number"
                />
                <textarea
                  name="address"
                  placeholder="Address *"
                  value={shippingInfo.address}
                  onChange={handleInputChange}
                  required
                  rows="3"
                />
                <div className="form-row">
                  <input
                    type="text"
                    name="city"
                    placeholder="City *"
                    value={shippingInfo.city}
                    onChange={handleInputChange}
                    required
                  />
                  <input
                    type="text"
                    name="state"
                    placeholder="State *"
                    value={shippingInfo.state}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <input
                  type="text"
                  name="pincode"
                  placeholder="Pincode *"
                  value={shippingInfo.pincode}
                  onChange={handleInputChange}
                  required
                  pattern="[0-9]{6}"
                  title="Please enter 6 digit pincode"
                />
                
                <button type="submit" className="btn-place-order">
                  PLACE ORDER
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Checkout;