const { ObjectID } = require('mongodb');
const connection = require('../services/connection');

exports.createOneUser = async (data) => {
  const db = await connection();
  const value = await db.collection('Users').insertOne(data);
  return value;
};

async function saveAvatar({ id, avatar }) {
  const db = await connection();
  const value = await db.collection('Users').updateOne({ _id: ObjectID(id) }, { $set: { avatar } });
  console.log(value);
}

module.exports.saveAvatar = saveAvatar;
