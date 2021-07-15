const { Step } = require('../../database');

const { mapStepToResponse } = require('./utils/mappers');

const getSteps = {
  path: '/get-steps',
  method: 'GET',
  async handler(context) {
    const query = Step.find();

    query.where('showOnPartnersPage', true);

    query.populate({
      path: 'iconFile',
    });

    query.sort({
      placeOnPartnersPage: 1,
    });

    const steps = await query.exec();

    context.body = {
      response: steps.map(mapStepToResponse),
    };
  },
};

exports.getSteps = getSteps;
