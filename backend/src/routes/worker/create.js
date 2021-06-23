const yup = require('yup');

const { StatusCodes } = require('http-status-codes');

const { assignExistProperties } = require('../../utils/helpers');

const { Worker } = require('../../database');

const { mapWorkerToResponse } = require('./utils/mappers');

const workerCreateRoute = {
  path: '/',
  method: 'POST',
  checkAuth: true,
  validate: {
    body: {
      type: 'json',
      schema: yup.object({
        name: yup.string().required(),
        position: yup.string().required(),
        text: yup.string().required(),
        imageFileId: yup.objectId().required(),
        showOnHomePage: yup.boolean().optional(),
        placeOnHomePage: yup.number().min(1).optional(),
      }),
    },
  },
  async handler(context) {
    const { body } = context.request;

    let worker = new Worker({
      imageFile: body.imageFileId,
    });

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

    context.status = StatusCodes.CREATED;

    context.body = {
      response: mapWorkerToResponse(worker),
    };
  },
};

exports.workerCreateRoute = workerCreateRoute;
