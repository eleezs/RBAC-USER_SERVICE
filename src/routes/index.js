const express = require('express');
const staff = require('./staff');
const user = require('./user');
const auth =  require('./auth');

const router = express.Router();

router.use('/user', user);
router.use('/staff', staff);
router.use('/auth', auth);

module.exports = router;

