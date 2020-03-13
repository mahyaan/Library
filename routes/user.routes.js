const router = require('express').Router();
const User = require('../model/User');
const controller = require('../controllers/user.controler');
const guard = require ('../middlewares/guard');

//LIST
router.get('/',controller.getUsers);

//Get User with ID 
router.get('/:id' ,guard, controller.getUser );

//Store new User
router.post('/', guard,controller.RegistreUser);

//Edite User with ID
router.put('/:id', guard,controller.EditUser);

//Delete User with ID
router.delete('/:id' ,guard,controller.DeleteUser);

module.exports = router;