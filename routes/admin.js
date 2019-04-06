const path = require('path');

const express = require('express');

const router = express.Router();
const rootDir = require('../util/path');

// /admin/add-product => GET
router.post('/patientinfo', (req, res, next) => {
  res.render('patientinfo',{pageTitle:'Patient Information',path:''});
});
router.get('/patientinfo', (req, res, next) => {
  res.render('patientinfo',{pageTitle:'Patient Information',path:''});
});

// /admin/add-product => POST
router.post('/details', (req, res, next) => {
  res.render('confirm',{pageTitle:'Patient Details',path:''});
});

module.exports = router;