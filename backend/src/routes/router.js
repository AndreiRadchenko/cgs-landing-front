const Router = require('@koa/router');

const { homeRouter } = require('./home');
const { fileRouter } = require('./file');
const { sloganRouter } = require('./slogan');
const { projectRouter } = require('./project');
const { technologyRouter } = require('./technology');
const { testimonialRouter } = require('./testimonial');

const router = new Router();

router.use(
  homeRouter.middleware(),
  fileRouter.middleware(),
  sloganRouter.middleware(),
  projectRouter.middleware(),
  technologyRouter.middleware(),
  testimonialRouter.middleware(),
);

exports.router = router;
