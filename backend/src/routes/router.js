const Router = require('@koa/router');

const { authRouter } = require('./auth');
const { blogRouter } = require('./blog');
const { homeRouter } = require('./home');

const { factRouter } = require('./fact');
const { fileRouter } = require('./file');
const { sloganRouter } = require('./slogan');
const { workerRouter } = require('./worker');
const { articleRouter } = require('./article');
const { projectRouter } = require('./project');
const { blogTagRouter } = require('./blog-tag');
const { technologyRouter } = require('./technology');
const { testimonialRouter } = require('./testimonial');
const { featuredTechnologyRouter } = require('./featured-technology');

const router = new Router();

router.use(
  authRouter.middleware(),
  blogRouter.middleware(),
  homeRouter.middleware(),
);

router.use(
  factRouter.middleware(),
  fileRouter.middleware(),
  sloganRouter.middleware(),
  workerRouter.middleware(),
  articleRouter.middleware(),
  projectRouter.middleware(),
  blogTagRouter.middleware(),
  technologyRouter.middleware(),
  testimonialRouter.middleware(),
  featuredTechnologyRouter.middleware(),
);

exports.router = router;
