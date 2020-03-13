//UserModel

//define Model in Mogoose

const mongoose = require ('../bootstrap/db');
var bcrypt = require('bcryptjs');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    Name : {type:String , require: true},
    Family: {type: String},
    Email: {type:String ,require: true, unique:true },
    Age : {type:Number , required: false , min: 10 , max: 100},
    Password : {type: String , minlength: 6 },
    Book : {type: Number} 
}, {
    timestamps: true
});

UserSchema.methods.comparePassword = function(Password,cb){
    const user=this
    bcrypt.compare(Password,user.Password,function(err,isMatch){
        if(isMatch){
           cb(null, isMatch);
        }else{
            cb('Error',false);
        }
    });
};

UserSchema.pre('save', function(next){
    const user = this;
   // const newPassword = ''
    bcrypt.genSalt(10, function(error,salt){
        if(error){
           next(error);                   
        }
        bcrypt.hash(user.Password,salt, function(error, encryptedPass){
            
            user.Password= encryptedPass;
            //HOOK mongo
            next();
          
        }); 
     
    })
  
})


module.exports = mongoose.model('user', UserSchema);