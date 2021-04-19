const { Joi } = require('koa-joi-router');

const { Slogan } = require('../../database');

const deleteSlogan = {
  path: '/:id',
  method: 'DELETE',
  validate: {
    params: {
      id: Joi.objectId(),
    },
    output: {
      404: {
        body: {
          response: Joi.equal(null),
        },
      },
    },
  },
  handler: async (context) => {
    const { params } = context.request;

    const slogan = await Slogan.findById(params.id);

    if (!slogan) {
      context.status = 404;

      context.body = {
        response: null,
      };

      return;
    }

    await slogan.delete();

    context.status = 204;
  },
};

exports.deleteSlogan = deleteSlogan;
