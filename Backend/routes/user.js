const express = require('express');

const { createUser, loginUser, addSubscribe } = require('../controller/user');
const validateFields = require('../middlewares/validateFields');
const { TYPE_VALIDATE_LOGIN, TYPE_VALIDATE_CREATE_USER, TYPE_VALIDATE_ADDRESS } = require('../services/enum/validate');
const validateToken = require('../middlewares/validateToken');

const router = express.Router();

router.get('/login', validateFields(TYPE_VALIDATE_LOGIN), loginUser);
router.post('/create', validateFields(TYPE_VALIDATE_CREATE_USER), createUser);
router.post('/subscribe', validateToken, validateFields(TYPE_VALIDATE_ADDRESS), addSubscribe);

module.exports = router;
