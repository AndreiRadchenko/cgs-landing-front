const yup = require('yup');

const { Technology } = require('../../database');

const { mapTechnologyToResponse } = require('./utils/mappers');

const technologyGet = {
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

    const query = Technology.find();

    if (params.id !== undefined) {
      query.where('_id', params.id);
    }

    query.populate({
      path: 'iconFile',
    });

    const technologies = await query.exec();

    context.body = {
      response: technologies.map(mapTechnologyToResponse),
    };
  },
};

exports.technologyGet = technologyGet;
