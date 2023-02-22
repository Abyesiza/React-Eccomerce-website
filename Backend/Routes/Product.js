const router = require("express").Router();
let Products = require("../Model/Product");
const multer = require("multer");
const path = require("path");

const storageImage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'./ecormerce/public/uploads')
    },
    filename: (req,file,cb)=>{
        cb(null,file.originalname)
    }
});
// const filefilter = (req,file,cb)=>{
//     if(file.mimetype === "image/png" || file.mimetype === "image/jpg" ||file.mimetype === "image/jpeg"){
//         cb(null, true)
//     }else{
//         cb(null, false)
//     }
// }
const upload = multer({storage:storageImage });

// const singleFileUpload = async (req , res , next) => {
//     try {
       
//         const file = req.file;
//         res.status(201).send("File uploaded successfully")

//     } catch (error) {
//         res.status(400).send(error.message);
//     }
// }


router.route("/").get((req,res)=>{
    Products.find()
    .then(products => res.json(products))
    .catch(error=>{
        res.status(400).json("error :" + error)
    })
});
router.post("/add",upload.single('fileImage'),(req,res)=>{
    const Product_name = req.body.Product_name;
    const Product_price = Number(req.body.Product_price);
    const Product_description = req.body.Product_description;
    const Product_image = req.file.originalname;
   
    const newPRODUCTS = new Products({Product_name,Product_price,Product_description,Product_image});
    newPRODUCTS.save().then(()=>res.json("Product added")).catch(
        error=>{
            res.status(400).json("error :" + error) 
        })
})

module.exports = router;