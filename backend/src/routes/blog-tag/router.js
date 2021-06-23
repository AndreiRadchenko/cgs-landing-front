const { YupRouter } = require('../../yup-router');

const { blogTagGet } = require('./get');
const { blogTagCreate } = require('./create');
const { blogTagUpdate } = require('./update');
const { blogTagDelete } = require('./delete');

const blogTagRouter = new YupRouter();

blogTagRouter.prefix('/blog-tag');

blogTagRouter.addRoutes([
  blogTagGet,
  blogTagCreate,
  blogTagUpdate,
  blogTagDelete,
]);

exports.blogTagRouter = blogTagRouter;
