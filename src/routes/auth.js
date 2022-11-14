const express = require('express');
const authRouter = express.Router();
const AuthController = require('../controllers/AuthController');


// Auth Routes
// login User
router.route('/user/login', verifySignUp).post(validate(validations('loginUser')), AuthController.login);

// Logout User
router.get('/user/logout', AuthController.logout);






module.exports = router;