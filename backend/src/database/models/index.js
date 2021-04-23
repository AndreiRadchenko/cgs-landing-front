const file = require('./file');
const slogan = require('./slogan');
const project = require('./project');
const technology = require('./technology');

module.exports = {
  ...file,
  ...slogan,
  ...project,
  ...technology,
};
