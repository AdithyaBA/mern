const Product = require("../models/product");
const Errorhandler = require("../utils/errorHandle");
const catchAsyncErrors = require("../middlewares/catchAsyncError");

// Create new product
exports.newProduct = catchAsyncErrors (async(req, res, next) => {
    const product = await Product.create(req.body);
    res.status(201).json({
        success: true,
        product
    })
    next();
})

// Get all products => /api/v1/products
exports.getAllProduct = catchAsyncErrors(async(req, res, next) => {
    const products = await Product.find()
    res.status(200).json({  
        success: true,
        count: products.length,
        products
    })
})

// Get single product
exports.getSingleProduct = catchAsyncErrors (async(req, res, next) => {
    const product = await Product.findById(req.params.id);
    if(!product){
        return next(new Errorhandler("Product not found", 404));
    }
    res.status(200).json({
        product
    })
})

// Update product
exports.updateProduct = catchAsyncErrors (async(req, res, next) => {
    let product = await Product.findById(req.params.id);
    if(!product){
        // res.status(400).json({
        //     success: false,
        //     message: "Unable to update product"
        // })
        return next(new Errorhandler("Product not found", 404));
    }
    product = await Product.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidator: true,
        useFindAndModify: false
    })
    res.status(200).json({
        success: true,
        product
    })
    next();
})

// Delete product
exports.deleteProduct = catchAsyncErrors (async(req, res, next) => {
    const product = await Product.findById(req.params.id)
    if(!product){
        // res.status(400).json({
        //     success: false,
        //     message: "Unable to delete product"
        // })
        return next(new Errorhandler("Product not found", 404));
    }
    await product.deleteOne()
    res.status(200).json({
        message: "Product is deleted"
    })
})