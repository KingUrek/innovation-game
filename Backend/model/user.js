const connection = require('../services/connection');

exports.createOneUser = async (data) => {
  const db = await connection();
  const value = await db.collection('Users').insertOne(data);
  return value
};

exports.findOne = async (data) => {
  const db = await connection();
  const { email, password } = data;
  const value = await db.collection('Users').findOne({ email: email, password: password });
  if (!value) {
    const newError = new Error()
    newError.name = 'invalidUser';
    throw newError;
  }
  return value
}
