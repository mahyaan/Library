

const mongoose = require ('../bootstrap/db');

const Schema = mongoose.Schema;

const CustomerSchema = new Schema({
    Name: {type:String, required:true},
    Family: {type: String},
    Qantity: {type: Number},
    Book : [{
        type: mongoose.Schema.Types.ObjectId, ref: 'Book'
    }]
    
}, {
    timestamps: true
});

module.exports = mongoose.model('customer' , CustomerSchema);


