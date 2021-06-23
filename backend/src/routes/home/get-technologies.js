const { TechnologyType } = require('../../utils/constants');

const { Technology } = require('../../database');

const { mapCategoryToResponse } = require('./utils/mappers');

const sequence = [
  TechnologyType.WEB,
  TechnologyType.MOBILE,
  TechnologyType.UI_UX,
  TechnologyType.BACKEND,
];

const getTechnologies = {
  path: '/get-technologies',
  method: 'GET',
  async handler(context) {
    const categories = await Technology.aggregate([
      {
        $match: {
          showOnHomePage: true,
        },
      },
      {
        $group: {
          _id: '$category',
          type: {
            $first: '$category',
          },
          technologies: {
            $push: '$name',
          },
        },
      },
    ]);

    categories.sort((a, b) => {
      const aIndex = sequence.findIndex((type) => a.type === type);
      const bIndex = sequence.findIndex((type) => b.type === type);

      return aIndex - bIndex;
    });

    context.body = {
      response: categories.map(mapCategoryToResponse),
    };
  },
};

exports.getTechnologies = getTechnologies;
