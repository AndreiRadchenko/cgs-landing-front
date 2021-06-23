const { StatusCodes } = require('http-status-codes');

const { mapFileToResponse } = require('./utils/mappers');

const fileUpload = {
  path: '/upload',
  method: 'POST',
  checkAuth: true,
  validate: {
    body: {
      type: 'multipart',
    },
  },
  async handler(context) {
    const { file } = context.request;

    context.status = StatusCodes.CREATED;

    context.body = {
      response: mapFileToResponse(file),
    };
  },
};

exports.fileUpload = fileUpload;
