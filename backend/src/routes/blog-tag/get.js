const yup = require('yup');

const { BlogTag } = require('../../database');

const { mapBlogTagToResponse } = require('./utils/mappers');

const blogTagGet = {
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

    const query = BlogTag.find();

    if (params.id !== undefined) {
      query.where('_id', params.id);
    }

    const blogTags = await query.exec();

    context.body = {
      response: blogTags.map(mapBlogTagToResponse),
    };
  },
};

exports.blogTagGet = blogTagGet;
