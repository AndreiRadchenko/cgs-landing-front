const Router = require('@koa/router');

const { makeRoute } = require('./make-route');

class YupRouter extends Router {
  addRoute(rawRoute) {
    const route = makeRoute(rawRoute);

    for (const method of route.methods) {
      this[method](route.path, ...route.handlers);
    }
  }

  addRoutes(rawRoutes) {
    for (const rawRoute of rawRoutes) {
      this.addRoute(rawRoute);
    }
  }
}

exports.YupRouter = YupRouter;
