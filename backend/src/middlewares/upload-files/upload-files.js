const { IncomingForm } = require('formidable');

const { config } = require('../../config');
const { createDeferred } = require('../../utils/helpers');

const { LocalFile } = require('./local-file');

const form = new IncomingForm({
  keepExtensions: true,
  uploadDir: config.files.storagePath,
  hash: 'sha256',
});

const uploadFiles = async (context, next) => {
  const deferred = createDeferred();

  form.parse(context.req, (error, fields, files) => {
    if (error) {
      deferred.reject(error);

      return;
    }

    deferred.resolve({ fields, files });
  });

  const { fields, files } = await deferred.promise;

  context.request.body = fields;

  const localFiles = [];

  for (const file of Object.values(files)) {
    localFiles.push(new LocalFile(file));
  }

  context.request.files = localFiles;

  return next();
};

exports.uploadFiles = uploadFiles;
