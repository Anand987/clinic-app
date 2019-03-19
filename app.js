const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const adminroutes = require("./routes/admin");
const userroutes = require("./routes/user");

app.use(bodyParser.urlencoded({extended:false}));

app.use('/admin',adminroutes);
app.use(userroutes);

//Error Page
app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

app.listen(3000,(req,res) => {
    console.log("Server started at port 3000");
});