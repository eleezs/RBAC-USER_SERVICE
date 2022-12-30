const express = require('express');
const staff = require('./staff');
const user = require('./user');
const auth =  require('./auth');
const { verifyToken } = require('../middleware/authenticate');

const router = express.Router();

router.use('/user', verifyToken, user);
router.use('/staff', verifyToken, staff);
router.use('/auth', auth);

module.exports = router;

