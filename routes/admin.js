const express = require("express");

const router = express.Router();

router.get('/patientinfo',(req,res) => {
    res.send("<form action='/patientinfo' method='POST'><input type='text' name='name'><button type='submit'>Submit</button></form>");
});

router.post('/patientinfo',(req,res) => {
    res.send("<h1>Patient Detail Page</h1>");
    console.log(req.body);
});

module.exports = router;