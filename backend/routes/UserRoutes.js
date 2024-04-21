const express=require('express');
const router=express.Router();
const {registerUser}=require('../controller/UserController');
router.route('/signup').post(registerUser);
module.exports=router;