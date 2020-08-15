const User = require('../../model/user');
const serviceToken = require('../../services/token');

exports.createUser = (req, res, next) => {
  try {
    const { body } = req
    const { data } = body;
    const { _id, email, name } = await User.createOneUser({ data });
    const payload = { _id, email, name }
    const token = serviceToken.generateToken(payload)
    res.status(201).json({ content: { _id, email, name, token }, success: true });
  } catch (err) {
    next(err);
  }
};
