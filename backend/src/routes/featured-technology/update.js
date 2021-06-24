const yup = require('yup');

const { StatusCodes } = require('http-status-codes');

const { assignExistProperties } = require('../../utils/helpers');

const { FeaturedTechnology } = require('../../database');

const { mapFeaturedTechnologyToResponse } = require('./utils/mappers');

const featuredTechnologyUpdate = {
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
        name: yup.string().optional(),
        text: yup.string().optional(),
        imageFileId: yup.objectId().optional(),
        label: yup.string().optional(),
      }),
    },
  },
  async handler(context) {
    const { params, body } = context.request;

    let featuredTechnology = await FeaturedTechnology.findById(params.id);

    if (!featuredTechnology) {
      context.status = StatusCodes.NOT_FOUND;

      context.body = {
        response: null,
      };

      return;
    }

    if (body.imageFileId !== undefined) {
      featuredTechnology.imageFile = body.imageFileId;
    }

    assignExistProperties(featuredTechnology, body, [
      'name',
      'text',
      'label',
    ]);

    await featuredTechnology.save();

    featuredTechnology.populate({
      path: 'imageFile',
    });

    featuredTechnology = await featuredTechnology.execPopulate();

    context.body = {
      response: mapFeaturedTechnologyToResponse(featuredTechnology),
    };
  },
};

exports.featuredTechnologyUpdate = featuredTechnologyUpdate;
