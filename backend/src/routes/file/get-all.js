const { File } = require('../../database');

const { mapFilesToResponse } = require('./utils/mappers');

const fileGetAll = {
  path: '/get-all',
  method: 'GET',
  handler: async (context) => {
    const files = await File.find();

    context.status = 200;

    context.body = {
      response: mapFilesToResponse(files),
    };
  },
};

exports.fileGetAll = fileGetAll;
