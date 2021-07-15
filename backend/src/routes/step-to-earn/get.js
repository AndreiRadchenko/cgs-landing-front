const yup = require('yup');

const { StepToEarn } = require('../../database');

const { mapStepToEarnToResponse } = require('./utils/mappers');

const stepToEarnGet = {
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

    const query = StepToEarn.find();

    if (params.id !== undefined) {
      query.where('_id', params.id);
    }

    const stepsToEarn = await query.exec();

    context.body = {
      response: stepsToEarn.map(mapStepToEarnToResponse),
    };
  },
};

exports.stepToEarnGet = stepToEarnGet;
