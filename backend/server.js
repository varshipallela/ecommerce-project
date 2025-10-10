// // // // const express = require("express");
// // // // const cors = require("cors");
// // // // require("dotenv").config();
// // // // const mongoose = require("mongoose");

// // // // const app = express();
// // // // app.use(cors());
// // // // app.use(express.json());
// // // // const productRoutes = require("./routes/productRoutes");
// // // // const userRoutes = require("./routes/userRoutes");
// // // // app.use("/api/products", productRoutes);
// // // // app.use("/api/users", userRoutes);
// // // // mongoose
// // // //   .connect(process.env.MONGO_URI, { dbName: process.env.DB_NAME || "ecommerce" })
// // // //   .then(() => console.log("MongoDB Connected"))
// // // //   .catch((err) => console.log(err));


// // // // // Simple test route
// // // // app.get("/", (req, res) => {
// // // //   res.send("API is running...");
// // // // });

// // // // const PORT = process.env.PORT || 5000;
// // // // app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
// // // const express = require("express");
// // // const cors = require("cors");
// // // require("dotenv").config();
// // // const mongoose = require("mongoose");

// // // const app = express();
// // // app.use(cors());
// // // app.use(express.json());

// // // const productRoutes = require("./routes/productRoutes");
// // // const userRoutes = require("./routes/userRoutes");

// // // app.use("/api/products", productRoutes);
// // // app.use("/api/users", userRoutes);

// // // mongoose
// // //   .connect(process.env.MONGO_URI, { dbName: process.env.DB_NAME || "ecommerce" })
// // //   .then(() => console.log("MongoDB Connected"))
// // //   .catch((err) => console.log(err));

// // // // Simple test route
// // // app.get("/", (req, res) => {
// // //   res.send("API is running...");
// // // });

// // // const PORT = process.env.PORT || 5000;
// // // app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
// // // import express from "express";
// // // import dotenv from "dotenv";
// // // import cors from "cors";
// // // import mongoose from "mongoose";
// // // import userRoutes from "./routes/userRoutes.js";
// // // import orderRoutes from "./routes/orderRoutes.js";

// // // import productRoutes from "./routes/productRoutes.js";

// // // dotenv.config();

// // // const app = express();

// // // app.use(cors());
// // // app.use(express.json());

// // // // Routes
// // // app.use("/api/products", productRoutes);
// // // app.use("/api/users", userRoutes);
// // // app.use("/api/orders", orderRoutes);


// // // app.get("/", (req, res) => {
// // //   res.send("API is running...");
// // // });

// // // // MongoDB connection
// // // mongoose
// // //   .connect(process.env.MONGO_URI)
// // //   .then(() => console.log("MongoDB connected"))
// // //   .catch((err) => console.error(err));

// // // const PORT = process.env.PORT || 5000;
// // // app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
// // // import express from "express";
// // // import dotenv from "dotenv";
// // // import cors from "cors";
// // // import mongoose from "mongoose";

// // // // Routes
// // // import userRoutes from "./routes/userRoutes.js";
// // // import orderRoutes from "./routes/orderRoutes.js";
// // // import productRoutes from "./routes/productRoutes.js";

// // // dotenv.config();

// // // const app = express();

// // // // Middleware
// // // app.use(cors());
// // // app.use(express.json());

// // // // Routes
// // // app.use("/api/products", productRoutes);
// // // app.use("/api/users", userRoutes);
// // // app.use("/api/orders", orderRoutes);

// // // // Health check route
// // // app.get("/", (req, res) => {
// // //   res.send("API is running successfully...");
// // // });

// // // // MongoDB connection
// // // mongoose
// // //   .connect(process.env.MONGO_URI, {
// // //     useNewUrlParser: true,
// // //     useUnifiedTopology: true,
// // //   })
// // //   .then(() => console.log("✅ MongoDB connected"))
// // //   .catch((err) => {
// // //     console.error("❌ MongoDB connection failed:", err.message);
// // //     process.exit(1);
// // //   });

// // // // Server
// // // const PORT = process.env.PORT || 5000;
// // // app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
// import express from "express";
// import dotenv from "dotenv";
// import cors from "cors";
// import mongoose from "mongoose";
// import path from "path";
// import { fileURLToPath } from "url";

// // Routes
// import userRoutes from "./routes/userRoutes.js";
// import orderRoutes from "./routes/orderRoutes.js";
// import productRoutes from "./routes/productRoutes.js";

// dotenv.config();

// const app = express();

// // Middleware
// app.use(cors());
// app.use(express.json());

// // 👉 Resolve __dirname in ES modules
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// // 👉 Serve images folder (create "uploads" or "images" folder in backend root)
// app.use("/uploads", express.static(path.join(__dirname, "/uploads/uploads")));

// // Routes
// app.use("/api/products", productRoutes);
// app.use("/api/users", userRoutes);
// app.use("/api/orders", orderRoutes);

// // Health check route
// app.get("/", (req, res) => {
//   res.send("API is running successfully...");
// });

// // MongoDB connection
// mongoose
//   .connect(process.env.MONGO_URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => console.log("✅ MongoDB connected"))
//   .catch((err) => {
//     console.error("❌ MongoDB connection failed:", err.message);
//     process.exit(1);
//   });

// // Server
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));

import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import path from "path";
import { fileURLToPath } from "url";

// Routes
import userRoutes from "./routes/userRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";
import productRoutes from "./routes/productRoutes.js";

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// 👉 Resolve __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ✅ Serve your image files from the correct folder
// Your actual folder path: backend/uploads/uploads
// So we'll serve the *inner* uploads folder directly
app.use("/uploads", express.static(path.join(__dirname, "uploads", "uploads")));

// Routes
app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);
app.use("/api/orders", orderRoutes);

// Health check route
app.get("/", (req, res) => {
  res.send("✅ API is running successfully...");
});

// ✅ MongoDB connection
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => {
    console.error("❌ MongoDB connection failed:", err.message);
    process.exit(1);
  });

// ✅ Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
