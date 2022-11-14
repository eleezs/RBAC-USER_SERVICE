const express = require('express');
const { createUserAccess, getAllUsers, getUserById, deleteUser } = require('../controller/userController');
const { validate, create_user_access, validIdParam } = require('../middleware/validator');
const staffRouter = express.Router();

// Create a User access
staffRouter.post('/create/user-access', validate(create_user_access),  createUserAccess);

// Retrieve all Users
staffRouter.get('/users/all', getAllUsers);

// Retrieve a single user with id
staffRouter.get('/user/find/:id', [authJwt.verifyToken], validate(validIdParam), getUserById);

// Delete a User with id
staffRouter.delete('/user/delete/:id', authJwt.verifyToken, validate(validIdParam), deleteUser);

module.exports = staffRouter;
