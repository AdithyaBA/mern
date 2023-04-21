const express = require("express");
const router = express.Router();

const {getAllProduct, newProduct, getSingleProduct} = require("../controllers/productController");

router.get("/products", getAllProduct);

// Create new Product
router.post("/product/new", newProduct);

// Get Single Product
router.get("/product/:id", getSingleProduct)

module.exports = router;