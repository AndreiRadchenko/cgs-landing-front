const { parse: pathParse } = require('path');

const { extension: mimeExtension } = require('mime-types');

const getFileName = (filename) => {
  const { name } = pathParse(filename);

  return name;
};

exports.getFileName = getFileName;

const getFileExtension = (filename) => {
  const { ext } = pathParse(filename);

  return ext.slice(1) || mimeExtension(ext);
};

exports.getFileExtension = getFileExtension;
