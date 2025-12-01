const mongoose = require("mongoose");


// Product schema

const productSchema = new mongoose.Schema({
    name : String,
    price : Number,
    image : String,
    // currency : String
});


// Product schema

const Product = mongoose.model("Product", productSchema);

module.exports = Product;