const { YupRouter } = require('../../yup-router');

const { getSteps } = require('./get-steps');

const partnersRouter = new YupRouter();

partnersRouter.prefix('/partners');

partnersRouter.addRoutes([
  getSteps,
]);

exports.partnersRouter = partnersRouter;
