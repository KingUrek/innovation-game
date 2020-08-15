const jwt = require('jsonwebtoken');
const { ERROR_INVALID_TOKEN } = require('./enum/errors');
require('dotenv').config();
const secret = process.env.JWT;

exports.generateToken = (payload) => {
  const jwtConfig = {
    expiresIn: '3d',
    algorithm: 'HS256',
  };
  const token = jwt.sign(payload, secret, jwtConfig);
  return token;
}

exports.getPayload = (token) => {
  return jwt.verify(token, secret);
}

exports.formatPayload = (payload) => {
  const { name, email, _id } = payload
  if (!name || !email, !_id) {
    const newError = new Error();
    newError.name = ERROR_INVALID_TOKEN;
    throw newError;
  }
}
