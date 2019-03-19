const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const adminroutes = require("./routes/admin");
const userroutes = require("./routes/user");

app.use(bodyParser.urlencoded({extended:false}));

app.use(adminroutes);
app.use(userroutes);

//Error Page
app.use((req,res) => {
    res.status(404).send("<h1>page not found</h1>");
})

app.listen(3000,(req,res) => {
    console.log("Server started at port 3000");
})