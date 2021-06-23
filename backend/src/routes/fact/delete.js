const yup = require('yup');

const { StatusCodes } = require('http-status-codes');

const { Fact } = require('../../database');

const factDelete = {
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

    const fact = await Fact.findByIdAndDelete(params.id);

    if (!fact) {
      context.status = StatusCodes.NOT_FOUND;

      context.body = {
        response: null,
      };

      return;
    }

    context.status = StatusCodes.NO_CONTENT;
  },
};

exports.factDelete = factDelete;
