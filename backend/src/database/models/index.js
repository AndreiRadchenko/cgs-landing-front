const fact = require('./fact');
const file = require('./file');
const user = require('./user');
const slogan = require('./slogan');
const worker = require('./worker');
const session = require('./session');
const article = require('./article');
const project = require('./project');
const blogTag = require('./blog-tag');
const technology = require('./technology');
const testimonial = require('./testimonial');
const featuredTechnology = require('./featured-technology');

module.exports = {
  ...fact,
  ...file,
  ...user,
  ...slogan,
  ...worker,
  ...session,
  ...article,
  ...project,
  ...blogTag,
  ...technology,
  ...testimonial,
  ...featuredTechnology,
};
