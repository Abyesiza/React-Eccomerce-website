const router = require("express").Router();
let User = require("../Model/user");

router.route("/").get((req,res)=>{
    User.find()
    .then(users => res.json(users))
    .catch(error=>{
        res.status(400).json("error :" + error)
    })
});
router.route("/add").post((req,res)=>{
    const name = req.body.name;
    const password = req.body.password;
    const email = req.body.email;
    const newUser = new User({name,password,email});
    newUser.save().then(()=>res.json("user added")).catch(
        error=>{
            res.status(400).json("error :" + error) 
        })
})

module.exports = router;