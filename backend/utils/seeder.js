const Product = require("../models/product");
const dotenv = require("dotenv");
dotenv.config();
const connectDatabase = require("../config/database");

const product = require("../data/products.json");

// Connect to database
connectDatabase()

const seedproducts = async() => {
    try{
        await Product.deleteMany();
        console.log("Products are deleted");
        await Product.insertMany(product);
        console.log("All products are added");
        process.exit();
    }
    catch(err){
        console.log(err.message);
        process.exit();
    }
}

seedproducts()

