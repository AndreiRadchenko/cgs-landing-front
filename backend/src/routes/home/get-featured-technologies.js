const { FeaturedTechnology } = require('../../database');

const { mapFeaturedTechnologyToResponse } = require('./utils/mappers');

const getFeaturedTechnologies = {
  path: '/get-featured-technologies',
  method: 'GET',
  async handler(context) {
    const query = FeaturedTechnology.find();

    query.populate({
      path: 'imageFile',
    });

    const featuredTechnologies = await query.exec();

    context.body = {
      response: featuredTechnologies.map(mapFeaturedTechnologyToResponse),
    };
  },
};

exports.getFeaturedTechnologies = getFeaturedTechnologies;
