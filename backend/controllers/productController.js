const Product = require("../models/product");

// Create new product
exports.newProduct = async(req, res, next) => {
    const product = await Product.create(req.body);
    res.status(201).json({
        success: true,
        product
    })
}

// Get all products => /api/v1/products
exports.getAllProduct = async(req, res, next) => {
    const products = await Product.find()
    res.status(200).json({  
        success: true,
        count: products.length,
        products
    })
}

// Get single product