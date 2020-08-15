const connection = require('../services/connection');

exports.createOneUser = async ({ data }) => {
  try {
    const db = await connection();
    return await db.collection('Users').insertOne(data);
  } catch (err) {
    throw err;
  }
};
