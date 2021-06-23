const yup = require('yup');

const { Fact } = require('../../database');

const { mapFactToResponse } = require('./utils/mappers');

const factGet = {
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

    const query = Fact.find();

    if (params.id !== undefined) {
      query.where('_id', params.id);
    }

    query.populate({
      path: 'iconFile',
    });

    const facts = await query.exec();

    context.body = {
      response: facts.map(mapFactToResponse),
    };
  },
};

exports.factGet = factGet;
