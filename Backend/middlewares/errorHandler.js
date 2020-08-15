const { handleError } = require('../services/handleError');

exports.errorHandler = (err, req, res, next) => {
  try {
    handleError(err);
  } catch (err) {
    res.status(err.statusResponse).json({ message: err.details, success: false, });
  }
}
