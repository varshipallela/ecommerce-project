// // // import React, { useEffect, useState } from "react";
// // // import axios from "axios";
// // // import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// // // import Home from "./Home";
// // // import Cart from "./Cart";
// // // import Products from "./Products";
// // // import ProductDetails from "./ProductDetails";
// // // import Checkout from "./Checkout";
// // // import Login from "./Login";
// // // import Register from "./Register";

// // // function App() {
// // //   const [products, setProducts] = useState([]);
// // //   const [cart, setCart] = useState([]);

// // //   useEffect(() => {
// // //     axios
// // //       .get("http://localhost:5000/api/products")
// // //       .then((res) => setProducts(res.data))
// // //       .catch((err) => console.log(err));
// // //   }, []);

// // //   const addToCart = (product) => setCart([...cart, product]);

// // //   return (
// // //     <Router>
// // //       <nav className="main-nav">
// // //         <Link to="/">Home</Link>
// // //         <Link to="/products">Products</Link>
// // //         <Link to="/cart">Cart ({cart.length})</Link>

// // //         {!localStorage.getItem("user") ? (
// // //           <>
// // //             <Link to="/login">Login</Link>
// // //             <Link to="/register">Register</Link>
// // //           </>
// // //         ) : (
// // //           <>
// // //             <span>Welcome, {JSON.parse(localStorage.getItem("user")).name}</span>
// // //             <button
// // //               onClick={() => {
// // //                 localStorage.removeItem("user");
// // //                 window.location.reload();
// // //               }}
// // //             >
// // //               Logout
// // //             </button>
// // //           </>
// // //         )}
// // //       </nav>

// // //       <Routes>
// // //         <Route path="/" element={<Home />} />
// // //         <Route
// // //           path="/products"
// // //           element={<Products products={products} addToCart={addToCart} />}
// // //         />
// // //         <Route path="/product/:id" element={<ProductDetails />} />
// // //         <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
// // //         <Route path="/checkout" element={<Checkout cart={cart} />} />
// // //         <Route path="/login" element={<Login />} />
// // //         <Route path="/register" element={<Register />} />
// // //       </Routes>
// // //     </Router>
// // //   );
// // // }

// // // export default App;
// // import React, { useEffect, useState } from "react";
// // import axios from "axios";
// // import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// // import Home from "./Home";
// // import Cart from "./Cart";
// // import Products from "./Products";
// // import ProductDetails from "./ProductDetails";
// // import Checkout from "./Checkout";
// // import Login from "./Login";
// // import Register from "./Register";
// // import Navbar from "./Navbar";
// // import Footer from "./Footer";

// // function App() {
// //   const [products, setProducts] = useState([]);
// //   const [cart, setCart] = useState([]);

// //   useEffect(() => {
// //     axios
// //       .get("http://localhost:5000/api/products")
// //       .then((res) => setProducts(res.data))
// //       .catch((err) => console.log(err));
// //   }, []);

// //   const addToCart = (product) => setCart([...cart, product]);

// //   return (
// //     <Router>
// //       {/* COMMON HEADER */}
// //       <Navbar />

// //       <Routes>
// //         <Route path="/" element={<Home />} />
// //         <Route
// //           path="/products"
// //           element={<Products products={products} addToCart={addToCart} />}
// //         />
// //         <Route path="/product/:id" element={<ProductDetails />} />
// //         <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
// //         <Route path="/checkout" element={<Checkout cart={cart} />} />
// //         <Route path="/login" element={<Login />} />
// //         <Route path="/register" element={<Register />} />
// //       </Routes>

// //       {/* COMMON FOOTER */}
// //       <Footer />
// //     </Router>
// //   );
// // }

// // export default App;
// // import React, { useEffect, useState } from "react";
// // import axios from "axios";
// // import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// // import Home from "./Home";
// // import Cart from "./Cart";
// // import Products from "./Products";
// // import ProductDetails from "./ProductDetails";
// // import Checkout from "./Checkout";
// // import Login from "./Login";
// // import Register from "./Register";
// // import Navbar from "./Navbar";
// // import Footer from "./Footer";
// // import Wishlist from "./Wishlist";

// // function App() {
// //   const [products, setProducts] = useState([]);
// //   const [cart, setCart] = useState([]);
// //   const [wishlist, setWishlist] = useState(
// //     JSON.parse(localStorage.getItem("wishlist")) || []
// //   );

// //   useEffect(() => {
// //     axios("http://localhost:5000/api/products")
// //       .then((res) => setProducts(res.data))
// //       .catch((err) => console.log(err));
// //   }, []);

// //   const addToCart = (product) => {
// //     setCart([...cart, product]);
// //   };

// //   const addToWishlist = (product) => {
// //     const updated = [...wishlist, product];
// //     setWishlist(updated);
// //     localStorage.setItem("wishlist", JSON.stringify(updated));
// //   };

// //   const removeFromWishlist = (index) => {
// //     const updated = wishlist.filter((_, i) => i !== index);
// //     setWishlist(updated);
// //     localStorage.setItem("wishlist", JSON.stringify(updated));
// //   };

// //   return (
// //     <Router>
// //       <Navbar cartLength={cart.length} wishlistLength={wishlist.length} />
// //       <Routes>
// //         <Route
// //           path="/"
// //           element={
// //             <Home
// //               addToCart={addToCart}
// //               addToWishlist={addToWishlist}
// //             />
// //           }
// //         />
// //         <Route
// //           path="/products"
// //           element={<Products addToCart={addToCart} addToWishlist={addToWishlist} />}
// //         />
// //         <Route path="/wishlist" element={
// //           <Wishlist
// //             wishlist={wishlist}
// //             removeFromWishlist={removeFromWishlist}
// //             addToCart={addToCart}
// //           />
// //         }/>
// //         <Route path="/product/:id" element={<ProductDetails />} />
// //         <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
// //         <Route path="/checkout" element={<Checkout cart={cart} />} />
// //         <Route path="/login" element={<Login />} />
// //         <Route path="/register" element={<Register />} />
// //       </Routes>
// //       <Footer />
// //     </Router>
// //   );
// // }

// // export default App;
// // import React, { useEffect, useState } from "react";
// // import axios from "axios";
// // import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
// // import Home from "./Home";
// // import Cart from "./Cart";
// // import Products from "./Products";
// // import ProductDetails from "./ProductDetails";
// // import Checkout from "./Checkout";
// // import Login from "./Login";
// // import Register from "./Register";
// // import Navbar from "./Navbar";
// // import Footer from "./Footer";
// // import Wishlist from "./Wishlist";
// // import MyOrders from "./MyOrders";

// // function App() {
// //   const [products, setProducts] = useState([]);
// //   const [cart, setCart] = useState([]);
// //   const [wishlist, setWishlist] = useState(
// //     JSON.parse(localStorage.getItem("wishlist")) || []
// //   );
// //   const [user, setUser] = useState(
// //     JSON.parse(localStorage.getItem("user")) || null
// //   );

// //   // Fetch products from backend
// //   useEffect(() => {
// //     const fetchProducts = async () => {
// //       try {
// //         const { data } = await axios.get("http://localhost:5000/api/products");
// //         setProducts(data);
// //       } catch (err) {
// //         console.log(err);
// //       }
// //     };
// //     fetchProducts();
// //   }, []);

// //   // Add product to cart
// //   const addToCart = (product) => {
// //     setCart([...cart, product]);
// //   };

// //   // Add product to wishlist
// //   const addToWishlist = (product) => {
// //     const updated = [...wishlist, product];
// //     setWishlist(updated);
// //     localStorage.setItem("wishlist", JSON.stringify(updated));
// //   };

// //   // Remove product from wishlist
// //   const removeFromWishlist = (index) => {
// //     const updated = wishlist.filter((_, i) => i !== index);
// //     setWishlist(updated);
// //     localStorage.setItem("wishlist", JSON.stringify(updated));
// //   };

// //   // Handle logout
// //   const handleLogout = () => {
// //     setUser(null);
// //     localStorage.removeItem("user");
// //   };

// //   return (
// //     <Router>
// //       <Navbar
// //         cartLength={cart.length}
// //         wishlistLength={wishlist.length}
// //         user={user}
// //         handleLogout={handleLogout}
// //       />
// //       <Routes>
// //         <Route
// //           path="/"
// //           element={
// //             <Home addToCart={addToCart} addToWishlist={addToWishlist} products={products} />
// //           }
// //         />
// //         <Route
// //           path="/products"
// //           element={
// //             <Products
// //               products={products}
// //               addToCart={addToCart}
// //               addToWishlist={addToWishlist}
// //               user={user}
// //             />
// //           }
// //         />
// //         <Route
// //           path="/wishlist"
// //           element={
// //             <Wishlist
// //               wishlist={wishlist}
// //               removeFromWishlist={removeFromWishlist}
// //               addToCart={addToCart}
// //             />
// //           }
// //         />
// //         <Route path="/product/:id" element={<ProductDetails user={user} />} />
// //         <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
// //         <Route path="/checkout" element={<Checkout cart={cart} user={user} />} />
// //         <Route path="/login" element={<Login setUser={setUser} />} />
// //         <Route path="/register" element={<Register />} />
// //         <Route path="/myorders" element={<MyOrders user={user} />} />
// //         <Route
// //   path="/"
// //   element={
// //     <Home
// //       products={products}
// //       addToCart={addToCart}
// //       addToWishlist={addToWishlist}
// //     />
// //   }
// // />

// //       </Routes>
// //       <Footer />
// //     </Router>
// //   );
// // }

// // export default App;
// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Home from "./Home";
// import Cart from "./Cart";
// import Products from "./Products";
// import ProductDetails from "./ProductDetails";
// import Checkout from "./Checkout";
// import Login from "./Login";
// import Register from "./Register";
// import Navbar from "./Navbar";
// import Footer from "./Footer";
// import Wishlist from "./Wishlist";
// import MyOrders from "./MyOrders";

// function App() {
//   const [products, setProducts] = useState([]);
//   const [cart, setCart] = useState(
//     JSON.parse(localStorage.getItem("cart")) || []
//   );
//   const [wishlist, setWishlist] = useState(
//     JSON.parse(localStorage.getItem("wishlist")) || []
//   );
//   const [user, setUser] = useState(
//     JSON.parse(localStorage.getItem("user")) || null
//   );

//   // Fetch products from backend
//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const { data } = await axios.get("http://localhost:5000/api/products");
//         setProducts(data);
//       } catch (err) {
//         console.log(err);
//       }
//     };
//     fetchProducts();
//   }, []);

//   // Save cart/wishlist changes to localStorage
//   useEffect(() => {
//     localStorage.setItem("cart", JSON.stringify(cart));
//   }, [cart]);

//   useEffect(() => {
//     localStorage.setItem("wishlist", JSON.stringify(wishlist));
//   }, [wishlist]);

//   // Add product to cart
//   const addToCart = (product) => {
//     setCart([...cart, product]);
//   };

//   // Add product to wishlist
//   const addToWishlist = (product) => {
//     if (!wishlist.find((item) => item._id === product._id)) {
//       const updated = [...wishlist, product];
//       setWishlist(updated);
//     }
//   };

//   // Remove product from wishlist
//   const removeFromWishlist = (index) => {
//     const updated = wishlist.filter((_, i) => i !== index);
//     setWishlist(updated);
//   };

//   // Handle logout
//   const handleLogout = () => {
//     setUser(null);
//     localStorage.removeItem("user");
//   };

//   return (
//     <Router>
//       <Navbar
//         cartLength={cart.length}
//         wishlistLength={wishlist.length}
//         user={user}
//         handleLogout={handleLogout}
//       />

//       <Routes>
//         {/* Home */}
//         <Route
//           path="/"
//           element={
//             <Home
//               products={products}
//               addToCart={addToCart}
//               addToWishlist={addToWishlist}
//             />
//           }
//         />

//         {/* Product listing */}
//         <Route
//           path="/products"
//           element={
//             <Products
//               products={products}
//               addToCart={addToCart}
//               addToWishlist={addToWishlist}
//               user={user}
//             />
//           }
//         />

//         {/* Single product details */}
//         <Route path="/products/:id" element={<ProductDetails user={user} />} />

//         {/* Cart */}
//         <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />

//         {/* Wishlist */}
//         <Route
//           path="/wishlist"
//           element={
//             <Wishlist
//               wishlist={wishlist}
//               removeFromWishlist={removeFromWishlist}
//               addToCart={addToCart}
//             />
//           }
//         />

//         {/* Checkout */}
//         <Route path="/checkout" element={<Checkout cart={cart} user={user} />} />

//         {/* Auth */}
//         <Route path="/login" element={<Login setUser={setUser} />} />
//         <Route path="/register" element={<Register />} />

//         {/* My Orders */}
//         <Route path="/myorders" element={<MyOrders user={user} />} />
//       </Routes>

//       <Footer />
//     </Router>
//   );
// }
// export default App;
// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Home from "./Home";
// import Cart from "./Cart";
// import Products from "./Products";
// import ProductDetails from "./ProductDetails";
// import Checkout from "./Checkout";
// import Login from "./Login";
// import Register from "./Register";
// import Navbar from "./Navbar";
// import Footer from "./Footer";
// import Wishlist from "./Wishlist";
// import MyOrders from "./MyOrders";

// function App() {
//   const [products, setProducts] = useState([]);
//   const [cart, setCart] = useState(
//     JSON.parse(localStorage.getItem("cart")) || []
//   );
//   const [wishlist, setWishlist] = useState(
//     JSON.parse(localStorage.getItem("wishlist")) || []
//   );
//   const [user, setUser] = useState(
//     JSON.parse(localStorage.getItem("user")) || null
//   );

//   // ✅ Use environment variable or fallback URL
//   const API_BASE_URL =
//     process.env.REACT_APP_API_URL ||
//     "https://ecommerce-backend-0k6o.onrender.com";

//   // Fetch products from backend
//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const { data } = await axios.get(`${API_BASE_URL}/api/products`);
//         setProducts(data);
//       } catch (err) {
//         console.log("Error fetching products:", err);
//       }
//     };
//     fetchProducts();
//   }, [API_BASE_URL]);

//   // Save cart/wishlist changes to localStorage
//   useEffect(() => {
//     localStorage.setItem("cart", JSON.stringify(cart));
//   }, [cart]);

//   useEffect(() => {
//     localStorage.setItem("wishlist", JSON.stringify(wishlist));
//   }, [wishlist]);

//   // Add product to cart
//   const addToCart = (product) => {
//     setCart([...cart, product]);
//   };

//   // Add product to wishlist
//   const addToWishlist = (product) => {
//     if (!wishlist.find((item) => item._id === product._id)) {
//       const updated = [...wishlist, product];
//       setWishlist(updated);
//     }
//   };

//   // Remove product from wishlist
//   const removeFromWishlist = (index) => {
//     const updated = wishlist.filter((_, i) => i !== index);
//     setWishlist(updated);
//   };

//   // Handle logout
//   const handleLogout = () => {
//     setUser(null);
//     localStorage.removeItem("user");
//   };

//   return (
//     <Router>
//       <Navbar
//         cartLength={cart.length}
//         wishlistLength={wishlist.length}
//         user={user}
//         handleLogout={handleLogout}
//       />

//       <Routes>
//         {/* Home */}
//         <Route
//           path="/"
//           element={
//             <Home
//               products={products}
//               addToCart={addToCart}
//               addToWishlist={addToWishlist}
//             />
//           }
//         />

//         {/* Product listing */}
//         <Route
//           path="/products"
//           element={
//             <Products
//               products={products}
//               addToCart={addToCart}
//               addToWishlist={addToWishlist}
//               user={user}
//             />
//           }
//         />

//         {/* Single product details */}
//         <Route path="/products/:id" element={<ProductDetails user={user} />} />

//         {/* Cart */}
//         <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />

//         {/* Wishlist */}
//         <Route
//           path="/wishlist"
//           element={
//             <Wishlist
//               wishlist={wishlist}
//               removeFromWishlist={removeFromWishlist}
//               addToCart={addToCart}
//             />
//           }
//         />

//         {/* Checkout */}
//         <Route path="/checkout" element={<Checkout cart={cart} user={user} />} />

//         {/* Auth */}
//         <Route path="/login" element={<Login setUser={setUser} />} />
//         <Route path="/register" element={<Register />} />

//         {/* My Orders */}
//         <Route path="/myorders" element={<MyOrders user={user} />} />
//       </Routes>

//       <Footer />
//     </Router>
//   );
// }

// export default App;
import React, { useEffect, useState } from "react";
import axios from "axios";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Cart from "./Cart";
import Products from "./Products";
import ProductDetails from "./ProductDetails";
import Checkout from "./Checkout";
import Login from "./Login";
import Register from "./Register";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Wishlist from "./Wishlist";
import MyOrders from "./MyOrders";

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );
  const [wishlist, setWishlist] = useState(
    JSON.parse(localStorage.getItem("wishlist")) || []
  );
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  // ✅ Your deployed backend URL
  const API_BASE_URL = "https://ecommerce-backendss.onrender.com";

  // ✅ Fetch products from backend
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await axios.get(`${API_BASE_URL}/api/products`);

        // ✅ Ensure image URLs include the full backend path
        const updatedProducts = data.map((p) => ({
          ...p,
          image: p.image?.startsWith("http")
            ? p.image
            : `${API_BASE_URL}/uploads/${p.image?.split("/").pop()}`,
        }));

        setProducts(updatedProducts);
      } catch (err) {
        console.error("Error fetching products:", err);
      }
    };

    fetchProducts();
  }, [API_BASE_URL]);

  // ✅ Save cart/wishlist to localStorage
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  // ✅ Add product to cart
  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  // ✅ Add product to wishlist
  const addToWishlist = (product) => {
    if (!wishlist.find((item) => item._id === product._id)) {
      setWishlist([...wishlist, product]);
    }
  };

  // ✅ Remove from wishlist
  const removeFromWishlist = (index) => {
    const updated = wishlist.filter((_, i) => i !== index);
    setWishlist(updated);
  };

  // ✅ Logout
  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <Router>
      <Navbar
        cartLength={cart.length}
        wishlistLength={wishlist.length}
        user={user}
        handleLogout={handleLogout}
      />

      <Routes>
        {/* 🏠 Home */}
        <Route
          path="/"
          element={
            <Home
              products={products}
              addToCart={addToCart}
              addToWishlist={addToWishlist}
            />
          }
        />

        {/* 🛍 Products */}
        <Route
          path="/products"
          element={
            <Products
              products={products}
              addToCart={addToCart}
              addToWishlist={addToWishlist}
              user={user}
            />
          }
        />

        {/* 🔍 Product Details */}
        <Route path="/products/:id" element={<ProductDetails user={user} />} />

        {/* 🛒 Cart */}
        <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />

        {/* ❤️ Wishlist */}
        <Route
          path="/wishlist"
          element={
            <Wishlist
              wishlist={wishlist}
              removeFromWishlist={removeFromWishlist}
              addToCart={addToCart}
            />
          }
        />

        {/* 💳 Checkout */}
        <Route path="/checkout" element={<Checkout cart={cart} user={user} />} />

        {/* 🔐 Auth */}
        <Route path="/login" element={<Login setUser={setUser} />} />
        <Route path="/register" element={<Register />} />

        {/* 📦 My Orders */}
        <Route path="/myorders" element={<MyOrders user={user} />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;


// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Home from "./Home";
// import Cart from "./Cart";
// import Products from "./Products";
// import ProductDetails from "./ProductDetails";
// import Checkout from "./Checkout";
// import Login from "./Login";
// import Register from "./Register";
// import Navbar from "./Navbar";
// import Footer from "./Footer";
// import Wishlist from "./Wishlist";
// import MyOrders from "./MyOrders";

// function App() {
//   const [products, setProducts] = useState([]);
//   const [cart, setCart] = useState(
//     JSON.parse(localStorage.getItem("cart")) || []
//   );
//   const [wishlist, setWishlist] = useState(
//     JSON.parse(localStorage.getItem("wishlist")) || []
//   );
//   const [user, setUser] = useState(
//     JSON.parse(localStorage.getItem("user")) || null
//   );
  
//   // ✅ ADD THIS: Manage lastOrder state
//   const [lastOrder, setLastOrder] = useState(
//     JSON.parse(localStorage.getItem("lastOrder")) || null
//   );

//   // Fetch products from backend
//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const { data } = await axios.get("http://localhost:5000/api/products");
//         setProducts(data);
//       } catch (err) {
//         console.log(err);
//       }
//     };
//     fetchProducts();
//   }, []);

//   // Save cart/wishlist changes to localStorage
//   useEffect(() => {
//     localStorage.setItem("cart", JSON.stringify(cart));
//   }, [cart]);

//   useEffect(() => {
//     localStorage.setItem("wishlist", JSON.stringify(wishlist));
//   }, [wishlist]);

//   // ✅ ADD THIS: Save lastOrder to localStorage
//   useEffect(() => {
//     if (lastOrder) {
//       localStorage.setItem("lastOrder", JSON.stringify(lastOrder));
//     }
//   }, [lastOrder]);

//   // Add product to cart
//   const addToCart = (product, size = null, quantity = 1) => {
//     // Check if product already exists in cart
//     const existingIndex = cart.findIndex(item => 
//       item._id === product._id && item.selectedSize === size
//     );

//     if (existingIndex !== -1) {
//       // Product exists, increase quantity
//       const updatedCart = [...cart];
//       updatedCart[existingIndex].quantity = (updatedCart[existingIndex].quantity || 1) + quantity;
//       setCart(updatedCart);
//     } else {
//       // New product, add to cart
//       setCart([...cart, { 
//         ...product, 
//         quantity: quantity,
//         selectedSize: size 
//       }]);
//     }
//   };

//   // Add product to wishlist
//   const addToWishlist = (product) => {
//     if (!wishlist.find((item) => item._id === product._id)) {
//       const updated = [...wishlist, product];
//       setWishlist(updated);
//     }
//   };

//   // Remove product from wishlist
//   const removeFromWishlist = (index) => {
//     const updated = wishlist.filter((_, i) => i !== index);
//     setWishlist(updated);
//   };

//   // Handle logout
//   const handleLogout = () => {
//     setUser(null);
//     localStorage.removeItem("user");
//   };

//   return (
//     <Router>
//       <Navbar
//         cartLength={cart.length}
//         wishlistLength={wishlist.length}
//         user={user}
//         handleLogout={handleLogout}
//       />

//       <Routes>
//         {/* Home */}
//         <Route
//           path="/"
//           element={
//             <Home
//               products={products}
//               addToCart={addToCart}
//               addToWishlist={addToWishlist}
//             />
//           }
//         />

//         {/* Product listing */}
//         <Route
//           path="/products"
//           element={
//             <Products
//               products={products}
//               addToCart={addToCart}
//               addToWishlist={addToWishlist}
//               user={user}
//             />
//           }
//         />

//         {/* Single product details */}
//         <Route path="/products/:id" element={<ProductDetails user={user} />} />

//         {/* Cart - ✅ PASS lastOrder prop */}
//         <Route 
//           path="/cart" 
//           element={
//             <Cart 
//               cart={cart} 
//               setCart={setCart} 
//               lastOrder={lastOrder}
//             />
//           } 
//         />

//         {/* Wishlist */}
//         <Route
//           path="/wishlist"
//           element={
//             <Wishlist
//               wishlist={wishlist}
//               removeFromWishlist={removeFromWishlist}
//               addToCart={addToCart}
//             />
//           }
//         />

//         {/* Checkout - ✅ PASS setLastOrder and addToWishlist props */}
//         <Route
//           path="/checkout"
//           element={
//             <Checkout 
//               cart={cart} 
//               user={user} 
//               setCart={setCart}
//               setLastOrder={setLastOrder}
//               addToWishlist={addToWishlist}
//             />
//           }
//         />

//         {/* Auth */}
//         <Route path="/login" element={<Login setUser={setUser} />} />
//         <Route path="/register" element={<Register />} />

//         {/* My Orders */}
//         <Route path="/myorders" element={<MyOrders />} />
//       </Routes>

//       <Footer />
//     </Router>
//   );
// }

// export default App;