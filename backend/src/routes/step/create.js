const yup = require('yup');

const { StatusCodes } = require('http-status-codes');

const { assignExistProperties } = require('../../utils/helpers');

const { Step } = require('../../database');

const { mapStepToResponse } = require('./utils/mappers');

const stepCreate = {
  path: '/',
  method: 'POST',
  checkAuth: true,
  validate: {
    body: {
      type: 'json',
      schema: yup.object({
        title: yup.string().required(),
        text: yup.string().required(),
        iconFileId: yup.objectId().required(),
        showOnPartnersPage: yup.boolean().optional(),
        placeOnPartnersPage: yup.number().min(1).optional(),
      }),
    },
  },
  async handler(context) {
    const { body } = context.request;

    let step = new Step({
      iconFile: body.iconFileId,
    });

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

    context.status = StatusCodes.CREATED;

    context.body = {
      response: mapStepToResponse(step),
    };
  },
};

exports.stepCreate = stepCreate;
