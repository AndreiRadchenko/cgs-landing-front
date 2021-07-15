const { StepToEarn } = require('../../database');

const { mapStepToEarnToResponse } = require('./utils/mappers');

const getStepsToEarn = {
  path: '/get-steps-to-earn',
  method: 'GET',
  async handler(context) {
    const query = StepToEarn.find();

    query.where('showOnPartnersPage', true);

    query.sort({
      placeOnPartnersPage: 1,
    });

    const stepsToEarn = await query.exec();

    context.body = {
      response: stepsToEarn.map(mapStepToEarnToResponse),
    };
  },
};

exports.getStepsToEarn = getStepsToEarn;
