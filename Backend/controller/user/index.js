const User = require('../../model/user');
const serviceToken = require('../../services/token');

exports.createUser = async (req, res, next) => {
  try {
    const { body } = req;
    const { name, email, password } = body;
    await User.createOneUser({ name, email, password });
    const payload = { email, name };
    const token = serviceToken.generateToken(payload);
    res.status(201).json({ data: { user: { email, name }, token }, success: true });
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

module.exports.saveAvatar = saveAvatar;
