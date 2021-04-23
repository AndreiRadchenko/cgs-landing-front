const { YupRouter } = require('../../yup-router');

const { projectGet } = require('./get');
const { projectCreate } = require('./create');
const { projectUpdate } = require('./update');
const { projectDelete } = require('./delete');

const projectRouter = new YupRouter();

projectRouter.prefix('/project');

projectRouter.addRoutes([
  projectGet,
  projectCreate,
  projectUpdate,
  projectDelete,
]);

exports.projectRouter = projectRouter;
