const express = require('express');
const productController = require('../controller/product');
const comboController = require('../controller/combos');

const router = express.Router();

router.get('/products', productController.getAllProducts);
router.get('/products/:id', productController.getProductById);
router.get('/combos', comboController.getAllcombos);
router.get('/combos/:id', comboController.getcomboById);

module.exports = router;
