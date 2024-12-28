// imported files
const express = require("express");
const app = express();
require("dotenv").config();
const mongoose = require("mongoose")


// define the port
const port = process.env.PORT 


// MIDDLEWARE APP
app.use(express.urlencoded({extended: true}));
app.use(express.json({}));

//mongoose connections
mongoose.connect(process.env.CONN_STR, {
    useNewUrlParser: true
}).then((conn) =>{
        console.log(conn);
        console.log("Database connection established");
    }
).catch((error) => {
    console.log("Some error has occured")
});




// port
   app.listen (port, () => {
    console.log("server is listening on port " + port);
    
 });


require("./startup/routes")(app)


 // GET REQUEST METHOD

//  app.get("/students", (req, res, next)=> {
//     const studentDetails = {
//         name: "Shola Akinbande",
//         age: 34,
//         address: "345"
//     }
//     res.send(studentDetails);
// })

app.get("/new", (req, res, next) => {
    const adewale = {
        name: "Shola Akinbande",
        age: 34,
        address: "345",
        dob: "12/23/90"

    }
    res.send(adewale);
  
}

)
// or

// const students =  (req, res, next) => {
//     const studentDetails = {
//         name: "shola Akinbande",
//         school: "bbhs",
//         age: 34,

//     }
//     res.send(studentDetails);
// }
// app.get("/age", students)

// home page get request
// app.get("/home", (req, res) => {
//     res.render("home");
// })






// POST REQUEST
app.post("/register", (req, res) => {

    const newdetails = {
        fullName: "shola",
        age: 34,
    }

    res.send(
        {
            newdetails,
            newmessage: "registration is successful"
        } );

})


// PUT REQUEST

// app.post("/newuser", (req, res, next) => {

//     res.send("You are powerfully welcome")
// })

// app.post("/thanks", (req, res, next) => {
//     res.send("Thanks for choosing us amidst others!")
// })

// // PUT REQUEST
// app.put('/update', (req, res, next) => {

//     const fullName = req.body.fullName
//     const age = req.body.age
//     const address = req.body.address

//     const userdetails = {
//         fullName: fullName,
//         age: age,
//         address: address,
//         email: "gabriel@gmail.com",
//         password: 12345,
        

//     }
//     res.send({
//         userdetails,
//         msg: "update user details successfully"
//     }
//     )

// }

// )

// // ANOTHER EXAMPLE OF PUT REQUEST
// app.put('/update', (req, res, next) => {
//     const school = req.body.school;
//     const dateofbirth = req.body.dateofbirth


//     const fulldetails = {
//         firstName: "Shola",
//         Surname: "AKinbande",
//         school: school,
//         dateofbirth: dateofbirth
//     }

// })


// put request
// app.put("/registe", (req, res, next) => {
//     const registration = {
//         console.log("Your registration is now ready")

//     }
//     res.send()
// })



 







// // BACKEND
// function addNum(a,b){
//     return a + b
// }

// console.log(addNum(2,7))
// console.log(addNum(2,10))
// console.log(addNum(10,10))
// console.log(addNum(10,10))
