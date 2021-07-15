const yup = require('yup');

const { Step } = require('../../database');

const { mapStepToResponse } = require('./utils/mappers');

const stepGet = {
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

    const query = Step.find();

    if (params.id !== undefined) {
      query.where('_id', params.id);
    }

    query.populate({
      path: 'iconFile',
    });

    const steps = await query.exec();

    context.body = {
      response: steps.map(mapStepToResponse),
    };
  },
};

exports.stepGet = stepGet;
