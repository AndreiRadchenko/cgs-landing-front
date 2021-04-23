const { YupRouter } = require('../../yup-router');

const { getSlogan } = require('./get-slogan');
const { getProjects } = require('./get-projects');
const { getTechnologies } = require('./get-technologies');

const homeRouter = new YupRouter();

homeRouter.prefix('/home');

homeRouter.addRoutes([
  getSlogan,
  getProjects,
  getTechnologies,
]);

exports.homeRouter = homeRouter;
