const router = require('express').Router();
const bcrypt = require('bcryptjs');
const User = require('../model/User');
const jwt = require('jsonwebtoken');
const privateKey = require('../config').secretKey;

router.post('/login', async (req, res) => {
    const {Email , Password} = req.body;
    if(!Email || !Password){
        res.send({
            status: false,
            msg: 'pls provide tha corect data'
        });
    }else{
         const user = await User.findOne({Email} );
         if(!user){
            return res.send({
                status:false,
                msg: 'User not found!'
            });
         } else{
             //found user
            user.comparePassword(Password, function(err, isMatch){
                if(isMatch){
                    //JWT
                    jwt.sign({email:user.Email}, privateKey , {expiresIn:'12h'}, function (err,token){
                       
                     if(!err){
                        res.send({

                            token
                        });
                     }   
                      
                    })
                }else{
                    res.send("you can't login");
                }
            });
        }
    }
});

module.exports = router;