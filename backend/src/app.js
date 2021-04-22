const Koa = require('koa');

const { config } = require('./config');
const { router } = require('./routes');

const { logger } = require('./utils/logger');
const { createDeferred } = require('./utils/helpers');

const app = new Koa();

app.use((context, next) => {
  logger.log(`New request ${context.method} ${context.originalUrl}`);

  return next();
});

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
