const { TYPE_VALIDATE_LOGIN, TYPE_VALIDATE_CREATE_USER } = require("./enum/validate");

const objValidateFields = {
  name: {
    exist: true,
    size: { min: 3, max: 30 },
  },
  email: {
    exist: true,
    regex: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  },
  password: {
    exist: true,
    size: { min: 3, max: 30 },
  },
}

const validateLogin = ['email', 'password'];
const validateUser = ['email', 'password', 'name'];

const invalidFieldError = () => {
  const newError = new Error();
  newError.name = 'invalidField';
  throw newError;
}

exports.verifyFields = (fields, type) => {
  if (type === TYPE_VALIDATE_LOGIN) validateLogin.forEach((field) => validateField({ field, valueField: fields[field] }));
  if (type === TYPE_VALIDATE_CREATE_USER) validateUser.forEach((field) => validateField({ field, valueField: fields[field] }));
}

const validateField = ({ field, valueField }) => {
  const { exist, size, regex } = objValidateFields[field];
  validateIsExist(exist, valueField);
  validadeSize(size, valueField);
  validateRegex(regex, valueField);
}

const validadeSize = (size, value) => {
  if (!size) return;
  const { min, max } = size;
  if (value.length < min || value.length > max) invalidFieldError();
}

const validateIsExist = (exist, value) => {
  if (!exist) return;
  if (!value) invalidFieldError();
}

const validateRegex = (regex, value) => {
  if (!regex) return
  if (!regex.test(String(value).toLowerCase())) invalidFieldError();
}
