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
