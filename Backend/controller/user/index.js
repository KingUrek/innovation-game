const User = require('../../model/user');
const Address = require('../../model/address');
const Payment = require('../../services/payment');
const serviceToken = require('../../services/token');

exports.createUser = async (req, res, next) => {
  try {
    const { body } = req;
    const userData = await User.createOneUser(body);
    const { _id, email, name } = userData.ops[0];
    const payload = { id: _id, email, name };
    const token = serviceToken.generateToken(payload);
    res.status(201).json({ data: { user: { id: _id, email, name }, token }, success: true });
  } catch (err) {
    next(err);
  }
};

async function saveAvatar(req, res, next) {
  try {
    await User.saveAvatar({ id: req.body.id, avatar: req.file.location });
    res.status(201).send(req.file.location);
  } catch (err) {
    next(err);
  }
}

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
};

async function subscribe(req, res, next) {
  const { address, user, creditCard, plan } = req.body;
  try {
    const { id } = await Payment.creatingCard(creditCard);
    await Address.createAddress(address, user);
    const pay = await Payment.makeSubscriptions({ id, plan, user, address });
    res.status(201).send(pay);
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
};

module.exports.saveAvatar = saveAvatar;
module.exports.subscribe = subscribe;
