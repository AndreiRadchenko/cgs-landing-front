const Router = require('@koa/router');

const { sloganRouter } = require('./slogan');

const router = new Router();

router.use(sloganRouter.middleware());

exports.router = router;
