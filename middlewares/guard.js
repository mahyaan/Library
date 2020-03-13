const jwt = require('jsonwebtoken');
const privateKey = require('../config').secretKey;

module.exports = function(req,res,next){
  const { auth } = req.headers;
  if(!auth){
    res.send('Authentication ERROR');
  }else{
      jwt.verify(auth,privateKey,function(err, verify){
        if(err) res.send('Authentiocation Error');
        if(verify){
            next();
        }
      });
  }
}