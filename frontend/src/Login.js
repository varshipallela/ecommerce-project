// import React, { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import "./App.css"; // Make sure App.css has the styles

// function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     axios
//       .post("http://localhost:5000/api/users/login", { email, password })
//       .then((res) => {
//         alert("Login successful");
//         localStorage.setItem("user", JSON.stringify(res.data));
//         navigate("/");
//       })
//       .catch(() => alert("Invalid credentials!"));
//   };

//   return (
//     <div className="auth-container">
//       <div className="auth-card">
//         <h2>Login</h2>
//         <form onSubmit={handleSubmit} className="auth-form">
//           <input
//             type="email"
//             placeholder="Email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//           <input
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//           <button type="submit" className="btn-primary">
//             Login
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default Login;
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./App.css";

function Login({ setUser }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // ✅ Use deployed backend API instead of localhost
      const { data } = await axios.post(
        "https://ecommerce-backendss.onrender.com/api/users/login",
        { email, password },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      // Save user in App.js state
      setUser(data);

      // Save user in localStorage
      localStorage.setItem("user", JSON.stringify(data));

      alert("Login successful");
      navigate("/");
    } catch (err) {
      alert(err.response?.data?.message || "Invalid credentials!");
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Login</h2>
        <form onSubmit={handleSubmit} className="auth-form">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit" className="btn-primary">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
