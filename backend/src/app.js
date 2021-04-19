const Koa = require('koa');

const { router } = require('./routes');
const { config } = require('./config');
const { logger } = require('./logger');
const { createDeferred } = require('./helpers');

const app = new Koa();

app.use(router.routes());
app.use(router.allowedMethods());

const run = async () => {
  const deferred = createDeferred();

  app.listen(config.server.port, config.server.host, deferred.resolve);

  await deferred.promise;

  logger.log(`Server run on http://${config.server.host}:${config.server.port}`);
};

run().catch((error) => {
  logger.error(error);
});
