const yup = require('yup');

const { StatusCodes } = require('http-status-codes');

const { assignExistProperties } = require('../../utils/helpers');

const { Slogan } = require('../../database');

const { mapSloganToResponse } = require('./utils/mappers');

const sloganUpdate = {
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
        selected: yup.boolean().optional(),
      }),
    },
  },
  async handler(context) {
    const { params, body } = context.request;

    const slogan = await Slogan.findById(params.id);

    if (!slogan) {
      context.status = StatusCodes.NOT_FOUND;

      context.body = {
        response: null,
      };

      return;
    }

    assignExistProperties(slogan, body, [
      'title',
      'text',
      'selected',
    ]);

    await slogan.save();

    context.body = {
      response: mapSloganToResponse(slogan),
    };
  },
};

exports.sloganUpdate = sloganUpdate;
