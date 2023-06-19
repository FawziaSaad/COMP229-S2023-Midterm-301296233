/* 
    Filename: books.js
    Name: Fawzia Saad
    StudentID: 301296233
    Wep app: COMP229-S2023-Midterm-301296233
*/

let mongoose = require('mongoose');

//Create a model class
let Book = mongoose.Schema({
    title: String,
    description: String,
    price: Number,
    author: String,
    genre: String
},
{
  collection: "books"
});

module.exports = mongoose.model('Book', Book);
