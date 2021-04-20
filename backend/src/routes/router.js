const Router = require('@koa/router');

const { fileRouter } = require('./file');
const { sloganRouter } = require('./slogan');

const router = new Router();

router.use(
  fileRouter.middleware(),
  sloganRouter.middleware(),
);

exports.router = router;
