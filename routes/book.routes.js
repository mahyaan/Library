const router = require('express').Router();
const Book = require('../model/Book');
const controller = require('../controllers/book.controller');


//Get All BOOKs
router.get('/', controller.getBooks);


//Get BOOK by ID
router.get('/:id' ,controller.getBookById);

//Register new Book
router.post('/', controller.addBook);

//Edit Book with ID
router.put('/:id', controller.editBook);

//Delete BOOK WITH ID
router.delete('/:id', controller.deleteBook);


module.exports=router;

