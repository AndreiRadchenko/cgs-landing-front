const { resolve: pathResolve } = require('path');

const { remove: removeFile } = require('fs-extra');

const { File } = require('../../database');
const { config } = require('../../config');

const { fileByIdSchema } = require('./utils/validators');

const fileDelete = {
  path: '/delete/:id',
  method: 'DELETE',
  validate: {
    params: fileByIdSchema,
  },
  handler: async (context) => {
    const { params } = context.request;

    const file = await File.findById(params.id);

    if (!file) {
      context.status = 404;

      context.body = {
        response: null,
      };

      return;
    }

    await file.delete();

    const path = pathResolve(config.files.storagePath, file.savedAs);

    await removeFile(path);

    context.status = 204;
  },
};

exports.fileDelete = fileDelete;
