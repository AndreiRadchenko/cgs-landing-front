const {
  normalizeMethods,
  normalizeHandlers,
} = require('./utils/helpers');

const { makeValidators } = require('./make-validators');
const { makeBodyParser } = require('./make-body-parser');
const { makeBodyTypeValidator } = require('./make-body-type-validator');

const makeRoute = (rawRoute) => {
  const route = {
    path: rawRoute.path,
    methods: normalizeMethods(rawRoute),
    handlers: normalizeHandlers(rawRoute),
  };

  if (rawRoute.validate !== undefined) {
    const middlewares = makeValidators(rawRoute);

    if (rawRoute.validate.body !== undefined) {
      const bodyTypeValidator = makeBodyTypeValidator(rawRoute.validate.body.type);

      middlewares.unshift(bodyTypeValidator);

      const bodyParser = makeBodyParser(
        rawRoute.validate.body.type,
        rawRoute.validate.body.options,
      );

      middlewares.push(bodyParser);
    }

    route.handlers.unshift(...middlewares);
  }

  return route;
};

exports.makeRoute = makeRoute;
