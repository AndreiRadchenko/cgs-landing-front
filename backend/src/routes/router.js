const Router = require('@koa/router');

const { homeRouter } = require('./home');
const { fileRouter } = require('./file');
const { sloganRouter } = require('./slogan');
const { technologyRouter } = require('./technology');

const router = new Router();

router.use(
  homeRouter.middleware(),
  fileRouter.middleware(),
  sloganRouter.middleware(),
  technologyRouter.middleware(),
);

exports.router = router;
