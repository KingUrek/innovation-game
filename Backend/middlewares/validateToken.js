const serviceToken = require('../services/token');
const { ERROR_INVALID_TOKEN } = require('../services/enum/errors');

const validateToken = async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    const payload = serviceToken.getPayload(token);
    if (!payload) {
      const newError = new Error();
      newError.name = ERROR_INVALID_TOKEN;
      throw newError;
    };
    req.payload = payload;
    next();
  } catch (err) {
    next(err);
  }
};

module.exports = validateToken;
