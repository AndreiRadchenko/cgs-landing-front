const yup = require('yup');

const { StatusCodes } = require('http-status-codes');

const { Technology } = require('../../database');

const technologyDelete = {
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

    const technology = await Technology.findByIdAndDelete(params.id);

    if (!technology) {
      context.status = StatusCodes.NOT_FOUND;

      context.body = {
        response: null,
      };

      return;
    }

    context.status = StatusCodes.NO_CONTENT;
  },
};

exports.technologyDelete = technologyDelete;
