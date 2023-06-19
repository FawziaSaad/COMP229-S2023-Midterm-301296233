// modules required for routing
let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// define the book model
let book = require('../models/books');


/* GET books List page. READ */
router.get('/', (req, res, next) => {
 // find all books in the books collection
 book.find( (err, books) => {
   if (err) {
     return console.error(err);
   }
   else {
     res.render('books/index', {
       title: 'Books',
       books: books
     });
   }
 });


});


//  GET the Book Details page in order to add a new Book
router.get('/add', (req, res, next) => {


   /*****************
    * ADD CODE HERE *
    *****************/
   try {
    res.render('books/details', 
    
    {title: 'Add Book',
    books: book()})
    } catch (err){
        console.log(err);
    }
});


// POST process the Book Details page and create a new Book - CREATE
router.post('/add', (req, res, next) => {


   /*****************
    * ADD CODE HERE *
    *****************/
   let newBook = book({
    "title": req.body.title,
    "description": req.body.description,
    "price": req.body.price,
    "author": req.body.author,
    "genre": req.body.genre
});

try {
    newBook.save();
    res.redirect('/books')
} catch (err) {
    console.log(err);
    res.status(500).send(err);
}
});


// GET the Book Details page in order to edit an existing Book
router.get('/edit/:id', async (req, res, next) => {


   /*****************
    * ADD CODE HERE *
    *****************/
   let id = req.params.id;

    try {
        let bookToEdit = await book.findById(id);
        res.render('books/details', 
        {title: 'Edit Book', 
        books: bookToEdit});
    } catch (err){
        console.log(err);
        res.status(500).send(err);
    }
});


// POST - process the information passed from the details form and update the document
router.post('/edit/:id', async (req, res, next) => {


   /*****************
    * ADD CODE HERE *
    *****************/
   let id = req.params.id;

    let updatedBook = {
      "title": req.body.title,
      "description": req.body.description,
      "price": req.body.price,
      "author": req.body.author,
      "genre": req.body.genre
    };

    try {
        await book.updateOne({_id: id}, updatedBook);
        res.redirect('/books');
    } catch (err){
        console.log(err);
        res.status(500).send(err);
    }

});


// GET - process the delete by user id
router.get('/delete/:id', async (req, res, next) => {


   /*****************
    * ADD CODE HERE *
    *****************/
   let id = req.params.id;

  try {
      await book.findByIdAndRemove(id);
      res.redirect('/books');
  }catch (err){
      console.log(err);
      res.status(500).send(err);
  }
});

module.exports = router;