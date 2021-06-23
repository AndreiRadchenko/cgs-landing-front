const { StatusCodes } = require('http-status-codes');

const { Session } = require('../../database');

const { getTokenFromBearer } = require('./helpers');

const checkAuthorization = async (context, next) => {
  const accessToken = getTokenFromBearer(context.request.get('Authorization'));

  if (!accessToken) {
    context.status = StatusCodes.UNAUTHORIZED;

    context.body = {
      error: {
        message: 'Access token is not provided',
      },
    };

    return;
  }

  const query = Session.findOne();

  query.where('accessToken', accessToken);

  query.populate({
    path: 'user',
  });

  const session = await query.exec();

  const hasAccess = session !== null && !session.accessTokenExpired;

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

  context.session = session;

  await next();
};

exports.checkAuthorization = checkAuthorization;
