const { ObjectID } = require('mongodb');
const connection = require('../services/connection');

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
