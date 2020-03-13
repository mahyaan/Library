

//Book Model

//define Model in Mogoose

const mongoose = require ('../bootstrap/db');

const Schema = mongoose.Schema;

const BookSchema = new Schema({
    Title: {type: String , require:true},
    Description: {type: String},
    Author: {type:String},
    Quantity: {type: Number} ,
    Customer : [{
        type: mongoose.Schema.Types.ObjectId, ref:'Customer'
    }]  
},{
    timestamps: true
});

module.exports = mongoose.model('book', BookSchema);
