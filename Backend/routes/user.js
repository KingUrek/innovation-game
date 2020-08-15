const express = require('express');

const { createUser, loginUser } = require('../controller/user');
const validateFields = require('../middlewares/validateFields');
const { TYPE_VALIDATE_LOGIN, TYPE_VALIDATE_CREATE_USER } = require('../services/enum/validate');

const router = express.Router();

router.get('/login', validateFields(TYPE_VALIDATE_LOGIN), loginUser);
router.post('/create', validateFields(TYPE_VALIDATE_CREATE_USER), createUser);

module.exports = router;
