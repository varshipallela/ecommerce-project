// // // const express = require("express");
// // // const router = express.Router();
// // // const Product = require("../models/Product");

// // // // GET all products
// // // router.get("/", async (req, res) => {
// // //   try {
// // //     const products = await Product.find();
// // //     res.json(products);
// // //   } catch (err) {
// // //     res.status(500).json({ error: err.message });
// // //   }
// // // });
// // // // GET product by id
// // // router.get("/:id", async (req, res) => {
// // //   try {
// // //     const product = await Product.findById(req.params.id);
// // //     res.json(product);
// // //   } catch (err) {
// // //     res.status(500).json({ error: err.message });
// // //   }
// // // });


// // // // POST create a product
// // // router.post("/", async (req, res) => {
// // //   try {
// // //     const product = new Product(req.body);
// // //     const saved = await product.save();
// // //     res.status(201).json(saved);
// // //   } catch (err) {
// // //     res.status(400).json({ error: err.message });
// // //   }
// // // });

// // // module.exports = router;
// // const express = require("express");
// // const Product = require("../models/Product");

// // const router = express.Router();

// // // GET all products
// // router.get("/", async (req, res) => {
// //   try {
// //     const products = await Product.find();
// //     res.json(products);
// //   } catch (err) {
// //     res.status(500).json({ error: err.message });
// //   }
// // });

// // // GET product by id
// // router.get("/:id", async (req, res) => {
// //   try {
// //     const product = await Product.findById(req.params.id);
// //     res.json(product);
// //   } catch (err) {
// //     res.status(500).json({ error: err.message });
// //   }
// // });

// // module.exports = router;
// import express from "express";
// import { getProducts, getProductById } from "../controllers/productController.js";

// const router = express.Router();

// router.get("/", getProducts);
// router.get("/:id", getProductById);

// export default router;
// backend/routes/productRoutes.js
import express from "express";
import products from "../data/products.js"; // make sure products.js exports array

const router = express.Router();

// @desc   Get all products
// @route  GET /api/products
router.get("/", (req, res) => {
  res.json(products);
});

// @desc   Get single product by ID
// @route  GET /api/products/:id
router.get("/:id", (req, res) => {
  const product = products.find((p) => p._id === req.params.id);
  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ message: "Product not found" });
  }
});

export default router;
