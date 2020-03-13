

const router = require('express').Router();
const Customer = require('../model/Customer');
const controller = require('../controllers/customer.controller');


router.get('/' , function(req,res){
    controller.getCustomer;
});

router.get('/:id' , function(req,res){
    controller.getCustomers;
});

module.exports= router;