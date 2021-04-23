const fact = require('./fact');
const file = require('./file');
const slogan = require('./slogan');
const project = require('./project');
const technology = require('./technology');
const testimonial = require('./testimonial');

module.exports = {
  ...fact,
  ...file,
  ...slogan,
  ...project,
  ...technology,
  ...testimonial,
};
