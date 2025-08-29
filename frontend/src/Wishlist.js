import React from "react";

function Wishlist({ wishlist, removeFromWishlist, addToCart }) {
  return (
    <div style={{ padding: "30px" }}>
      <h1>My Wishlist</h1>

      {wishlist.length === 0 ? (
        <p>No items in wishlist.</p>
      ) : (
        <div style={{ display: "flex", gap: "30px", flexWrap: "wrap" }}>
          {wishlist.map((p, i) => (
            <div key={i} style={{ width: "250px", border: "1px solid #ddd", padding: "15px" }}>
              <img src={p.image} alt="" style={{ width: "100%", height: "200px", objectFit: "cover" }} />
              <h3>{p.name}</h3>
              <p>₹ {p.price}</p>

              <button
                style={{ margin: "5px", background: "#008080", color: "white", padding: "6px 12px", border: "none" }}
                onClick={() => addToCart(p)}
              >
                Add to Cart
              </button>
              <button
                style={{ margin: "5px", background: "red", color: "white", padding: "6px 12px", border: "none" }}
                onClick={() => removeFromWishlist(i)}
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Wishlist;
