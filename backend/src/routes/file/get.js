const yup = require('yup');

const { File } = require('../../database');

const { mapFileToResponse } = require('./utils/mappers');

const fileGet = {
  path: '/:id?',
  method: 'GET',
  checkAuth: true,
  validate: {
    params: {
      schema: yup.object({
        id: yup.objectId().optional(),
      }),
    },
  },
  async handler(context) {
    const { params } = context.request;

    const query = File.find();

    if (params.id !== undefined) {
      query.where('_id', params.id);
    }

    const files = await query.exec();

    context.body = {
      response: files.map(mapFileToResponse),
    };
  },
};

exports.fileGet = fileGet;
