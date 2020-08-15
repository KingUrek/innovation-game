const productModel = require('../../model/product');

async function getAllProducts(req, res, next) {
  try {
    const products = await productModel.getAllProducts();
    res.status(200).send({ data: products });
  } catch (err) {
    next(err);
  }
}

async function getProductById(req, res, next) {
  try {
    const { id } = req.params;
    const product = await productModel.getProductById(id);
    res.status(200).send({ data: product });
  } catch (err) {
    next(err);
  }
}

module.exports = { getAllProducts, getProductById };
