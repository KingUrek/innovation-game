const express = require('express');
const productController = require('../controller/product');
const comboController = require('../controller/combos');
const upload = require('../services/upload');
const userController = require('../controller/user');

const router = express.Router();

router.get('/products', productController.getAllProducts);
router.get('/products/:id', productController.getProductById);
router.get('/combos', comboController.getAllcombos);
router.get('/combos/:id', comboController.getcomboById);
router.post('/static', upload.single('file'), userController.saveAvatar);
router.post('/subscribe', userController.subscribe);

module.exports = router;
