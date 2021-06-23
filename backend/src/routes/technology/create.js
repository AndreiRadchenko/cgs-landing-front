const yup = require('yup');

const { StatusCodes } = require('http-status-codes');

const { technologyTypes } = require('../../utils/constants');
const { assignExistProperties } = require('../../utils/helpers');

const { Technology } = require('../../database');

const { mapTechnologyToResponse } = require('./utils/mappers');

const technologyCreate = {
  path: '/',
  method: 'POST',
  checkAuth: true,
  validate: {
    body: {
      type: 'json',
      schema: yup.object({
        name: yup.string().required(),
        category: yup.string().oneOf(technologyTypes).required(),
        iconFileId: yup.objectId().required(),
        showOnHomePage: yup.boolean().optional(),
      }),
    },
  },
  async handler(context) {
    const { body } = context.request;

    let technology = new Technology({
      iconFile: body.iconFileId,
    });

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

    context.status = StatusCodes.CREATED;

    context.body = {
      response: mapTechnologyToResponse(technology),
    };
  },
};

exports.technologyCreate = technologyCreate;
