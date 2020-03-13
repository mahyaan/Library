const controller ={};

 const Customer = require('../model/Customer');
 const User = require('../model/User');
 const Book =  require('../model/Book');


controller.getCustomer = async(req,res) =>{
    try{
        const customers = await Customer
        .find()
        .populate('Books');
        res.json(customers);
    }catch(e){
        res.send('Error',e);
    }
};


controller.getCustomers = async(req,res) => {
     const {id} = req.query;
     if(id){
        try{
            const foundCustomer = await Customer
            .findById({id})
            .populate('Book');
            res.send(foundCustomer);
        }catch(e){
            res.send('error');
        }
     }else{
         res
         .status(500)
         .send({
             status: 500,
             msg:'Customer not found',
             data:{}
         })
     }
     
};