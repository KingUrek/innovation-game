const { ObjectID } = require('mongodb');
const connection = require('../services/connection');

async function getAllCombos() {
  const db = await connection();
  return db.collection('Combos').find({}).toArray();
}

async function getComboById(id) {
  const db = await connection();
  return db.collection('Combos').findOne({ _id: ObjectID(id) });
}

module.exports = { getAllCombos, getComboById };
