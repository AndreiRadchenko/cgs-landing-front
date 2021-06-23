const yup = require('yup');

const { StatusCodes } = require('http-status-codes');

const { User, Session } = require('../../database');

const { mapSessionToResponse } = require('./utils/mappers');

const loginRoute = {
  path: '/login',
  method: 'POST',
  validate: {
    body: {
      type: 'json',
      schema: yup.object({
        username: yup.string().required(),
        password: yup.string().required(),
      }),
    },
  },
  async handler(context) {
    const { body } = context.request;

    const user = await User.findOne({
      username: body.username,
    });

    let isValid = false;

    if (user !== null) {
      isValid = await user.comparePassword(body.password);
    }

    if (!isValid) {
      context.status = StatusCodes.UNAUTHORIZED;

      context.body = {
        error: {
          message: 'User does not exist or password is incorrect',
        },
      };

      return;
    }

    const session = await Session.create({
      user: user.id,
    });

    context.body = {
      response: mapSessionToResponse(session),
    };
  },
};

exports.loginRoute = loginRoute;
