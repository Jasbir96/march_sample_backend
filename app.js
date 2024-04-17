const express = require("express");
const dotenv = require("dotenv");

dotenv.config();

console.log(process.env.MESSAGE);


const app = express();
app.get("/",function(req,res){
    res.send("<h1>Hello from server</h1>")
})
app.listen(3000, () => {
    console.log("listening at port " + process.env.PORT)
})

