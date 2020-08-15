const User = require('../../model/user');
const serviceToken = require('../../services/token');

exports.createUser = async (req, res, next) => {
  try {
    const { body } = req
    const userData = await User.createOneUser(body);
    const { _id, email, name } = userData.ops[0];
    const payload = { id: _id, email, name };
    const token = serviceToken.generateToken(payload);
    res.status(201).json({ data: { user: { id: _id, email, name }, token }, success: true });
  } catch (err) {
    next(err);
  }
};

exports.loginUser = async (req, res, next) => {
  try {
    const { body } = req;
    const userData = await User.findOne(body);
    const { _id, email, name } = userData;
    const payload = { id: _id, email, name };
    const token = serviceToken.generateToken(payload);
    res.status(200).json({ data: { user: { id: _id, email, name }, token }, success: true });
  } catch (err) {
    next(err);
  }
}

exports.addSubscribe = async (req, res, next) => {
  try {
    const { body, payload } = req;
    const { email } = payload;
    const { combo, address } = body;
    const value = await User.addSubscribe({ email, combo, address });
    res.status(200).json({ data: value.value, success: true });
  } catch (err) {
    next(err);
  }
}
