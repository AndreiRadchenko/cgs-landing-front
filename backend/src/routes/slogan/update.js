const { Joi } = require('koa-joi-router');

const { Slogan } = require('../../database');

const { assignExistProperties } = require('../../utils/helpers');

const updateSlogan = {
  path: '/:id',
  method: 'PUT',
  validate: {
    params: {
      id: Joi.objectId(),
    },
    body: {
      title: Joi.string().optional(),
      text: Joi.string().optional(),
      selected: Joi.boolean().optional(),
    },
    type: 'json',
    output: {
      200: {
        body: {
          response: Joi.object({
            id: Joi.objectId(),
            title: Joi.string().required(),
            text: Joi.string().required(),
            selected: Joi.boolean().required(),
          }),
        },
      },
      404: {
        body: {
          response: Joi.equal(null),
        },
      },
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

    assignExistProperties(slogan, body, ['title', 'text', 'selected']);

    await slogan.save();

    context.status = 200;

    context.body = {
      response: {
        id: slogan.id,
        title: slogan.title,
        text: slogan.text,
        selected: slogan.selected,
      },
    };
  },
};

exports.updateSlogan = updateSlogan;
