const Router = require('@koa/router');

const router = new Router();

router.get('/', (context) => {
  context.body = 'hello world';
});

exports.router = router;
