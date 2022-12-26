const express = require('express');
const { createUser, updateUserBio, secureUserAccount, getCountry, getState, getCity, updateUserAddress, updateUserAccess, getPhonecode, getAllActiveRecoveryQuestion } = require('../controller/userController');
const { verifyToken } = require('../middleware/authenticate')
const { validate, create_user, update_user_bio, secure_user_account, update_user_access, valid_id_param, get_country, update_user_address, valid_id_body, get_city, get_state, get_Phone_Code } = require('../middleware/validator');
const userRouter = express.Router();

// Create a new User
userRouter.post('/create', validate(create_user),  createUser);

// update user bio
userRouter.put('/user/:id/update/bio', validate(update_user_bio), updateUserBio)

//secure user account
userRouter.post('/secure/user-account', validate(secure_user_account), secureUserAccount)

// update username info
userRouter.put('/update/user-access', verifyToken, validate(update_user_access),  updateUserAccess);

//get country
userRouter.get('/get-country', validate(get_country), getCountry)

//get state
userRouter.get('/get-country-state', validate(get_state), getState)

//get city
userRouter.get('/get-city', validate(get_city), getCity)

//get phone code
userRouter.get('/get-phonecode', validate(get_Phone_Code), getPhonecode)

//update/ create user address
userRouter.post('/address', validate(update_user_address), updateUserAddress)

//get all question
userRouter.get('/get-questions', getAllActiveRecoveryQuestion)

module.exports = userRouter;
