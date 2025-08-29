// backend/data/products.js
// Expanded product catalog with multiple items per category

const products = [
  // Women
  {
    _id: "1",
    name: "Women T-Shirt",
    description: "Comfortable cotton T-shirt",
    price: 499,
    category: "Women",
    countInStock: 12,
    image: "/assets/images/women1.webp",
  },
  {
    _id: "2",
    name: "Women Casual Dress",
    description: "Stylish summer dress",
    price: 1299,
    category: "Women",
    countInStock: 7,
    image: "/assets/images/women2.webp",
  },
  {
    _id: "3",
    name: "Women Jacket",
    description: "Lightweight casual jacket",
    price: 1799,
    category: "Women",
    countInStock: 5,
    image: "/assets/images/women3.webp",
  },

  // Men
  {
    _id: "4",
    name: "Men Shirt",
    description: "Stylish slim fit shirt",
    price: 799,
    category: "Men",
    countInStock: 10,
    image: "/assets/images/men1.webp",
  },
  {
    _id: "5",
    name: "Men Hoodie",
    description: "Cozy fleece hoodie",
    price: 1499,
    category: "Men",
    countInStock: 9,
    image: "/assets/images/men2.webp",
  },
  {
    _id: "6",
    name: "Men Jacket",
    description: "Classic denim jacket",
    price: 1999,
    category: "Men",
    countInStock: 6,
    image: "/assets/images/men3.webp",
  },

  // Kids
  {
    _id: "7",
    name: "Kids Jacket",
    description: "Warm and cozy jacket for kids",
    price: 999,
    category: "Kids",
    countInStock: 8,
    image: "/assets/images/kids1.webp",
  },
  {
    _id: "8",
    name: "Kids T-Shirt",
    description: "Soft cotton tee",
    price: 399,
    category: "Kids",
    countInStock: 15,
    image: "/assets/images/kids2.webp",
  },
  {
    _id: "9",
    name: "Kids Dress",
    description: "Cute printed dress",
    price: 699,
    category: "Kids",
    countInStock: 11,
    image: "/assets/images/kids3.webp",
  },

  // Bags
  {
    _id: "10",
    name: "Handbag",
    description: "Elegant everyday handbag",
    price: 1599,
    category: "Bags",
    countInStock: 10,
    image: "/assets/images/bags1.webp",
  },
  {
    _id: "11",
    name: "Backpack",
    description: "Durable travel backpack",
    price: 1399,
    category: "Bags",
    countInStock: 12,
    image: "/assets/images/bags2.webp",
  },
  {
    _id: "12",
    name: "Sling Bag",
    description: "Compact sling bag",
    price: 899,
    category: "Bags",
    countInStock: 14,
    image: "/assets/images/bags3.webp",
  },
];

export default products;