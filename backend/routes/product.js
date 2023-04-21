const express = require("express");
const router = express.Router();

const {getAllProduct, 
    newProduct, 
    getSingleProduct, 
    updateProduct, 
    deleteProduct} = require("../controllers/productController");

router.get("/products", getAllProduct);

// Create new Product
router.post("/admin/product/new", newProduct);

// Get Single Product
router.get("/product/:id", getSingleProduct);

// Update product
router.put("/admin/product/:id", updateProduct);

// Delete Product
router.delete("/admin/product/:id", deleteProduct);

module.exports = router;

console.log("hello");