const mailService = require('./mail-service');
const mailAttachment = require('./mail-attachment');

module.exports = {
  ...mailService,
  ...mailAttachment,
};
