const file = require('./file');
const slogan = require('./slogan');
const technology = require('./technology');

module.exports = {
  ...file,
  ...slogan,
  ...technology,
};
