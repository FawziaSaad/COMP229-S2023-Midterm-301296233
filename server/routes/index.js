/* 
    Filename: index.js
    Name: Fawzia Saad
    StudentID: 301296233
    Wep app: COMP229-S2023-Midterm-301296233
*/

// Modules required for routing
let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

//Define the game model
let book = require('../models/books');

/* GET home page. wildcard */
router.get('/', (req, res, next) => {
  res.render('content/index', {
    title: 'Home',
    books: ''
   });
});

module.exports = router;
