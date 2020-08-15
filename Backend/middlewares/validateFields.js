const serviceUser = require('../services/userValidation');

const validateFields = (type) => async (req, res, next) => {
  try {
    const { body } = req
    serviceUser.verifyFields(body, type)
    next();
  } catch (err) {
    next(err);
  }
};

module.exports = validateFields;
