const { YupRouter } = require('../../yup-router');

const { registerRoute } = require('./register');
const { loginRoute } = require('./login');
const { logoutRoute } = require('./logout');
const { newTokenRoute } = require('./new-token');

const authRouter = new YupRouter();

authRouter.prefix('/auth');

authRouter.addRoutes([
  registerRoute,
  loginRoute,
  logoutRoute,
  newTokenRoute,
]);

exports.authRouter = authRouter;
