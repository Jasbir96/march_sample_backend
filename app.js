const express = require("express");
const dotenv = require("dotenv");
dotenv.config();

console.log(process.env.MESSAGE);
const app = express();
app.listen(3000, () => {
    console.log("listening at port " + process.env.PORT)
})

