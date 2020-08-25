const _ = require('lodash');
const { ObjectID } = require('mongodb');
const connection = require('../services/connection');

function validadeAddress(address) {
  const schema = ['street', 'street_number', 'neighborhood', 'zipcode'];
  const fields = Object.keys(address);
  return _.includes(fields, schema);
}

async function createAddress(address, user) {
  const isvalid = validadeAddress(address);

  if (!isvalid) throw new Error("Address isn't valid");
  const db = await connection();
  const value = await db.collection('Address').insertOne({ user: ObjectID(user), ...address });
  console.log(value);
  return value;
}

module.exports = { createAddress };
