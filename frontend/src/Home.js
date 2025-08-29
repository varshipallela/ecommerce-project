// import React, { useMemo, useState } from "react";
// import { FaHeart, FaShoppingCart } from "react-icons/fa";
// import { useNavigate } from "react-router-dom";
// import "./App.css";

// const CATEGORY_IMAGES = {
//   Women: [
//     "/assets/images/women1.webp",
//     "/assets/images/women2.webp",
//     "/assets/images/women3.webp",
//     "/assets/images/women4.webp",
//     "/assets/images/women5.webp",
//     "/assets/images/women6.webp",
//     "/assets/images/women7.webp",
//     "/assets/images/women8.webp",
//   ],
//   Men: [
//     "/assets/images/men1.webp",
//     "/assets/images/men2.webp",
//     "/assets/images/men3.webp",
//     "/assets/images/men4.webp",
//     "/assets/images/men5.webp",
//     "/assets/images/men6.webp",
//     "/assets/images/men7.webp",
//     "/assets/images/men8.webp",
//   ],
//   Kids: [
//     "/assets/images/kids1.webp",
//     "/assets/images/kids2.webp",
//     "/assets/images/kids3.webp",
//     "/assets/images/kids4.webp",
//     "/assets/images/kids5.webp",
//     "/assets/images/kids6.webp",
//     "/assets/images/kids7.webp",
//     "/assets/images/kids8.webp",
//   ],
//   Bags: [
//     "/assets/images/bags1.webp",
//     "/assets/images/bags2.webp",
//     "/assets/images/bags3.webp",
//     "/assets/images/bags4.webp",
//     "/assets/images/bags5.webp",
//     "/assets/images/bags6.webp",
//     "/assets/images/bags7.webp",
//     "/assets/images/bags8.webp",
//   ],
// };

// function Home({ products = [], addToCart, addToWishlist }) {
//   const [selectedCategory, setSelectedCategory] = useState("All");
//   const navigate = useNavigate();

//   const categories = ["All", "Women", "Men", "Kids", "Bags"]; 

//   const getProductsByCategory = (cat) => {
//     if (cat === "All") return products;
//     return products.filter(
//       (p) => (p.category || "").toLowerCase() === cat.toLowerCase()
//     );
//   };

//   const brandAndTitle = (p) => {
//     const brand = p.brand || (p.name ? p.name.split(" ")[0] : "");
//     const title = p.title || (p.name ? p.name.replace(new RegExp(`^${brand}\\s*`, "i"), "").trim() : "");
//     return { brand: brand || p.name || "Brand", title: title || p.name || "" };
//   };

//   const filtered = useMemo(() => getProductsByCategory(selectedCategory), [products, selectedCategory]);

//   const firstFallback = (cat) => CATEGORY_IMAGES[cat]?.[0] || "/assets/images/women1.webp";

//   const limitedCount = selectedCategory === "All" ? 12 : 4; // show 12 for All; 4 for specific categories
//   const visibleItems = filtered.slice(0, limitedCount);

//   const handleSeeMore = () => {
//     // Go to products page with optional category
//     const qs = selectedCategory === "All" ? "" : `?category=${encodeURIComponent(selectedCategory)}`;
//     navigate(`/products${qs}`);
//   };

//   const handleShopNow = () => {
//     navigate("/products");
//   };

//   return (
//     <>
//       {/* HERO */}
//       <div className="home-landing">
//         <section className="landing-hero">
//           <div className="landing-left">
//             <p className="tagline">UP TO 15% DISCOUNT</p>
//             <h1 className="main-heading">
//               Checkout The <br /> Best Fashion <br /> Style
//             </h1>
//             <button
//               className="shop-now-btn"
//               onClick={handleShopNow}
//             >
//               SHOP NOW
//             </button>
//           </div>
//           <div className="landing-right">
//             <img
//               src="https://img.freepik.com/free-photo/perfect-day-shopping-with-friend_329181-8062.jpg?semt=ais_hybrid&w=740&q=80"
//               alt="Fashion"
//             />
//           </div>
//         </section>
//       </div>

//       {/* CATEGORY FILTER */}
//       <div className="category-filter">
//         {categories.map((cat) => (
//           <button
//             key={cat}
//             className={`filter-btn ${selectedCategory === cat ? "active" : ""}`}
//             onClick={() => setSelectedCategory(cat)}
//           >
//             {cat}
//           </button>
//         ))}
//       </div>

//       {/* GRID */}
//       <div className="shop-by">
//         <h2 className="category-heading">
//           {selectedCategory === "All"
//             ? "ALL PRODUCTS"
//             : `SHOP ${selectedCategory.toUpperCase()}`}
//         </h2>

//         {selectedCategory !== "All" && (
//           <div className="category-static-images">
//             {CATEGORY_IMAGES[selectedCategory].slice(0, 4).map((img, idx) => (
//               <img key={idx} src={img} alt={`${selectedCategory} ${idx}`} />
//             ))}
//           </div>
//         )}

//         {visibleItems.length === 0 ? (
//           <p className="empty-note">No products found.</p>
//         ) : (
//           <>
//             <div className="product-grid">
//               {visibleItems.map((p) => {
//                 const { brand, title } = brandAndTitle(p);
//                 const fallback = firstFallback(p.category || selectedCategory);

//                 return (
//                   <div key={p._id || p.id} className="product-card v2">
//                     <div className="product-img-block">
//                       <img
//                         src={p.image || fallback}
//                         alt={p.name || brand}
//                         loading="lazy"
//                         onError={(e) => {
//                           e.currentTarget.src = fallback;
//                         }}
//                       />
//                     </div>

//                     <div className="product-meta">
//                       <h4 className="product-brand">{brand}</h4>
//                       {title && <p className="product-title">{title}</p>}
//                     </div>

//                     <div className="product-bottom-row">
//                       <button
//                         className="icon-btn-plain"
//                         title="Add to Wishlist"
//                         onClick={() => addToWishlist && addToWishlist(p)}
//                       >
//                         <FaHeart />
//                       </button>

//                       <div className="product-price-big">₹ {p.price}</div>

//                       <button
//                         className="icon-btn-plain"
//                         title="Add to Cart"
//                         onClick={() => addToCart && addToCart(p)}
//                       >
//                         <FaShoppingCart />
//                       </button>
//                     </div>
//                   </div>
//                 );
//               })}
//             </div>
//             {filtered.length > limitedCount && (
//               <div className="see-more-wrap">
//                 <button className="btn-primary" onClick={handleSeeMore}>
//                   See more
//                 </button>
//               </div>
//             )}
//           </>
//         )}
//       </div>
//     </>
//   );
// }

// export default Home;

import React, { useMemo, useState } from "react";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./App.css";

function Home({ products = [], addToCart, addToWishlist }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const navigate = useNavigate();

  const categories = ["All", "Women", "Men", "Kids", "Bags"];

  const getProductsByCategory = (cat) => {
    if (cat === "All") return products;
    return products.filter(
      (p) => (p.category || "").toLowerCase() === cat.toLowerCase()
    );
  };

  const brandAndTitle = (p) => {
    const brand = p.brand || (p.name ? p.name.split(" ")[0] : "");
    const title =
      p.title ||
      (p.name
        ? p.name.replace(new RegExp(`^${brand}\\s*`, "i"), "").trim()
        : "");
    return { brand: brand || p.name || "Brand", title: title || p.name || "" };
  };

  const filtered = useMemo(
    () => getProductsByCategory(selectedCategory),
    [products, selectedCategory]
  );

  // ✅ Always show only 4 initially
  const limitedCount = 8;
  const visibleItems = filtered.slice(0, limitedCount);

  const handleSeeMore = () => {
    const qs =
      selectedCategory === "All"
        ? ""
        : `?category=${encodeURIComponent(selectedCategory)}`;
    navigate(`/products${qs}`);
  };

  const handleShopNow = () => {
    navigate("/products");
  };

  return (
    <>
      {/* HERO */}
      <div className="home-landing">
        <section className="landing-hero">
          <div className="landing-left">
            <p className="tagline">UP TO 15% DISCOUNT</p>
            <h1 className="main-heading">
              Checkout The <br /> Best Fashion <br /> Style
            </h1>
            <button className="shop-now-btn" onClick={handleShopNow}>
              SHOP NOW
            </button>
          </div>
          <div className="landing-right">
            <img
              src="https://img.freepik.com/free-photo/perfect-day-shopping-with-friend_329181-8062.jpg?semt=ais_hybrid&w=740&q=80"
              alt="Fashion"
            />
          </div>
        </section>
      </div>

      {/* CATEGORY FILTER */}
      <div className="category-filter">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`filter-btn ${selectedCategory === cat ? "active" : ""}`}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* GRID */}
      <div className="shop-by">
        <h2 className="category-heading">
          {selectedCategory === "All"
            ? "ALL PRODUCTS"
            : `SHOP ${selectedCategory.toUpperCase()}`}
        </h2>

        {visibleItems.length === 0 ? (
          <p className="empty-note">No products found.</p>
        ) : (
          <>
            <div className="product-grid">
              {visibleItems.map((p) => {
                const { brand, title } = brandAndTitle(p);

                return (
                  <div key={p._id || p.id} className="product-card v2">
                    <div className="product-img-block">
                      <img
                        src={p.image}
                        alt={p.name || brand}
                        loading="lazy"
                      />
                    </div>

                    <div className="product-meta">
                      <h4 className="product-brand">{brand}</h4>
                      {title && <p className="product-title">{title}</p>}
                    </div>

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
                  </div>
                );
              })}
            </div>

            {/* ✅ Only show See More if there are more than 4 */}
            {filtered.length > limitedCount && (
              <div className="see-more-wrap">
                <button className="btn-primary" onClick={handleSeeMore}>
                  See More
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </>
  );
}

export default Home;
