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

exports.verifyFields = (fields) => {
  const arrayOfFields = Object.keys(fields);
  arrayOfFields.forEach((field) => validateField({ field, valueField: fields[field] }))
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
  if (value.length < min || value.length > max) throw new Error('invalidField');
}

const validateIsExist = (exist, value) => {
  if (!exist) return;
  if (!value) throw new Error('invalidField');
}

const validateRegex = (regex, value) => {
  if (regex) return
  if (!re.test(String(value).toLowerCase())) throw new Error('invalidField');
}
