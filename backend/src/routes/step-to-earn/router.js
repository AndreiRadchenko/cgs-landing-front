const { YupRouter } = require('../../yup-router');

const { stepToEarnGet } = require('./get');
const { stepToEarnCreate } = require('./create');
const { stepToEarnUpdate } = require('./update');
const { stepToEarnDelete } = require('./delete');

const stepToEarnRouter = new YupRouter();

stepToEarnRouter.prefix('/step-to-earn');

stepToEarnRouter.addRoutes([
  stepToEarnGet,
  stepToEarnCreate,
  stepToEarnUpdate,
  stepToEarnDelete,
]);

exports.stepToEarnRouter = stepToEarnRouter;
