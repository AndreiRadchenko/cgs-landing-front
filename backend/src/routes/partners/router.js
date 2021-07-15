const { YupRouter } = require('../../yup-router');

const { getSteps } = require('./get-steps');
const { getStepsToEarn } = require('./get-steps-to-earn');

const partnersRouter = new YupRouter();

partnersRouter.prefix('/partners');

partnersRouter.addRoutes([
  getSteps,
  getStepsToEarn,
]);

exports.partnersRouter = partnersRouter;
