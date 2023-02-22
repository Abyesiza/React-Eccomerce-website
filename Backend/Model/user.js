const mongoose = require("mongoose");

const User = new mongoose.Schema({
    name : {type:String, required:true ,unique:true,trim:true},
    password:{type:String,required:true ,trim :true, unique:true},
    email:{type:String,required:true, trim:true, unique:true}
    
},{timestamps:true});

module.exports= mongoose.model("user", User);