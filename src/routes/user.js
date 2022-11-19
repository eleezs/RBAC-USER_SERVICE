const express = require('express');
const { createUser, updateUserBio, secureUserAccount, getCountry, getState, getCity, updateUserAddress, updateUserAccess, getPhonecode } = require('../controller/userController');
const { verifyToken } = require('../middleware/authenticate')
const { validate, create_user, update_user_bio, secure_user_account, update_user_access, valid_id_param, country, update_user_address } = require('../middleware/validator');
const userRouter = express.Router();

// Create a new User
userRouter.post('/create', validate(create_user),  createUser);

// update user bio
userRouter.post('/update/bio', validate(update_user_bio), updateUserBio)

//secure user account
userRouter.post('/secure/user-account', validate(secure_user_account), secureUserAccount)

// update username info
userRouter.put('/update/user-access', verifyToken, validate(update_user_access),  updateUserAccess);

//get country
userRouter.get('/get-country', validate(country), getCountry)

//get state
userRouter.get('/get-country-state/:id', validate(valid_id_param), getState)

//get city
userRouter.get('/get-city/:id', validate(valid_id_param), getCity)

//get phone code
userRouter.get('/get-phonecode/:id', validate(valid_id_param), getPhonecode)

//update/ create user address
userRouter.post('/address', validate(update_user_address), updateUserAddress)

module.exports = userRouter;
