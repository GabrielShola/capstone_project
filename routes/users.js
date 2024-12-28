const express = require("express");
const router = express.Router();

router.post("/register", (req, res, next) => {

    res.status(201).json("Your registration is sucessful");
})

router.get("/register", (req, res, next) => {
    const adewale = {
        name: "Shola Akinbande",
        age: 34,
        address: "345",
        dob: "12/23/90",
        location: "Abeokuta Ogun state"

    }
    res.status(200).json(
        {
            adewale,
            msg: adewale.name, "Your registration is sucessful":
             "success"
        }
    );
  
}

)

router.put("/update", (req, res, next) => {
    res.send("Your updated registration is ok")
})

router.delete("/delete", (req, res, next) => {
    res.send("You are not permitted to delete this registration!")
})

module.exports = router;    






// const name = "Damilola";
// const age = 34

// function addNumber (a,b){
//     return a + b

// }

// module.exports = { name, age};

