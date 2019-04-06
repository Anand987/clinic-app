const path = require('path');

const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
  res.render('home',{path:'/',pageTitle:'DOC OC'});
});
router.get('/about', (req, res, next) => {
  res.render('about',{path:'/about',pageTitle:'About Clinic'});
});
router.get('/contact', (req, res, next) => {
  res.render('contact',{path:'/contact',pageTitle:'Contact Us'});
});
router.get('/login', (req, res, next) => {
  res.render('login',{path:'/login',pageTitle:'Login'});
});

module.exports = router;