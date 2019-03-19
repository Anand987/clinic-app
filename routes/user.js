const path = require('path');

const express = require('express');

const router = express.Router();
const rootDir = require('../util/path');

router.get('/', (req, res, next) => {
  res.sendFile(path.join(rootDir, 'views', 'home.html'));
});
router.get('/about', (req, res, next) => {
  res.sendFile(path.join(rootDir, 'views', 'about.html'));
});
router.get('/login', (req, res, next) => {
  res.sendFile(path.join(rootDir, 'views', 'login.html'));
});

module.exports = router;