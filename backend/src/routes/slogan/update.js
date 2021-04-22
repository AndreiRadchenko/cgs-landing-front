const yup = require('yup');

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
        title: yup.string().optional(),
        text: yup.string().optional(),
        selected: yup.boolean().optional(),
      }),
    },
  },
  handler: async (context) => {
    const { params, body } = context.request;

    const slogan = await Slogan.updateOne(
      {
        id: params.id,
      },
      {
        title: body.title,
        text: body.text,
        selected: body.selected,
      },
      {
        new: true,
      },
    );

    if (!slogan) {
      context.status = 404;

      context.body = {
        response: null,
      };

      return;
    }

    context.status = 200;

    context.body = {
      response: mapSloganToResponse(slogan),
    };
  },
};

exports.sloganUpdate = sloganUpdate;
