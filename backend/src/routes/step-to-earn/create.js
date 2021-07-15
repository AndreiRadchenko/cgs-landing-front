const yup = require('yup');

const { StatusCodes } = require('http-status-codes');

const { assignExistProperties } = require('../../utils/helpers');

const { StepToEarn } = require('../../database');

const { mapStepToEarnToResponse } = require('./utils/mappers');

const stepToEarnCreate = {
  path: '/',
  method: 'POST',
  checkAuth: true,
  validate: {
    body: {
      type: 'json',
      schema: yup.object({
        text: yup.string().required(),
        showOnPartnersPage: yup.boolean().optional(),
        placeOnPartnersPage: yup.number().min(1).optional(),
      }),
    },
  },
  async handler(context) {
    const { body } = context.request;

    const stepToEarn = new StepToEarn();

    assignExistProperties(stepToEarn, body, [
      'text',
      'showOnPartnersPage',
      'placeOnPartnersPage',
    ]);

    await stepToEarn.save();

    context.status = StatusCodes.CREATED;

    context.body = {
      response: mapStepToEarnToResponse(stepToEarn),
    };
  },
};

exports.stepToEarnCreate = stepToEarnCreate;
