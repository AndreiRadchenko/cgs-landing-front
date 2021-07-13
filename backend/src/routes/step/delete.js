const yup = require('yup');

const { StatusCodes } = require('http-status-codes');

const { Step } = require('../../database');

const stepDelete = {
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

    const step = await Step.findByIdAndDelete(params.id);

    if (!step) {
      context.status = StatusCodes.NOT_FOUND;

      context.body = {
        response: null,
      };

      return;
    }

    context.status = StatusCodes.NO_CONTENT;
  },
};

exports.stepDelete = stepDelete;
