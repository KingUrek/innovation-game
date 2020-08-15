const serviceToken = require('../service/token');

const validateToken = async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    const payload = serviceToken.getPayload(token);
    if (!payload) throw new Error('InvalidToken');
    req.payload = payload;
    next();
  } catch (err) {
    next(err);
  }
};

module.exports = validateToken;
