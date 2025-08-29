import mongoose from "mongoose";
import dotenv from "dotenv";
import bcrypt from "bcryptjs";
import Product from "./models/productModel.js";
import User from "./models/userModel.js";
import productsData from "./data/products.js";

dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected");
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

const importData = async () => {
  try {
    await Product.deleteMany();
    await User.deleteMany();

    // Create admin user
    const adminUser = await User.create({
      name: "Admin User",
      email: "admin@example.com",
      password: await bcrypt.hash("123456", 10), // hashed password
      isAdmin: true,
    });

    // Assign admin user to all products
    const sampleProducts = productsData.map((product) => ({
      ...product,
      user: adminUser._id,
    }));

    await Product.insertMany(sampleProducts);

    console.log("Data Imported!");
    process.exit();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await Product.deleteMany();
    await User.deleteMany();
    console.log("Data Destroyed!");
    process.exit();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

// Run import or destroy
connectDB().then(() => {
  if (process.argv[2] === "-d") {
    destroyData();
  } else {
    importData();
  }
});
