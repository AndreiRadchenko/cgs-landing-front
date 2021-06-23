const logoutRoute = {
  path: '/logout',
  method: 'GET',
  checkAuth: true,
  async handler(context) {
    const { session } = context;

    await session.delete();

    context.body = {
      response: true,
    };
  },
};

exports.logoutRoute = logoutRoute;
