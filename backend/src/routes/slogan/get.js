const { Joi } = require('koa-joi-router');

const { Slogan } = require('../../database');

const getSlogan = {
  path: '/',
  method: 'GET',
  validate: {
    output: {
      200: {
        body: {
          response: Joi.object({
            title: Joi.string().required(),
            text: Joi.string().required(),
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
    const slogan = await Slogan.findOne({
      selected: true,
    });

    if (!slogan) {
      context.status = 404;

      context.body = {
        response: null,
      };

      return;
    }

    context.status = 200;

    context.body = {
      response: {
        title: slogan.title,
        text: slogan.text,
      },
    };
  },
};

exports.getSlogan = getSlogan;
