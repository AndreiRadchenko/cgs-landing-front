const { YupRouter } = require('../../yup-router');

const { workerGetRoute } = require('./get');
const { workerCreateRoute } = require('./create');
const { workerUpdateRoute } = require('./update');
const { workerDeleteRoute } = require('./delete');

const workerRouter = new YupRouter();

workerRouter.prefix('/worker');

workerRouter.addRoutes([
  workerGetRoute,
  workerCreateRoute,
  workerUpdateRoute,
  workerDeleteRoute,
]);

exports.workerRouter = workerRouter;
