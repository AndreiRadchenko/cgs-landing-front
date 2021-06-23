const yup = require('yup');

const { StatusCodes } = require('http-status-codes');

const { Session } = require('../../database');

const { mapSessionToResponse } = require('./utils/mappers');

const newTokenRoute = {
  path: '/new-token',
  method: 'POST',
  validate: {
    body: {
      type: 'json',
      schema: yup.object({
        refreshToken: yup.string().required(),
      }),
    },
  },
  async handler(context) {
    const { body } = context.request;

    const query = Session.findOne();

    query.where('refreshToken', body.refreshToken);

    query.populate({
      path: 'user',
    });

    const session = await query.exec();

    const hasAccess = session !== null && !session.refreshTokenExpired;

    if (!hasAccess) {
      if (session !== null) {
        await session.destroy();
      }

      context.status = StatusCodes.UNAUTHORIZED;

      context.body = {
        error: {
          message: 'Session does not exist or access token has been expired',
        },
      };

      return;
    }

    await session.delete();

    const newSession = await Session.create({
      user: session.user.id,
    });

    context.body = {
      response: mapSessionToResponse(newSession),
    };
  },
};

exports.newTokenRoute = newTokenRoute;
