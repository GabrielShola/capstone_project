const express = require('express');
const router = express.Router();


router.get("/register", (req, res, next) => {
    

    res. send("Thanks for signing with us!")

})

router.post("/register", (req, res, next) => {
    res.status(201).json("post successful!");
})


router.put("/update", (req, res, next) => {
    res.send(
        {
            msg: "Your products update is ok",
            status: "success"
        }
    )
})


router.delete("/delete", (req, res, next) => {
    res.send("Products deleted successfully!")
})

module.exports = router;