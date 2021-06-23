const { YupRouter } = require('../../yup-router');

const { articleRoute } = require('./article');
const { articlesRoute } = require('./articles');
const { similarArticlesRoute } = require('./similar-articles');

const blogRouter = new YupRouter();

blogRouter.prefix('/blog');

blogRouter.addRoutes([
  articleRoute,
  articlesRoute,
  similarArticlesRoute,
]);

exports.blogRouter = blogRouter;
