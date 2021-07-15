const yup = require('yup');

const { StatusCodes } = require('http-status-codes');

const { assignExistProperties } = require('../../utils/helpers');

const { StepToEarn } = require('../../database');

const { mapStepToEarnToResponse } = require('./utils/mappers');

const stepToEarnUpdate = {
  path: '/:id',
  method: 'PUT',
  checkAuth: true,
  validate: {
    params: {
      schema: yup.object({
        id: yup.objectId().required(),
      }),
    },
    body: {
      type: 'json',
      schema: yup.object({
        text: yup.string().min(1).optional(),
        showOnPartnersPage: yup.boolean().optional(),
        placeOnPartnersPage: yup.number().min(1).optional(),
      }),
    },
  },
  async handler(context) {
    const { params, body } = context.request;

    const stepToEarn = await StepToEarn.findById(params.id);

    if (!stepToEarn) {
      context.status = StatusCodes.NOT_FOUND;

      context.body = {
        response: null,
      };

      return;
    }

    assignExistProperties(stepToEarn, body, [
      'text',
      'showOnPartnersPage',
      'placeOnPartnersPage',
    ]);

    await stepToEarn.save();

    context.body = {
      response: mapStepToEarnToResponse(stepToEarn),
    };
  },
};

exports.stepToEarnUpdate = stepToEarnUpdate;
