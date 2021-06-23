const yup = require('yup');

const { StatusCodes } = require('http-status-codes');

const { assignExistProperties } = require('../../utils/helpers');

const { Fact } = require('../../database');

const { mapFactToResponse } = require('./utils/mappers');

const factCreate = {
  path: '/',
  method: 'POST',
  checkAuth: true,
  validate: {
    body: {
      type: 'json',
      schema: yup.object({
        title: yup.string().required(),
        text: yup.string().required(),
        iconFileId: yup.objectId().required(),
        showOnHomePage: yup.boolean().optional(),
      }),
    },
  },
  async handler(context) {
    const { body } = context.request;

    let fact = new Fact({
      iconFile: body.iconFileId,
    });

    assignExistProperties(fact, body, [
      'title',
      'text',
      'showOnHomePage',
    ]);

    await fact.save();

    fact.populate({
      path: 'iconFile',
    });

    fact = await fact.execPopulate();

    context.status = StatusCodes.CREATED;

    context.body = {
      response: mapFactToResponse(fact),
    };
  },
};

exports.factCreate = factCreate;
