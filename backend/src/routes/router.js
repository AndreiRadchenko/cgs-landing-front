const Router = require('@koa/router');

const { homeRouter } = require('./home');
const { factRouter } = require('./fact');
const { fileRouter } = require('./file');
const { sloganRouter } = require('./slogan');
const { projectRouter } = require('./project');
const { technologyRouter } = require('./technology');
const { testimonialRouter } = require('./testimonial');

const router = new Router();

router.use(
  homeRouter.middleware(),
  factRouter.middleware(),
  fileRouter.middleware(),
  sloganRouter.middleware(),
  projectRouter.middleware(),
  technologyRouter.middleware(),
  testimonialRouter.middleware(),
);

exports.router = router;
