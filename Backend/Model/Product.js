const mongoose = require("mongoose");

const Products = new mongoose.Schema({
    Product_name : {type:String, required:true ,trim:true},
    Product_price: {type :Number, required:true ,trim:true},
    Product_description:{type:String , required:true},
    Product_image:{type:String , required:true}
   
},{timestamps:true});

module.exports= mongoose.model("PRODUCTS", Products);