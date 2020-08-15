const { ObjectID } = require('mongodb');
const connection = require('../services/connection');

async function getAllProducts() {
  const db = await connection();
  return db.collection('Products').find({}).toArray();
}

async function getProductById(id) {
  const db = await connection();
  return db.collection('Products').findOne({ _id: ObjectID(id) });
}

module.exports = { getAllProducts, getProductById };
