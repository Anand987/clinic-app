const path = require('path');

const express = require('express');

const router = express.Router();
const rootDir = require('../util/path');

// /admin/add-product => GET
router.get('/patientinfo', (req, res, next) => {
  res.sendFile(path.join(rootDir, 'views', 'patientinfo.html'));
});

// /admin/add-product => POST
router.post('/moredetails', (req, res, next) => {
  console.log(req.body);
  res.sendFile(path.join(rootDir, 'views', 'confirm.html'));
});

module.exports = router;