const yup = require('yup');

const { StatusCodes } = require('http-status-codes');

const { StepToEarn } = require('../../database');

const stepToEarnDelete = {
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

    const stepToEarn = await StepToEarn.findByIdAndDelete(params.id);

    if (!stepToEarn) {
      context.status = StatusCodes.NOT_FOUND;

      context.body = {
        response: null,
      };

      return;
    }

    context.status = StatusCodes.NO_CONTENT;
  },
};

exports.stepToEarnDelete = stepToEarnDelete;
