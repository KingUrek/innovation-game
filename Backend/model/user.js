const connection = require('../services/connection');

exports.createOneUser = async ({ data }) => {
  try {
    const { name, email, password, bornDate, address } = data;
    const db = await connection();
    return await db.collection('User').insertOne(data);
  } catch (err) {
    throw err;
  }
};
