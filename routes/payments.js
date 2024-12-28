const express = require("express");
const router = express.Router();

router.get('/register', (req, res, next) => {
    res.send("Your payment is successfully")
})


router.get("/regis", (req, res, next)=> {
    res.send("continue you are safe")
})

router.post("/register", (req, res, next) => {
    res.send ("post successful!");
})


router.put("/update", (req, res, next) => {
    res.send("Your payment is updated")
})

router.delete("/delete", (req, res, next) => {
    res.send("payment is deleted")
})
module.exports = router; 