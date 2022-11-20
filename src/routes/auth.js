const express = require('express');
const authRouter = express.Router();
const {  googleSignUp, login, logout } = require('../controller/authController');
const { login_parameters, validate } = require('../middleware/validator');

require('dotenv');

// Auth Routes
// login User
authRouter.get('/user/login', validate(login_parameters), login);

// Logout User
authRouter.get('/user/logout', logout);

// Getting google login URL
authRouter.get("/google/url", googleSignUp);

// authRouter.get("/google/callback", login)
module.exports = authRouter;