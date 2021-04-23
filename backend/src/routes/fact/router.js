const { YupRouter } = require('../../yup-router');

const { factGet } = require('./get');
const { factCreate } = require('./create');
const { factUpdate } = require('./update');
const { factDelete } = require('./delete');

const factRouter = new YupRouter();

factRouter.prefix('/fact');

factRouter.addRoutes([
  factGet,
  factCreate,
  factUpdate,
  factDelete,
]);

exports.factRouter = factRouter;
