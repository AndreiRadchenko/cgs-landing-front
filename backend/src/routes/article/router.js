const { YupRouter } = require('../../yup-router');

const { articleGet } = require('./get');
const { articleCreate } = require('./create');
const { articleUpdate } = require('./update');
const { articleDelete } = require('./delete');

const articleRouter = new YupRouter();

articleRouter.prefix('/article');

articleRouter.addRoutes([
  articleGet,
  articleCreate,
  articleUpdate,
  articleDelete,
]);

exports.articleRouter = articleRouter;
