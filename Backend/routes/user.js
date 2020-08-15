const express = require('express');

const { createUser, loginUser } = require('../controller/user');

const router = express.Router();

router.get('/login', loginUser);
router.post('/create', createUser);

module.exports = router;
