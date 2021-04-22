const yup = require('yup');

const { File } = require('../../database');

const { mapFileToResponse } = require('./utils/mappers');

const fileGet = {
  path: '/:id?',
  method: 'GET',
  validate: {
    params: {
      schema: yup.object({
        id: yup.objectId().optional(),
      }),
    },
  },
  handler: async (context) => {
    const { params } = context.request;

    const query = File.find();

    if (params.id !== undefined) {
      query.where('_id', params.id);
    }

    const files = await query.exec();

    context.status = 200;

    context.body = {
      response: files.map(mapFileToResponse),
    };
  },
};

exports.fileGet = fileGet;
