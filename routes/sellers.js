const express = require("express");
const router = express.Router();

router.post('/register', (req, res, next)=>{
    res.send("You are a good seller!");
})

router.post('/register', (req, res, next)=>
{
    res.send("You are good to go!")
})

router.put("/update", (req, res, next) => {
    res.send("Your sellers updated registration is ok")
})

router.delete("/delete", (req, res, next) => {
    res.send("You are automatically deleted as a seller!")
})

module.exports = router; 