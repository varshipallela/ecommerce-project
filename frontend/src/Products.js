
// // import React, { useMemo, useState } from "react";
// // import axios from "axios";
// // import { useLocation } from "react-router-dom";
// // import "./App.css";

// // function useQuery() {
// //   const { search } = useLocation();
// //   return useMemo(() => new URLSearchParams(search), [search]);
// // }

// // function Products({ products = [], addToCart, addToWishlist, user }) {
// //   const [loading, setLoading] = useState(false);
// //   const query = useQuery();
// //   const category = query.get("category"); // Women | Men | Kids | Bags | null

// //   const filtered = useMemo(() => {
// //     if (!category) return products;
// //     return products.filter(
// //       (p) => (p.category || "").toLowerCase() === category.toLowerCase()
// //     );
// //   }, [products, category]);

// //   const handleBuyNow = async (product) => {
// //     if (!user) return alert("Please login first");

// //     setLoading(true);

// //     const orderData = {
// //       orderItems: [
// //         {
// //           name: product.name,
// //           qty: 1,
// //           price: product.price,
// //           product: product._id,
// //         },
// //       ],
// //       shippingAddress: {
// //         address: "123 Street",
// //         city: "City",
// //         postalCode: "12345",
// //         country: "India",
// //       },
// //       paymentMethod: "PayPal",
// //       totalPrice: product.price,
// //     };

// //     try {
// //       await axios.post("http://localhost:5000/api/orders", orderData, {
// //         headers: {
// //           Authorization: `Bearer ${user?.token}`,
// //           "Content-Type": "application/json",
// //         },
// //       });
// //       alert("Order placed successfully!");
// //     } catch (err) {
// //       alert(err.response?.data?.message || "Order failed");
// //     }

// //     setLoading(false);
// //   };

// //   if (!filtered || filtered.length === 0)
// //     return <h2>No products found</h2>;

// //   return (
// //     <div className="products-container">
// //       {filtered.map((product) => (
// //         <div className="product-card" key={product._id || product.id}>
// //           <img src={product.image} alt={product.name} className="product-image" />
// //           <h3>{product.name}</h3>
// //           <p>₹{product.price}</p>
// //           <button className="btn-primary" onClick={() => addToCart(product)}>
// //             Add to Cart
// //           </button>
// //           <button
// //             className="btn-primary"
// //             style={{ marginTop: "0.5rem", background: "#28a745" }}
// //             onClick={() => addToWishlist(product)}
// //           >
// //             Add to Wishlist
// //           </button>
// //           <button
// //             className="btn-primary"
// //             style={{ marginTop: "0.5rem", background: "#ffc107" }}
// //             onClick={() => handleBuyNow(product)}
// //             disabled={loading}
// //           >
// //             {loading ? "Processing..." : "Buy Now"}
// //           </button>
// //         </div>
// //       ))}
// //     </div>
// //   );
// // }

// // export default Products;
// // // import { useEffect, useState } from "react";
// // // import axios from "axios";
// // // import { Link } from "react-router-dom";  // ✅ import Link
// // // import "./App.css";

// // // function Products() {
// // //   const [products, setProducts] = useState([]);

// // //   useEffect(() => {
// // //     axios.get("http://localhost:5000/api/products")
// // //       .then((res) => setProducts(res.data))
// // //       .catch((err) => console.error(err));
// // //   }, []);

// // //   return (
// // //     <div className="products-container">
// // //       <h2>Shop Products</h2>
// // //       <div className="products-grid">
// // //         {products.map((p) => (
// // //           <div className="product-card" key={p._id}>
// // //             <Link to={`/products/${p._id}`}>  {/* ✅ link to ProductDetails */}
// // //               <img src={p.image} alt={p.name} />
// // //               <h3>{p.name}</h3>
// // //               <p>{p.description}</p>
// // //               <p>₹{p.price}</p>
// // //             </Link>
// // //           </div>
// // //         ))}
// // //       </div>
// // //     </div>
// // //   );
// // // }

// // // export default Products;
// // import React, { useMemo, useState } from "react";
// // import axios from "axios";
// // import { useLocation } from "react-router-dom";
// // import { FaHeart, FaShoppingCart } from "react-icons/fa";
// // import "./App.css";

// // // ✅ small helper to read query params
// // function useQuery() {
// //   const { search } = useLocation();
// //   return useMemo(() => new URLSearchParams(search), [search]);
// // }

// // function Products({ products = [], addToCart, addToWishlist, user }) {
// //   const [loading, setLoading] = useState(false);
// //   const query = useQuery();
// //   const category = query.get("category"); // Women | Men | Kids | Bags | null

// //   // ✅ filter products by category
// //   const filtered = useMemo(() => {
// //     if (!category || category === "All") return products;
// //     return products.filter(
// //       (p) => (p.category || "").toLowerCase() === category.toLowerCase()
// //     );
// //   }, [products, category]);

// //   // ✅ split brand and title for nicer display
// //   const brandAndTitle = (p) => {
// //     const brand = p.brand || (p.name ? p.name.split(" ")[0] : "");
// //     const title =
// //       p.title ||
// //       (p.name
// //         ? p.name.replace(new RegExp(`^${brand}\\s*`, "i"), "").trim()
// //         : "");
// //     return { brand: brand || p.name || "Brand", title: title || p.name || "" };
// //   };

// //   // ✅ handle Buy Now (place order immediately)
// //   const handleBuyNow = async (product) => {
// //     if (!user) return alert("Please login first");

// //     setLoading(true);

// //     const orderData = {
// //       orderItems: [
// //         {
// //           name: product.name,
// //           qty: 1,
// //           price: product.price,
// //           product: product._id,
// //         },
// //       ],
// //       shippingAddress: {
// //         address: "123 Street",
// //         city: "City",
// //         postalCode: "12345",
// //         country: "India",
// //       },
// //       paymentMethod: "PayPal",
// //       totalPrice: product.price,
// //     };

// //     try {
// //       await axios.post("http://localhost:5000/api/orders", orderData, {
// //         headers: {
// //           Authorization: `Bearer ${user?.token}`,
// //           "Content-Type": "application/json",
// //         },
// //       });
// //       alert("Order placed successfully!");
// //     } catch (err) {
// //       alert(err.response?.data?.message || "Order failed");
// //     }

// //     setLoading(false);
// //   };

// //   if (!filtered || filtered.length === 0) {
// //     return <h2 className="empty-note">No products found</h2>;
// //   }

// //   return (
// //     <div className="products-page">
// //       {/* Heading */}
// //       <h2 className="category-heading">
// //         {category && category !== "All"
// //           ? `SHOP ${category.toUpperCase()}`
// //           : "ALL PRODUCTS"}
// //       </h2>

// //       {/* Product Grid */}
// //       <div className="product-grid">
// //         {filtered.map((p) => {
// //           const { brand, title } = brandAndTitle(p);

// //           return (
// //             <div className="product-card v2" key={p._id || p.id}>
// //               {/* Product Image */}
// //               <div className="product-img-block">
// //                 <img
// //                   src={p.image}
// //                   alt={p.name || brand}
// //                   loading="lazy"
// //                   onError={(e) => {
// //                     e.currentTarget.src = "/assets/images/fallback.webp";
// //                   }}
// //                 />
// //               </div>

// //               {/* Brand + Title */}
// //               <div className="product-meta">
// //                 <h4 className="product-brand">{brand}</h4>
// //                 {title && <p className="product-title">{title}</p>}
// //               </div>

// //               {/* Wishlist + Price + Cart */}
// //               <div className="product-bottom-row">
// //                 <button
// //                   className="icon-btn-plain"
// //                   title="Add to Wishlist"
// //                   onClick={() => addToWishlist && addToWishlist(p)}
// //                 >
// //                   <FaHeart />
// //                 </button>

// //                 <div className="product-price-big">₹ {p.price}</div>

// //                 <button
// //                   className="icon-btn-plain"
// //                   title="Add to Cart"
// //                   onClick={() => addToCart && addToCart(p)}
// //                 >
// //                   <FaShoppingCart />
// //                 </button>
// //               </div>

// //               {/* Buy Now button */}
// //               <button
// //                 className="btn-primary"
// //                 style={{ marginTop: "0.8rem" }}
// //                 onClick={() => handleBuyNow(p)}
// //                 disabled={loading}
// //               >
// //                 {loading ? "Processing..." : "Buy Now"}
// //               </button>
// //             </div>
// //           );
// //         })}
// //       </div>
// //     </div>
// //   );
// // }

// // export default Products;
// import React, { useMemo, useState } from "react";
// import axios from "axios";
// import { useLocation } from "react-router-dom";
// import { FaHeart, FaShoppingCart } from "react-icons/fa";
// import "./App.css";

// // ✅ Deployed backend base URL
// const API_BASE_URL = "https://ecommerce-backen-y6qo.onrender.com";
// function useQuery() {
//   const { search } = useLocation();
//   return useMemo(() => new URLSearchParams(search), [search]);
// }

// function Products({ products = [], addToCart, addToWishlist, user }) {
//   const [loading, setLoading] = useState(false);
//   const query = useQuery();
//   const category = query.get("category"); // Example: Women | Men | Kids | Bags | null

//   // ✅ Filter products by category
//   const filtered = useMemo(() => {
//     if (!category || category === "All") return products;
//     return products.filter(
//       (p) => (p.category || "").toLowerCase() === category.toLowerCase()
//     );
//   }, [products, category]);

//   // ✅ Handle "Buy Now"
//   const handleBuyNow = async (product) => {
//     if (!user) {
//       alert("Please login first");
//       return;
//     }

//     setLoading(true);

//     const orderData = {
//       orderItems: [
//         {
//           name: product.name,
//           qty: 1,
//           price: product.price,
//           product: product._id,
//         },
//       ],
//       shippingAddress: {
//         address: "123 Street",
//         city: "Hyderabad",
//         postalCode: "500001",
//         country: "India",
//       },
//       paymentMethod: "PayPal",
//       totalPrice: product.price,
//     };

//    try {
//   await axios.post(`${API_BASE_URL}/api/orders`, orderData, {
//     headers: {
//       Authorization: `Bearer ${user?.token}`,
//       "Content-Type": "application/json",
//     },
//   });
//   alert("Order placed successfully!");

//     } catch (err) {
//       alert(err.response?.data?.message || "Order failed!");
//     } finally {
//       setLoading(false);
//     }
//   };

//   // ✅ Show empty message if no products
//   if (!filtered || filtered.length === 0) {
//     return <h2 className="empty-note">No products found</h2>;
//   }

//   return (
//     <div className="products-page">
//       <h2 className="category-heading">
//         {category && category !== "All"
//           ? `SHOP ${category.toUpperCase()}`
//           : "ALL PRODUCTS"}
//       </h2>

//       <div className="product-grid">
//         {filtered.map((p) => {
//           // ✅ Correct backend image URL
//           const imageUrl = p.image?.startsWith("http")
//             ? p.image
//             : `${BACKEND_URL}/uploads/${p.image?.split("/").pop()}`;

//           return (
//             <div className="product-card v2" key={p._id || p.id}>
//               {/* Product Image */}
//               <div className="product-img-block">
//                 <img
//                   src={imageUrl}
//                   alt={p.name}
//                   loading="lazy"
//                   onError={(e) => {
//                     e.currentTarget.src = `${BACKEND_URL}/uploads/fallback.webp`;
//                   }}
//                 />
//               </div>

//               {/* Product Info */}
//               <div className="product-meta">
//                 <h4 className="product-brand">{p.name}</h4>
//                 <p className="product-title">{p.description}</p>
//               </div>

//               {/* Price + Cart + Wishlist */}
//               <div className="product-bottom-row">
//                 <button
//                   className="icon-btn-plain"
//                   title="Add to Wishlist"
//                   onClick={() => addToWishlist && addToWishlist(p)}
//                 >
//                   <FaHeart />
//                 </button>

//                 <div className="product-price-big">₹ {p.price}</div>

//                 <button
//                   className="icon-btn-plain"
//                   title="Add to Cart"
//                   onClick={() => addToCart && addToCart(p)}
//                 >
//                   <FaShoppingCart />
//                 </button>
//               </div>

//               {/* Buy Now Button */}
//               <button
//                 className="btn-primary"
//                 style={{ marginTop: "0.8rem" }}
//                 onClick={() => handleBuyNow(p)}
//                 disabled={loading}
//               >
//                 {loading ? "Processing..." : "Buy Now"}
//               </button>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// }

// export default Products;
import React, { useMemo, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import "./App.css";

// ✅ Deployed backend base URL
const API_BASE_URL = "https://ecommerce-backen-y6qo.onrender.com";

function useQuery() {
  const { search } = useLocation();
  return useMemo(() => new URLSearchParams(search), [search]);
}

function Products({ products = [], addToCart, addToWishlist, user }) {
  const [loading, setLoading] = useState(false);
  const query = useQuery();
  const category = query.get("category");

  // ✅ Filter products by category
  const filtered = useMemo(() => {
    if (!category || category === "All") return products;
    return products.filter(
      (p) => (p.category || "").toLowerCase() === category.toLowerCase()
    );
  }, [products, category]);

  // ✅ Handle "Buy Now"
  const handleBuyNow = async (product) => {
    if (!user) {
      alert("Please login first");
      return;
    }

    setLoading(true);

    const orderData = {
      orderItems: [
        {
          name: product.name,
          qty: 1,
          price: product.price,
          product: product._id,
        },
      ],
      shippingAddress: {
        address: "123 Street",
        city: "Hyderabad",
        postalCode: "500001",
        country: "India",
      },
      paymentMethod: "PayPal",
      totalPrice: product.price,
    };

    try {
      await axios.post(`${API_BASE_URL}/api/orders`, orderData, {
        headers: {
          Authorization: `Bearer ${user?.token}`,
          "Content-Type": "application/json",
        },
      });
      alert("Order placed successfully!");
    } catch (err) {
      alert(err.response?.data?.message || "Order failed!");
    } finally {
      setLoading(false);
    }
  };

  // ✅ Show empty message if no products
  if (!filtered || filtered.length === 0) {
    return <h2 className="empty-note">No products found</h2>;
  }

  return (
    <div className="products-page">
      <h2 className="category-heading">
        {category && category !== "All"
          ? `SHOP ${category.toUpperCase()}`
          : "ALL PRODUCTS"}
      </h2>

      <div className="product-grid">
        {filtered.map((p) => {
          // ✅ Use product image directly (already has full URL from backend)
          const imageUrl = p.image;

          return (
            <div className="product-card v2" key={p._id || p.id}>
              {/* Product Image */}
              <div className="product-img-block">
                <img
                  src={imageUrl}
                  alt={p.name}
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.src = `${API_BASE_URL}/uploads/fallback.webp`;
                  }}
                />
              </div>

              {/* Product Info */}
              <div className="product-meta">
                <h4 className="product-brand">{p.name}</h4>
                <p className="product-title">{p.description}</p>
              </div>

              {/* Price + Cart + Wishlist */}
              <div className="product-bottom-row">
                <button
                  className="icon-btn-plain"
                  title="Add to Wishlist"
                  onClick={() => addToWishlist && addToWishlist(p)}
                >
                  <FaHeart />
                </button>

                <div className="product-price-big">₹ {p.price}</div>

                <button
                  className="icon-btn-plain"
                  title="Add to Cart"
                  onClick={() => addToCart && addToCart(p)}
                >
                  <FaShoppingCart />
                </button>
              </div>

              {/* Buy Now Button */}
              <button
                className="btn-primary"
                style={{ marginTop: "0.8rem" }}
                onClick={() => handleBuyNow(p)}
                disabled={loading}
              >
                {loading ? "Processing..." : "Buy Now"}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Products;