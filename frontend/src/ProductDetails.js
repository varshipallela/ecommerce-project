
// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import axios from "axios";
// import { FaHeart, FaShoppingCart } from "react-icons/fa";
// import "./App.css";

// function ProductDetails() {
//   const { id } = useParams();
//   const [product, setProduct] = useState(null);
//   const [size, setSize] = useState("");
//   const [quantity, setQuantity] = useState(1);
//   const [wishlist, setWishlist] = useState(false);

//   useEffect(() => {
//     axios
//       .get(`http://localhost:5000/api/products/${id}`)
//       .then((res) => setProduct(res.data))
//       .catch((err) => console.log(err));
//   }, [id]);

//   const handleAddToCart = () => {
//     alert(`${product.name} added to cart (Size: ${size}, Qty: ${quantity})`);
//   };

//   const toggleWishlist = () => {
//     setWishlist(!wishlist);
//   };

//   if (!product) return <p>Loading product details...</p>;

//   return (
//     <div className="product-details">
//       {/* Left: Image */}
//       <div className="product-image">
//         <img src={product.image} alt={product.name} />
//       </div>

//       {/* Right: Info */}
//       <div className="product-info">
//         <h2>{product.name}</h2>
//         <p className="product-description">{product.description}</p>
//         <h3 className="product-price">₹{product.price}</h3>

//         {/* Sizes */}
//         <div className="product-sizes">
//           <p>Select Size:</p>
//           {["S", "M", "L", "XL"].map((s) => (
//             <button
//               key={s}
//               className={`size-btn ${size === s ? "active" : ""}`}
//               onClick={() => setSize(s)}
//             >
//               {s}
//             </button>
//           ))}
//         </div>

//         {/* Quantity */}
//         <div className="product-quantity">
//           <p>Quantity:</p>
//           <input
//             type="number"
//             min="1"
//             value={quantity}
//             onChange={(e) => setQuantity(e.target.value)}
//           />
//         </div>

//         {/* Buttons */}
//         <div className="product-actions">
//           <button className="wishlist-btn" onClick={toggleWishlist}>
//             <FaHeart color={wishlist ? "red" : "black"} /> Wishlist
//           </button>
//           <button className="cart-btn" onClick={handleAddToCart}>
//             <FaShoppingCart /> Add to Cart
//           </button>
//         </div>

//         {/* Product Details */}
//         <div className="product-extra">
//           <h4>Product Details</h4>
//           <ul>
//             <li>Material: 100% Cotton</li>
//             <li>Care: Machine Wash</li>
//             <li>Fit: Regular</li>
//             <li>Delivery: Free Delivery in 5-7 days</li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ProductDetails;
// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import axios from "axios";
// import { FaHeart, FaShoppingCart } from "react-icons/fa";
// import "./App.css";

// function ProductDetails({ addToCart, addToWishlist }) {
//   const { id } = useParams();
//   const [product, setProduct] = useState(null);
//   const [size, setSize] = useState("");
//   const [quantity, setQuantity] = useState(1);
//   const [wishlist, setWishlist] = useState(false);

//   useEffect(() => {
//     axios
//       .get(`http://localhost:5000/api/products/${id}`)
//       .then((res) => setProduct(res.data))
//       .catch((err) => console.log(err));
//   }, [id]);

//   const brandAndTitle = (p) => {
//     if (!p) return { brand: "", title: "" };
//     const brand = p.brand || (p.name ? p.name.split(" ")[0] : "");
//     const title =
//       p.title ||
//       (p.name ? p.name.replace(new RegExp(`^${brand}\\s*`, "i"), "").trim() : "");
//     return { brand: brand || p.name || "Brand", title: title || p.name || "" };
//   };

//   const handleAddToCart = () => {
//     if (!size) {
//       alert("Please select a size");
//       return;
//     }
//     if (addToCart) addToCart(product, size, quantity);
//     alert(`${product.name} added to cart (Size: ${size}, Qty: ${quantity})`);
//   };

//   const toggleWishlist = () => {
//     setWishlist(!wishlist);
//     if (addToWishlist) addToWishlist(product);
//   };

//   if (!product) return <p>Loading product details...</p>;

//   const { brand, title } = brandAndTitle(product);

//   return (
//     <div className="product-details">
//       {/* Left: Image */}
//       <div className="product-image">
//         <img
//           src={product.image || "/assets/images/fallback.webp"}
//           alt={product.name}
//           onError={(e) => {
//             e.currentTarget.src = "/assets/images/fallback.webp";
//           }}
//         />
//       </div>

//       {/* Right: Info */}
//       <div className="product-info">
//         {/* Brand + Title */}
//         <h2 className="product-brand">{brand}</h2>
//         {title && <h3 className="product-title">{title}</h3>}

//         <p className="product-description">{product.description}</p>
//         <h3 className="product-price">₹{product.price}</h3>

//         {/* Sizes */}
//         <div className="product-sizes">
//           <p>Select Size:</p>
//           {["S", "M", "L", "XL"].map((s) => (
//             <button
//               key={s}
//               className={`size-btn ${size === s ? "active" : ""}`}
//               onClick={() => setSize(s)}
//             >
//               {s}
//             </button>
//           ))}
//         </div>

//         {/* Quantity */}
//         <div className="product-quantity">
//           <p>Quantity:</p>
//           <input
//             type="number"
//             min="1"
//             value={quantity}
//             onChange={(e) => setQuantity(Number(e.target.value))}
//           />
//         </div>

//         {/* Wishlist + Cart Icons */}
//         <div className="product-bottom-row">
//           <button
//             className="icon-btn-plain"
//             title="Add to Wishlist"
//             onClick={toggleWishlist}
//           >
//             <FaHeart color={wishlist ? "red" : "black"} />
//           </button>

//           <div className="product-price-big">₹ {product.price}</div>

//           <button
//             className="icon-btn-plain"
//             title="Add to Cart"
//             onClick={handleAddToCart}
//           >
//             <FaShoppingCart />
//           </button>
//         </div>

//         {/* Extra details */}
//         <div className="product-extra">
//           <h4>Product Details</h4>
//           <ul>
//             <li>Material: 100% Cotton</li>
//             <li>Care: Machine Wash</li>
//             <li>Fit: Regular</li>
//             <li>Delivery: Free Delivery in 5-7 days</li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ProductDetails;
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import "./App.css";

function ProductDetails({ addToCart, addToWishlist }) {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [size, setSize] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [wishlist, setWishlist] = useState(false);

  useEffect(() => {
  axios
    .get(`https://ecommerce-backen-y6qo.onrender.com/api/products/${id}`)
    .then((res) => setProduct(res.data))
    .catch((err) => console.error("Error fetching product:", err));
}, [id]);

  const brandAndTitle = (p) => {
    if (!p) return { brand: "", title: "" };
    const brand = p.brand || (p.name ? p.name.split(" ")[0] : "");
    const title =
      p.title ||
      (p.name ? p.name.replace(new RegExp(`^${brand}\\s*`, "i"), "").trim() : "");
    return { brand: brand || p.name || "Brand", title: title || p.name || "" };
  };

  const handleAddToCart = () => {
    if (!size) {
      alert("Please select a size");
      return;
    }
    if (addToCart) addToCart(product, size, quantity);
    alert(`${product.name} added to cart (Size: ${size}, Qty: ${quantity})`);
  };

  const toggleWishlist = () => {
    setWishlist(!wishlist);
    if (addToWishlist) addToWishlist(product);
  };

  if (!product) return <p>Loading product details...</p>;

  const { brand, title } = brandAndTitle(product);

  return (
    <div className="product-details">
      {/* Left: Image */}
      <div className="product-image">
        <img
          src={
            product.image
              ? product.image
              : "/assets/images/fallback.webp"
          }
          alt={product.name}
          onError={(e) => {
            e.currentTarget.src = "/assets/images/fallback.webp";
          }}
        />
      </div>

      {/* Right: Info */}
      <div className="product-info">
        <h2 className="product-brand">{brand}</h2>
        {title && <h3 className="product-title">{title}</h3>}

        <p className="product-description">{product.description}</p>
        <h3 className="product-price">₹{product.price}</h3>

        {/* Sizes */}
        <div className="product-sizes">
          <p>Select Size:</p>
          {["S", "M", "L", "XL"].map((s) => (
            <button
              key={s}
              className={`size-btn ${size === s ? "active" : ""}`}
              onClick={() => setSize(s)}
            >
              {s}
            </button>
          ))}
        </div>

        {/* Quantity */}
        <div className="product-quantity">
          <p>Quantity:</p>
          <input
            type="number"
            min="1"
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
          />
        </div>

        {/* Wishlist + Cart */}
        <div className="product-bottom-row">
          <button
            className="icon-btn-plain"
            title="Add to Wishlist"
            onClick={toggleWishlist}
          >
            <FaHeart color={wishlist ? "red" : "black"} />
          </button>

          <div className="product-price-big">₹ {product.price}</div>

          <button
            className="icon-btn-plain"
            title="Add to Cart"
            onClick={handleAddToCart}
          >
            <FaShoppingCart />
          </button>
        </div>

        {/* Extra details */}
        <div className="product-extra">
          <h4>Product Details</h4>
          <ul>
            <li>Material: 100% Cotton</li>
            <li>Care: Machine Wash</li>
            <li>Fit: Regular</li>
            <li>Delivery: Free Delivery in 5-7 days</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
