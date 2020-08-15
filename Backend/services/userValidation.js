const { TYPE_VALIDATE_LOGIN, TYPE_VALIDATE_CREATE_USER, TYPE_VALIDATE_ADDRESS } = require("./enum/validate");

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
  street: {
    exist: true,
  },
  city: {
    exist: true,
  },
  cep: {
    exist: true,
    regex: /^\d{5}-\d{3}$/,
  },
  numberStreet: {
    exist: true,
    regex: /\d+/,
  }
}

const validateLogin = ['email', 'password'];
const validateUser = ['email', 'password', 'name'];
const validateAddress = ['numberStreet', 'cep', 'city', 'street'];

const invalidFieldError = () => {
  const newError = new Error();
  newError.name = 'invalidField';
  throw newError;
}

exports.verifyFields = (fields, type) => {
  const objValidate = {
    [`${TYPE_VALIDATE_LOGIN}`]: () => verifyArray(validateLogin, fields),
    [`${TYPE_VALIDATE_CREATE_USER}`]: () => verifyArray(validateUser, fields),
    [`${TYPE_VALIDATE_ADDRESS}`]: () => verifyArray(validateAddress, fields.address),
  }
  objValidate[type]();
}

const verifyArray = (arr, fields) => {
  arr.forEach((field) => validateField({ field, valueField: fields[field] }));
}

const validateField = ({ field, valueField }) => {
  const { exist, size, regex } = objValidateFields[field];

  if (exist) validateIsExist(valueField);
  if (size) validadeSize(size, valueField);
  if (regex) validateRegex(regex, valueField);
}

const validadeSize = (size, value) => {
  const { min, max } = size;
  if (value.length < min || value.length > max) invalidFieldError();
}

const validateIsExist = (value) => {
  if (!value) invalidFieldError();
}
const validateRegex = (regex, value) => {
  if (!regex.test(String(value).toLowerCase())) invalidFieldError();
}
