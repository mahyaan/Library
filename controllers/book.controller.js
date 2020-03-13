
const controller ={}
const Book = require('../model/Book');

controller.getBooks = async(req,res)=>{
    var perpage = 5;
    var page = req.params.page || 1;

    try{
    const Books = await Book.find({})
    .skip((perpage*page)- perpage)
    .limit(perpage)
    .exec(function(err,product){
        Book.count().exec(function(err,count){
            if(err) return res.send('error');
            res.render('../views/index',{
                books: Books,
                current: page,
                pages: Math.ceil(count/perpage)
            })
        })

    })
    // res.json(Books);
    } catch(E){
        res.send('ERROR \n' , E);
    }
}

controller.getBookById = async (req,res)=>{
   
    const {id} =req.query; 
    if(id){
       try{
         const foundBook = await User
         .findById(id, {_id:0});
         res.send(foundBook);
       } catch(e){
           res.send('ERROR...');
       }
 
    }else{
        res
        .status(500)
        .send({
            status: 500,
            message: 'pls provide book id',
            data: {}
        })
    }
 }


 controller.addBook = (req,res)=>{
    const newBook = new Book(req.body);
    newBook
    .save()
    .then(bk =>{
        res.send(bk);
    })
    .catch(e =>{
        res.send('ERROR' ,e);
    })
}

controller.editBook = async (req,res)=>{
    const {id} = req.params;
    try{
        const newBook = await Book.findByIdAndUpdate(id,req.body,{upsert: true, new: true});
        res.json(newBook);
    } catch(E){
        res.send('ERROR', E);
    }
}


controller.deleteBook = async (req,res)=>{
    const {id} = req.params;
    try{
        const deleteBook = await Book.findByIdAndDelete(id);
        res.send(deleteBook);
    }catch(E){
        res.send('ERROR', E);
    }
}

 module.exports = controller;