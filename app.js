const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");

const app = express();
//Setting Template Engine -> EJS, with files to set location view folder
app.set('view engine','ejs');
app.set('views','views');

const adminroutes = require("./routes/admin");
const userroutes = require("./routes/user");

app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,'public')));

app.use('/admin',adminroutes);
app.use(userroutes);

//Error Page
app.use((req, res, next) => {
    res.status(404).render('404');
});

app.listen(3000,(req,res) => {
    console.log("Server started at port 3000");
});