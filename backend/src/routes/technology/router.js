const { YupRouter } = require('../../yup-router');

const { technologyGet } = require('./get');
const { technologyCreate } = require('./create');
const { technologyUpdate } = require('./update');
const { technologyDelete } = require('./delete');

const technologyRouter = new YupRouter();

technologyRouter.prefix('/technology');

technologyRouter.addRoutes([
  technologyGet,
  technologyCreate,
  technologyUpdate,
  technologyDelete,
]);

exports.technologyRouter = technologyRouter;
