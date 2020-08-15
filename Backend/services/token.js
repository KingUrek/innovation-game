const jwt = require('jsonwebtoken');
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
  const { name, email } = payload
  if (!name || !email) throw new Error('InvalidToken')
}
