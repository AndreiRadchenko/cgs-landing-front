const { Joi } = require('koa-joi-router');

const { Slogan } = require('../../database');

const createSlogan = {
  path: '/',
  method: 'POST',
  validate: {
    body: {
      title: Joi.string().required(),
      text: Joi.string().required(),
      selected: Joi.boolean().optional(),
    },
    type: 'json',
    output: {
      201: {
        body: {
          response: Joi.object({
            id: Joi.objectId(),
            title: Joi.string().required(),
            text: Joi.string().required(),
            selected: Joi.boolean().required(),
          }),
        },
      },
    },
  },
  handler: async (context) => {
    const { body } = context.request;

    const slogan = await Slogan.create({
      title: body.title,
      text: body.text,
      selected: body.selected,
    });

    context.status = 201;

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

exports.createSlogan = createSlogan;
