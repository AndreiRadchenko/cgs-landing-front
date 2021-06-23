const yup = require('yup');

const { StatusCodes } = require('http-status-codes');

const { assignExistProperties } = require('../../utils/helpers');

const { Worker } = require('../../database');

const { mapWorkerToResponse } = require('./utils/mappers');

const workerUpdateRoute = {
  path: '/:id',
  method: 'PUT',
  checkAuth: true,
  validate: {
    params: {
      schema: yup.object({
        id: yup.objectId().required(),
      }),
    },
    body: {
      type: 'json',
      schema: yup.object({
        name: yup.string().min(1).optional(),
        position: yup.string().min(1).optional(),
        text: yup.string().min(1).optional(),
        imageFileId: yup.objectId().optional(),
        showOnHomePage: yup.boolean().optional(),
        placeOnHomePage: yup.number().min(1).optional(),
      }),
    },
  },
  async handler(context) {
    const { params, body } = context.request;

    let worker = await Worker.findById(params.id);

    if (!worker) {
      context.status = StatusCodes.NOT_FOUND;

      context.body = {
        response: null,
      };

      return;
    }

    if (body.imageFileId !== undefined) {
      worker.imageFile = body.imageFileId;
    }

    assignExistProperties(worker, body, [
      'name',
      'position',
      'text',
      'showOnHomePage',
      'placeOnHomePage',
    ]);

    await worker.save();

    worker.populate({
      path: 'imageFile',
    });

    worker = await worker.execPopulate();

    context.body = {
      response: mapWorkerToResponse(worker),
    };
  },
};

exports.workerUpdateRoute = workerUpdateRoute;
