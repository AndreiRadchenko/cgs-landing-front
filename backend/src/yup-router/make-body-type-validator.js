const { StatusCodes } = require('http-status-codes');

const { BodyType } = require('./constants');

const bodyTypes = {
  [BodyType.JSON]: {
    type: 'json',
    errorMessage: 'expected json',
  },
  [BodyType.MULTIPART]: {
    type: 'multipart/*',
    errorMessage: 'expected multipart',
  },
};

const defaultOptions = {
  errorStatusCode: StatusCodes.BAD_REQUEST,
};

const makeBodyTypeValidator = (type, options = defaultOptions) => {
  const bodyType = bodyTypes[type];

  if (!bodyType) {
    throw new Error(`unsupported body type: ${type}`);
  }

  return async (context, next) => {
    if (!context.request.is(bodyType.type)) {
      context.status = options.errorStatusCode;

      context.body = {
        error: {
          message: bodyType.errorMessage,
        },
      };

      return;
    }

    await next();
  };
};

exports.makeBodyTypeValidator = makeBodyTypeValidator;
