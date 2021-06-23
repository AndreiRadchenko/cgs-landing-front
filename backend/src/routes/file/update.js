const yup = require('yup');

const { StatusCodes } = require('http-status-codes');

const { assignExistProperties } = require('../../utils/helpers');

const { File } = require('../../database');

const { mapFileToResponse } = require('./utils/mappers');

const fileUpdate = {
  path: '/:id',
  method: 'PUT',
  checkAuth: true,
  validate: {
    params: {
      schema: yup.object({
        id: yup.objectId().required(),
      }),
    },
    body: {
      type: 'json',
      schema: yup.object({
        name: yup.string().optional(),
      }),
    },
  },
  async handler(context) {
    const { params, body } = context.request;

    const file = await File.findById(params.id);

    if (!file) {
      context.status = StatusCodes.NOT_FOUND;

      context.body = {
        response: null,
      };

      return;
    }

    assignExistProperties(file, body, ['name']);

    await file.save();

    context.body = {
      response: mapFileToResponse(file),
    };
  },
};

exports.fileUpdate = fileUpdate;
