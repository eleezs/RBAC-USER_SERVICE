const express = require('express');
const { createRole, assignRole } = require('../controller/staff');
const { createUserAccess, getAllUsers, getUserById, deleteUser } = require('../controller/userController');
const { validate, create_user_access, valid_id_param, create_role, assign_role } = require('../middleware/validator');
const { verifyUserRole } = require('../middleware/verifyUserRole');
const staffRouter = express.Router();

// Create a User access
staffRouter.post('/create/user-access', verifyUserRole(req.user.id), validate(create_user_access),  createUserAccess);

// Retrieve all Users
staffRouter.get('/users/all', verifyUserRole(req.user.id), getAllUsers);

// Retrieve a single user with id
staffRouter.get('/user/find/:id', [authJwt.verifyToken], verifyUserRole(req.user.id), validate(valid_id_param), getUserById);

// Delete a User with id
staffRouter.delete('/user/delete/:id', authJwt.verifyToken,verifyUserRole(req.user.id), validate(valid_id_param), deleteUser);

// create role
staffRouter.post('/role/create', [authJwt.verifyToken], verifyUserRole(req.user.id), validate(create_role), createRole)

//assign roles
staffRouter.post('/role/assign', [authJwt.verifyToken], verifyUserRole(req.user.id), validate(assign_role), assignRole)

module.exports = staffRouter;