const yup = require('yup');

const { StatusCodes } = require('http-status-codes');

const { assignExistProperties } = require('../../utils/helpers');

const { Fact } = require('../../database');

const { mapFactToResponse } = require('./utils/mappers');

const factUpdate = {
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
        title: yup.string().min(1).optional(),
        text: yup.string().min(1).optional(),
        iconFileId: yup.objectId().optional(),
        showOnHomePage: yup.boolean().optional(),
      }),
    },
  },
  async handler(context) {
    const { params, body } = context.request;

    let fact = await Fact.findById(params.id);

    if (!fact) {
      context.status = StatusCodes.NOT_FOUND;

      context.body = {
        response: null,
      };

      return;
    }

    if (body.iconFileId !== undefined) {
      fact.iconFile = body.iconFileId;
    }

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

    context.body = {
      response: mapFactToResponse(fact),
    };
  },
};

exports.factUpdate = factUpdate;
