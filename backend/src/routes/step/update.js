const yup = require('yup');

const { StatusCodes } = require('http-status-codes');

const { assignExistProperties } = require('../../utils/helpers');

const { Step } = require('../../database');

const { mapStepToResponse } = require('./utils/mappers');

const stepUpdate = {
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
        title: yup.string().min(1).optional(),
        text: yup.string().min(1).optional(),
        iconFileId: yup.objectId().optional(),
        showOnPartnersPage: yup.boolean().optional(),
        placeOnPartnersPage: yup.number().min(1).optional(),
      }),
    },
  },
  async handler(context) {
    const { params, body } = context.request;

    let step = await Step.findById(params.id);

    if (!step) {
      context.status = StatusCodes.NOT_FOUND;

      context.body = {
        response: null,
      };

      return;
    }

    if (body.iconFileId !== undefined) {
      step.iconFile = body.iconFileId;
    }

    assignExistProperties(step, body, [
      'title',
      'text',
      'showOnPartnersPage',
      'placeOnPartnersPage',
    ]);

    await step.save();

    step.populate({
      path: 'iconFile',
    });

    step = await step.execPopulate();

    context.body = {
      response: mapStepToResponse(step),
    };
  },
};

exports.stepUpdate = stepUpdate;
