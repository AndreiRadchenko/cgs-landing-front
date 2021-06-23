const yup = require('yup');

const { StatusCodes } = require('http-status-codes');

const { Slogan } = require('../../database');

const sloganDelete = {
  path: '/:id',
  method: 'DELETE',
  checkAuth: true,
  validate: {
    params: {
      schema: yup.object({
        id: yup.string().required(),
      }),
    },
  },
  async handler(context) {
    const { params } = context.request;

    const slogan = await Slogan.findByIdAndDelete(params.id);

    if (!slogan) {
      context.status = StatusCodes.NOT_FOUND;

      context.body = {
        response: null,
      };

      return;
    }

    context.status = StatusCodes.NO_CONTENT;
  },
};

exports.sloganDelete = sloganDelete;
