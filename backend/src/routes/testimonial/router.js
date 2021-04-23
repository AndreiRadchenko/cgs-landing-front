const { YupRouter } = require('../../yup-router');

const { testimonialGet } = require('./get');
const { testimonialCreate } = require('./create');
const { testimonialUpdate } = require('./update');
const { testimonialDelete } = require('./delete');

const testimonialRouter = new YupRouter();

testimonialRouter.prefix('/testimonial');

testimonialRouter.addRoutes([
  testimonialGet,
  testimonialCreate,
  testimonialUpdate,
  testimonialDelete,
]);

exports.testimonialRouter = testimonialRouter;
