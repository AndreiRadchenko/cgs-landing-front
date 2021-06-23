const yup = require('yup');

const { StatusCodes } = require('http-status-codes');

const { Worker } = require('../../database');

const workerDeleteRoute = {
  path: '/:id',
  method: 'DELETE',
  checkAuth: true,
  validate: {
    params: {
      schema: yup.object({
        id: yup.objectId().required(),
      }),
    },
  },
  async handler(context) {
    const { params } = context.request;

    const worker = await Worker.findByIdAndDelete(params.id);

    if (!worker) {
      context.status = StatusCodes.NOT_FOUND;

      context.body = {
        response: null,
      };

      return;
    }

    context.status = StatusCodes.NO_CONTENT;
  },
};

exports.workerDeleteRoute = workerDeleteRoute;
