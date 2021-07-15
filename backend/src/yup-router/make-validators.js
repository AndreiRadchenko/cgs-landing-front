const { ValidationError } = require('yup');

const { StatusCodes } = require('http-status-codes');

const propertiesForValidate = ['headers', 'params', 'query', 'body'];

const defaultOptions = {
  errorStatusCode: StatusCodes.BAD_REQUEST,
};

const makeValidators = (rawRoute, options = defaultOptions) => {
  const middlewares = [];

  for (const property of propertiesForValidate) {
    const propertyOptions = rawRoute.validate[property];

    if (!propertyOptions) {
      continue;
    }

    const { schema } = propertyOptions;

    if (!schema) {
      continue;
    }

    const validator = async (context, next) => {
      const input = context.request[property] || {};

      let output;

      try {
        output = await schema.validate(input, {
          abortEarly: false,
          stripUnknown: true,
        });
      } catch (error) {
        if (!(error instanceof ValidationError)) {
          throw error;
        }

        context.status = options.errorStatusCode;

        context.body = {
          error: {
            message: error.errors,
          },
        };

        return;
      }

      Object.defineProperty(context.request, property, {
        value: output,
      });

      await next();
    };

    middlewares.push(validator);
  }

  return middlewares;
};

exports.makeValidators = makeValidators;
