const yup = require('yup');

const { TechnologyType } = require('../../utils/constants');

const { Technology } = require('../../database');

const { mapTechnologyToResponse } = require('./utils/mappers');

const technologyCreate = {
  path: '/',
  method: 'POST',
  validate: {
    body: {
      type: 'json',
      schema: yup.object({
        name: yup.string().required(),
        category: yup.string().oneOf(Object.values(TechnologyType)).required(),
        iconFileId: yup.objectId().required(),
      }),
    },
  },
  handler: async (context) => {
    const { body } = context.request;

    let technology = await Technology.create({
      name: body.name,
      iconFile: body.iconFileId,
      category: body.category,
    });

    technology.populate({
      path: 'iconFile',
    });

    technology = await technology.execPopulate();

    context.status = 201;

    context.body = {
      response: mapTechnologyToResponse(technology),
    };
  },
};

exports.technologyCreate = technologyCreate;
