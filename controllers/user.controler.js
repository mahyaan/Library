
const controller = {};
const User = require('../model/User');


controller.getUsers = async (req,res)=>{
    // res.send('List of Users');
    try{
        const users =await User.find({});
        res.json(users);
    } catch (E) {
      console.log(E);
      res.send('ERROR \n',E);
    }
  } 

controller.getUser= async (req,res)=>{
   
    const {id} =req.query; 
    if(id){
       try{
         const foundUser = await User.findById(id, {_id:0});
         res.send(foundUser);
       } catch(e){
           res.send('ERROR Getting User');
       }
 
    }else{
        res
        .status(500)
        .send({
            status: 500,
            message: 'pls provide user id',
            data: {}
        })
    }
 }

 controller.RegistreUser = async (req,res)=>{
    try{
        const {Password, Email} = req.body;
        if(!Password || !Email){
            res.send({
                status:false,
                msg: "Please Provide the correct data"
            });
            
        }else if(Password.length < 6){
            return res.send({
                 status:false,
                 msg: 'Password must be at least 6 charachters'
             });
         }
        else{
         
            const newUser = await new User(req.body).save();
            res.send(newUser);
        }        
    }catch (E) {
        res.send("Error");
    }

}

controller.EditUser = async (req,res)=>{
    //res.send('Edite User with ID ' + req.params.id);
    const {id} = req.params;
    try{
        const newUser = await User.findByIdAndUpdate(id,req.body, {upsert: true, new:true});
        res.json(newUser);
    } catch(E){
        res.send('ERROR',E);  
    }
}

controller.DeleteUser = async (req,res)=>{
    const {id} = req.params;    
    try{
     const deletedUser = await User.findByIdAndDelete(id);
     res.json(deletedUser);
    }catch(E){
        res.send('ERROR',E);
    }
 }


 module.exports = controller;