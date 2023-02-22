const express = require("express");
const path = require("path")
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();


const app = express();
app.use(cors());

app.use("uploads",express.static(path.join(__dirname,"uploads")));

app.use((error, req, res, next) => {
    console.log('This is the rejected field ->', error.field);
  });

app.use(express.json());
const port = process.env.PORT;

app.get("/",(req,res)=>{
    console.log("get request")
   res.json("First request vvv ")
});


mongoose.connect(process.env.MONGO_DB,{useNewUrlParser:true},{useUnifiedTopology:true}).then(()=>{
    console.log("connection established")
}).catch((error)=>console.log(error));

const userRouter = require("./Routes/user");
const productRouter = require("./Routes/Product");

app.use("/users",userRouter);
app.use("/products",productRouter);


app.listen(port,()=>{
    console.log("listening on port 5000")
})