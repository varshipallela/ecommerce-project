
// import React from "react";
// import { Link } from "react-router-dom";
// import { FaHeart, FaShoppingCart } from "react-icons/fa";
// import "./App.css";

// function Navbar({ cartLength, wishlistLength, user, handleLogout }) {
//   return (
//     <header className="top-navbar">
//       <div className="navbar-left">
//         <h2 className="logo">FASHION</h2>
//         <input type="text" placeholder="Search products..." className="search-input" />
//         <nav className="nav-links">
//           <Link to="/">Home</Link>
//           <Link to="/products?category=Kids">Kids</Link>
//           <Link to="/products?category=Women">Women</Link>
//           <Link to="/products?category=Men">Men</Link>
//           <Link to="/products?category=Bags">Bags</Link>
//           <Link to="/products">Products</Link>
//         </nav>
//       </div>

//       <div className="navbar-right">
//         {user ? (
//           <>
//             <span className="user-email">Hello, {user.name || user.email}</span>
//             <button className="btn-logout" onClick={handleLogout}>
//               Logout
//             </button>
//           </>
//         ) : (
//           <>
//             <Link to="/register">Register</Link>
//             <Link to="/login">Login</Link>
//           </>
//         )}

//         <Link to="/wishlist" className="icon-badge">
//           <FaHeart className="nav-icon" />
//           <span className="count-badge">{wishlistLength}</span>
//         </Link>

//         <Link to="/cart" className="icon-badge">
//           <FaShoppingCart className="nav-icon" />
//           <span className="count-badge">{cartLength}</span>
//         </Link>
//       </div>
//     </header>
//   );
// }

// export default Navbar;
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaHeart, FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";
import "./App.css";

function Navbar({ cartLength, wishlistLength, user, handleLogout }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="top-navbar">
      {/* Left Section */}
      <div className="navbar-left">
        <h2 className="logo">FASHION</h2>

        <div className="search-box">
          <input
            type="text"
            placeholder="Search products..."
            className="search-input"
          />
        </div>

        {/* Navigation Links */}
        <nav className={`nav-links ${menuOpen ? "active" : ""}`}>
          <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/products?category=Kids" onClick={() => setMenuOpen(false)}>Kids</Link>
          <Link to="/products?category=Women" onClick={() => setMenuOpen(false)}>Women</Link>
          <Link to="/products?category=Men" onClick={() => setMenuOpen(false)}>Men</Link>
          <Link to="/products?category=Bags" onClick={() => setMenuOpen(false)}>Bags</Link>
          <Link to="/products" onClick={() => setMenuOpen(false)}>Products</Link>
        </nav>
      </div>

      {/* Right Section */}
      <div className="navbar-right">
        {user ? (
          <>
            <span className="user-email">Hello, {user.name || user.email}</span>
            <button className="btn-logout" onClick={handleLogout}>
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/register">Register</Link>
            <Link to="/login">Login</Link>
          </>
        )}

        <Link to="/wishlist" className="icon-badge">
          <FaHeart className="nav-icon" />
          {wishlistLength > 0 && (
            <span className="count-badge">{wishlistLength}</span>
          )}
        </Link>

        <Link to="/cart" className="icon-badge">
          <FaShoppingCart className="nav-icon" />
          {cartLength > 0 && (
            <span className="count-badge">{cartLength}</span>
          )}
        </Link>

        {/* Mobile Menu Toggle */}
        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
    </header>
  );
}

export default Navbar;
