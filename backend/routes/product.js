const express = require("express");
const router = express.Router();

const {getProducts, newProduct} = require("../controllers/productController");

router.get("/products", getProducts);

// Create new Product
router.post("/product/new", newProduct);

module.exports = router;