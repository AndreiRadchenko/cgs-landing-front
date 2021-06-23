const yup = require('yup');

const { StatusCodes } = require('http-status-codes');

const { config } = require('../../config');
const { User, Session } = require('../../database');

const { mapSessionToResponse } = require('./utils/mappers');

const registerRoute = {
  path: '/register',
  method: 'POST',
  validate: {
    body: {
      type: 'json',
      schema: yup.object({
        username: yup.string().required(),
        password: yup.string().required(),
        secretCode: yup.string().required(),
      }),
    },
  },
  async handler(context) {
    const { body } = context.request;

    if (body.secretCode !== config.security.registerSecretCode) {
      context.status = StatusCodes.FORBIDDEN;

      context.body = {
        error: {
          message: 'Secret code is incorrect',
        },
      };

      return;
    }

    let user = await User.findOne({
      username: body.username,
    });

    if (user !== null) {
      context.status = StatusCodes.CONFLICT;

      context.body = {
        error: {
          message: 'User already exists',
        },
      };

      return;
    }

    user = await User.create({
      username: body.username,
      password: body.password,
    });

    const session = await Session.create({
      user: user.id,
    });

    context.body = {
      response: mapSessionToResponse(session),
    };
  },
};

exports.registerRoute = registerRoute;
