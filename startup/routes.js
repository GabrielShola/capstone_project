const userRoute = require("../routes/users")
const productsRoute = require("../routes/products")
const sellerRoute = require("../routes/sellers")
const paymentRoute = require("../routes/payments")


module.exports = (app)=> {

    // set cors

    app.use((req, res, next) => {
        res.header("Access-Control-Allow-Origin", "*");
        res.header(
            "Access-Control-Allow-Headers",
            "Origin, X-Requested-With, Content-Type, Accept, Authorization")
            if (req.method === "OPTIONS"){
                res.header("Access-Control-Allow-Methods", "PUT, GET, PATCH, DELETE");
                return res.status(200).json({});
    
            }
            next();
    
        });
    
    app.use("/users", userRoute)
    app.use("/products", productsRoute)
    app.use("/sellers", sellerRoute)
    app.use("/payments", paymentRoute)

}
