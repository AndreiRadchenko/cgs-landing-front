const yup = require('yup');

const { StatusCodes } = require('http-status-codes');

const { assignExistProperties } = require('../../utils/helpers');

const { BlogTag } = require('../../database');

const { mapBlogTagToResponse } = require('./utils/mappers');

const blogTagUpdate = {
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
        name: yup.string().min(1).optional(),
      }),
    },
  },
  async handler(context) {
    const { params, body } = context.request;

    const blogTag = await BlogTag.findById(params.id);

    if (!blogTag) {
      context.status = StatusCodes.NOT_FOUND;

      context.body = {
        response: null,
      };

      return;
    }

    assignExistProperties(blogTag, body, ['name']);

    await blogTag.save();

    context.body = {
      response: mapBlogTagToResponse(blogTag),
    };
  },
};

exports.blogTagUpdate = blogTagUpdate;
