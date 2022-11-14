const express = require('express');
const staff = require('./staff');
const user = require('./user');

const router = express.Router();

router.use('/user', user);
router.use('/staff', staff);

module.exports = router;