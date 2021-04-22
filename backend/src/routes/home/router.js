const { YupRouter } = require('../../yup-router');

const { getSlogan } = require('./get-slogan');
const { getTechnologies } = require('./get-technologies');

const homeRouter = new YupRouter();

homeRouter.prefix('/home');

homeRouter.addRoutes([
  getSlogan,
  getTechnologies,
]);

exports.homeRouter = homeRouter;
