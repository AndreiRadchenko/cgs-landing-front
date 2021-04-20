const { File } = require('../../database');

const { mapFileToResponse } = require('./utils/mappers');

const fileGet = {
  path: '/get/:id',
  method: 'GET',
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

    context.status = 200;

    context.body = {
      response: mapFileToResponse(file),
    };
  },
};

exports.fileGet = fileGet;
