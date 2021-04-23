const { YupRouter } = require('../../yup-router');

const { sloganGet } = require('./get');
const { sloganCreate } = require('./create');
const { sloganUpdate } = require('./update');
const { sloganDelete } = require('./delete');

const sloganRouter = new YupRouter();

sloganRouter.prefix('/slogan');

sloganRouter.addRoutes([
  sloganGet,
  sloganCreate,
  sloganUpdate,
  sloganDelete,
]);

exports.sloganRouter = sloganRouter;
