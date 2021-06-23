const { YupRouter } = require('../../yup-router');

const { getSlogan } = require('./get-slogan');
const { getFacts } = require('./get-facts');
const { getWorkersRoute } = require('./get-workers');
const { getProjects } = require('./get-projects');
const { getTechnologies } = require('./get-technologies');
const { getTestimonials } = require('./get-testimonials');
const { getFeaturedTechnologies } = require('./get-featured-technologies');
const { sendRequest } = require('./send-feedback');

const homeRouter = new YupRouter();

homeRouter.prefix('/home');

homeRouter.addRoutes([
  getSlogan,
  getFacts,
  getWorkersRoute,
  getProjects,
  getTechnologies,
  getTestimonials,
  getFeaturedTechnologies,
  sendRequest,
]);

exports.homeRouter = homeRouter;
