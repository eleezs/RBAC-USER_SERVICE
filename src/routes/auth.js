const express = require('express');
const authRouter = express.Router();
const passport = require('passport')
const { googleCallbackSuccess, googleCallbackFailure } = require('../controller/authController');
require('../helper/passportConfig')(passport)

// Auth Routes
// login User
authRouter.route('/user/login', verifySignUp).post(validate(validations('loginUser')), AuthController.login);

// Logout User
authRouter.get('/user/logout', AuthController.logout);

authRouter.get('/google', passport.authenticate("google", { scope: ["email", "profile"] } ))

authRouter.get('/google/callback', passport.authenticate('google', {
    successRedirect: '/auth/google/callback/success',
    failureRedirect: '/auth/google/callback/failure'
}))

//on success
authRouter.get('/google/callback/success', googleCallbackSuccess)

//on failure
authRouter.get('/google/callback/failure', googleCallbackFailure)

module.exports = router;