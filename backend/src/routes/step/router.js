const { YupRouter } = require('../../yup-router');

const { stepGet } = require('./get');
const { stepCreate } = require('./create');
const { stepUpdate } = require('./update');
const { stepDelete } = require('./delete');

const stepRouter = new YupRouter();

stepRouter.prefix('/step');

stepRouter.addRoutes([
  stepGet,
  stepCreate,
  stepUpdate,
  stepDelete,
]);

exports.stepRouter = stepRouter;
