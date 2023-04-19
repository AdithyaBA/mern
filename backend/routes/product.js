const express = require("express");
const router = express.Router();

const {getAllProduct, newProduct} = require("../controllers/productController");

router.get("/products", getAllProduct);

// Create new Product
router.post("/product/new", newProduct);

module.exports = router;