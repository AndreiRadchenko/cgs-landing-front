const file = require('./file');
const slogan = require('./slogan');
const project = require('./project');
const technology = require('./technology');
const testimonial = require('./testimonial');

module.exports = {
  ...file,
  ...slogan,
  ...project,
  ...technology,
  ...testimonial,
};
