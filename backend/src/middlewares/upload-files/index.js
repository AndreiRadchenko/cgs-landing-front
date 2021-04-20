const localFile = require('./local-file');

const uploadFiles = require('./upload-files');

module.exports = {
  ...localFile,

  ...uploadFiles,
};
