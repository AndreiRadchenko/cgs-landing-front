const { config } = require('../../config');

const { File } = require('../../database');

const { mapFileToResponse } = require('./utils/mappers');

const fileUpload = {
  path: '/upload',
  method: 'POST',
  validate: {
    body: {
      type: 'multipart',
      options: {
        uploadDir: config.files.storagePath,
      },
    },
  },
  handler: async (context) => {
    const files = await File.insertMany(context.request.files);

    context.status = 201;

    context.body = {
      response: files.map(mapFileToResponse),
    };
  },
};

exports.fileUpload = fileUpload;
