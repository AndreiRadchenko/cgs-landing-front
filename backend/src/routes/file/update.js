const yup = require('yup');

const { assignExistProperties } = require('../../utils/helpers');

const { File } = require('../../database');

const { mapFileToResponse } = require('./utils/mappers');

const fileUpdate = {
  path: '/:id',
  method: 'PUT',
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
  handler: async (context) => {
    const { params, body } = context.request;

    const file = await File.findById(params.id);

    if (!file) {
      context.status = 404;

      context.body = {
        response: null,
      };

      return;
    }

    assignExistProperties(file, body, ['name']);

    await file.save();

    context.status = 200;

    context.body = {
      response: mapFileToResponse(file),
    };
  },
};

exports.fileUpdate = fileUpdate;
