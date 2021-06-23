const yup = require('yup');

const { StatusCodes } = require('http-status-codes');

const { assignExistProperties } = require('../../utils/helpers');

const { FeaturedTechnology } = require('../../database');

const { mapFeaturedTechnologyToResponse } = require('./utils/mappers');

const featuredTechnologyCreate = {
  path: '/',
  method: 'POST',
  checkAuth: true,
  validate: {
    body: {
      type: 'json',
      schema: yup.object({
        name: yup.string().required(),
        text: yup.string().required(),
        imageFileId: yup.objectId().required(),
      }),
    },
  },
  async handler(context) {
    const { body } = context.request;

    let featuredTechnology = new FeaturedTechnology({
      imageFile: body.imageFileId,
    });

    assignExistProperties(featuredTechnology, body, [
      'name',
      'text',
    ]);

    await featuredTechnology.save();

    featuredTechnology.populate({
      path: 'imageFile',
    });

    featuredTechnology = await featuredTechnology.execPopulate();

    context.status = StatusCodes.CREATED;

    context.body = {
      response: mapFeaturedTechnologyToResponse(featuredTechnology),
    };
  },
};

exports.featuredTechnologyCreate = featuredTechnologyCreate;
