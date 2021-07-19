const { YupRouter } = require('../../yup-router');

const { getSteps } = require('./get-steps');
const { getStepsToEarn } = require('./get-steps-to-earn');
const { sendFeedback } = require('./send-feedback');

const partnersRouter = new YupRouter();

partnersRouter.prefix('/partners');

partnersRouter.addRoutes([
  getSteps,
  getStepsToEarn,
  sendFeedback,
]);

exports.partnersRouter = partnersRouter;
