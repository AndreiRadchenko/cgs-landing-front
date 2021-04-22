const yup = require('yup');

const { resolve: pathResolve } = require('path');

const { remove: removeFile } = require('fs-extra');

const { config } = require('../../config');

const { File } = require('../../database');

const fileDelete = {
  path: '/:id',
  method: 'DELETE',
  validate: {
    params: {
      schema: yup.object({
        id: yup.objectId().required(),
      }),
    },
  },
  handler: async (context) => {
    const { params } = context.request;

    const file = await File.findByIdAndDelete(params.id);

    if (!file) {
      context.status = 404;

      context.body = {
        response: null,
      };

      return;
    }

    const path = pathResolve(config.files.storagePath, file.savedAs);

    await removeFile(path);

    context.status = 204;
  },
};

exports.fileDelete = fileDelete;
