const yup = require('yup');

const { assignExistProperties } = require('../../utils/helpers');

const { Slogan } = require('../../database');

const { mapSloganToResponse } = require('./utils/mappers');

const sloganUpdate = {
  path: '/:id',
  method: 'PUT',
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
  handler: async (context) => {
    const { params, body } = context.request;

    const slogan = await Slogan.findById(params.id);

    if (!slogan) {
      context.status = 404;

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

    context.status = 200;

    context.body = {
      response: mapSloganToResponse(slogan),
    };
  },
};

exports.sloganUpdate = sloganUpdate;
