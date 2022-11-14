const express = require('express');
const router = require('.');
const { createUser, updateUserBio, secureUserAccount } = require('../controller/userController');
const { validate, create_user, update_user_bio, secure_user_account } = require('../middleware/validator');
const userRouter = express.Router();

// Create a new User
userRouter.post('/create', validate(create_user),  createUser);
userRouter.post('/update/bio', validate(update_user_bio), updateUserBio)
userRouter.post('/secure/user-account', validate(secure_user_account), secureUserAccount)

module.exports = userRouter;
