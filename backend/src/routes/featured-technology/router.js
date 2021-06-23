const { YupRouter } = require('../../yup-router');

const { featuredTechnologyGet } = require('./get');
const { featuredTechnologyCreate } = require('./create');
const { featuredTechnologyUpdate } = require('./update');
const { featuredTechnologyDelete } = require('./delete');

const featuredTechnologyRouter = new YupRouter();

featuredTechnologyRouter.prefix('/featured-technology');

featuredTechnologyRouter.addRoutes([
  featuredTechnologyGet,
  featuredTechnologyCreate,
  featuredTechnologyUpdate,
  featuredTechnologyDelete,
]);

exports.featuredTechnologyRouter = featuredTechnologyRouter;
