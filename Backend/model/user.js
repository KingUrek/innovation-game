const connection = require('../services/connection');
const { ERROR_INVALID_USER } = require('../services/enum/errors');

exports.createOneUser = async (data) => {
  const db = await connection();
  const value = await db.collection('Users').insertOne(data);
  return value;
};

exports.findOne = async (data) => {
  const db = await connection();
  const { email, password } = data;
  const value = await db.collection('Users').findOne({ email: email, password: password });
  if (!value) {
    const newError = new Error()
    newError.name = ERROR_INVALID_USER;
    throw newError;
  }
  return value
}

exports.addSubscribe = async (data) => {
  const db = await connection();
  const { email, combo, address } = data;
  const value = await db.collection('Users').findOneAndUpdate({
    email: email,
  },
    {
      $set: {
        subscribe: {
          combo,
          address,
        },
      },
    },
  );
  return value
}
