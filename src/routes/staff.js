const express = require('express');
const { createRole, assignRole, createGroupAccess, deactiveOrActiveGroupAccess, addMembersToGroup } = require('../controller/staff');
const { createUserAccess, getAllUsers, getUserById, deleteUser } = require('../controller/userController');
const { verifyToken } = require('../middleware/authenticate');

const { validate, valid_id_param, create_role, assign_role, admin_update_user_access, deactive_or_active_group_access, add_members_to_group } = require('../middleware/validator');
jwtAuth
const { verifyUserRole } = require('../middleware/verifyUserRole');
const staffRouter = express.Router();

// update a User access
staffRouter.put('/update/user-access', verifyUserRole(), validate(admin_update_user_access),  createUserAccess);

// Retrieve all Users
staffRouter.get('/users/all', verifyUserRole(), getAllUsers);

// Retrieve a single user with id
staffRouter.get('/user/find/:id', verifyToken, verifyUserRole(), validate(valid_id_param), getUserById);

// Delete a User with id
staffRouter.delete('/user/delete/:id', verifyToken, verifyUserRole(), validate(valid_id_param), deleteUser);

// create role
staffRouter.post('/role/create', verifyToken, verifyUserRole(), validate(create_role), createRole)

//assign roles
staffRouter.post('/role/assign', verifyToken, verifyUserRole(), validate(assign_role), assignRole)

// creaate access group
staffRouter.post('/access-group/create', verifyToken, verifyUserRole(), validate(assign_role), createGroupAccess)

//deactive or activate access group
staffRouter.put('/update-group-access-status/:accessGroupId', verifyToken, verifyUserRole(), validate(deactive_or_active_group_access), deactiveOrActiveGroupAccess)

//add user to group
staffRouter.post('/add-member-to-group/:accessGroupId', verifyToken, verifyUserRole(), validate(add_members_to_group), addMembersToGroup)

module.exports = staffRouter;