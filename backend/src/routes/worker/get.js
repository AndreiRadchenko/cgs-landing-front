const yup = require('yup');

const { Worker } = require('../../database');

const { mapWorkerToResponse } = require('./utils/mappers');

const workerGetRoute = {
  path: '/:id?',
  method: 'GET',
  checkAuth: true,
  validate: {
    params: {
      schema: yup.object({
        id: yup.objectId().optional(),
      }),
    },
  },
  async handler(context) {
    const { params } = context.request;

    const query = Worker.find();

    if (params.id !== undefined) {
      query.where('_id', params.id);
    }

    query.populate({
      path: 'imageFile',
    });

    const workers = await query.exec();

    context.body = {
      response: workers.map(mapWorkerToResponse),
    };
  },
};

exports.workerGetRoute = workerGetRoute;
