const yup = require('yup');

const { StatusCodes } = require('http-status-codes');

const { technologyTypes } = require('../../utils/constants');
const { assignExistProperties } = require('../../utils/helpers');

const { Technology } = require('../../database');

const { mapTechnologyToResponse } = require('./utils/mappers');

const technologyUpdate = {
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
        category: yup.string().oneOf(technologyTypes).optional(),
        iconFileId: yup.objectId().optional(),
        showOnHomePage: yup.boolean().optional(),
      }),
    },
  },
  async handler(context) {
    const { params, body } = context.request;

    let technology = await Technology.findById(params.id);

    if (!technology) {
      context.status = StatusCodes.NOT_FOUND;

      context.body = {
        response: null,
      };

      return;
    }

    if (body.iconFileId !== undefined) {
      technology.iconFile = body.iconFileId;
    }

    assignExistProperties(technology, body, [
      'name',
      'category',
      'showOnHomePage',
    ]);

    await technology.save();

    technology.populate({
      path: 'iconFile',
    });

    technology = await technology.execPopulate();

    context.body = {
      response: mapTechnologyToResponse(technology),
    };
  },
};

exports.technologyUpdate = technologyUpdate;
