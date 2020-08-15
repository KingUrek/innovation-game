const connection = require('../services/connection');

exports.createOneUser = async (data) => {
  const db = await connection();
  const value = await db.collection('Users').insertOne(data);
  return value;
};
