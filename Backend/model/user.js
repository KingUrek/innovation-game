const { ObjectID } = require('mongodb');
const connection = require('../services/connection');
const { ERROR_INVALID_USER } = require('../services/enum/errors');

const createOneUser = async (data) => {
  const db = await connection();
  const value = await db.collection('Users').insertOne(data);
  return value;
};


async function getUser(id) {
  const db = await connection();
  const user = await db.collection('Users').findOne({ _id: ObjectID(id) });
  return user;
}

async function saveAvatar({ id, avatar }) {
  try {
    const db = await connection();
    const value = await db.collection('Users').updateOne({ _id: ObjectID(id) }, { $set: { avatar } });
    return value;
  } catch (err) {
    return console.error(err);
  }
}

async function getUserAddress(id) {
  try {
    const db = await connection();
    const value = await db.collection('Address').findOne({ user: ObjectID(id) });
    return value;
  } catch (err) {
    return console.error(err);
  }
}

module.exports = { createOneUser, saveAvatar, getUser, getUserAddress };

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

