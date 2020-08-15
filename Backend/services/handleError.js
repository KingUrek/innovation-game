const { ERROR_INVALID_TOKEN, ERROR_NOT_FOUND } = require("./enum/errors");

const objErrorHandler = {
  invalidField: {
    name: 'invalidField',
    detail: 'Campo inválido',
    status: 400,
  },
  MongoError: {
    name: 'MongoError',
    detail: 'Erro no mongo',
    status: 500,
  },
  NotFound: {
    name: ERROR_NOT_FOUND,
    detail: 'Item não foi encontrado',
    status: 404,
  },
  InvalidToken: {
    name: ERROR_INVALID_TOKEN,
    detail: 'Token não é valido',
    status: 401,
  },
  invalidUser: {
    name: ERROR_INVALID_USER,
    detail: 'Dados incorretos',
    status: 400,
  }
}

const MongoErrorCode = {
  11000: {
    name: 'MongoError',
    detail: 'Esse Email já está sendo usado',
    status: 400,
  },
}

const objectErrorHandler = (error) => {
  if (!objErrorHandler[error.name]) {
    error.details = 'Algo deu errado!';
    error.statusResponse = 500;
    throw error;
  }

  if (error.name === 'MongoError') {
    return MongoErrorCode[error.code];
  }

  return objErrorHandler[error.name];
}

const createError = (errorData) => {
  const { name, detail, status } = errorData;
  const genericError = new Error(name);
  genericError.details = detail;
  genericError.statusResponse = status;
  throw genericError;
}

exports.handleError = (error) => {
  createError(objectErrorHandler(error));
}
