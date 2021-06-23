const yup = require('yup');

const { StatusCodes } = require('http-status-codes');

const { FeaturedTechnology } = require('../../database');

const featuredTechnologyDelete = {
  path: '/:id',
  method: 'DELETE',
  checkAuth: true,
  validate: {
    params: {
      schema: yup.object({
        id: yup.string().required(),
      }),
    },
  },
  async handler(context) {
    const { params } = context.request;

    const featuredTechnology = await FeaturedTechnology.findByIdAndDelete(params.id);

    if (!featuredTechnology) {
      context.status = StatusCodes.NOT_FOUND;

      context.body = {
        response: null,
      };

      return;
    }

    context.status = StatusCodes.NO_CONTENT;
  },
};

exports.featuredTechnologyDelete = featuredTechnologyDelete;
