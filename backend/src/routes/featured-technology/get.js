const yup = require('yup');

const { FeaturedTechnology } = require('../../database');

const { mapFeaturedTechnologyToResponse } = require('./utils/mappers');

const featuredTechnologyGet = {
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

    const query = FeaturedTechnology.find();

    if (params.id !== undefined) {
      query.where('_id', params.id);
    }

    query.populate({
      path: 'imageFile',
    });

    const featuredTechnologies = await query.exec();

    context.body = {
      response: featuredTechnologies.map(mapFeaturedTechnologyToResponse),
    };
  },
};

exports.featuredTechnologyGet = featuredTechnologyGet;
