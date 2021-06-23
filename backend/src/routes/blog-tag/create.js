const yup = require('yup');

const { StatusCodes } = require('http-status-codes');

const { assignExistProperties } = require('../../utils/helpers');

const { BlogTag } = require('../../database');

const { mapBlogTagToResponse } = require('./utils/mappers');

const blogTagCreate = {
  path: '/',
  method: 'POST',
  checkAuth: true,
  validate: {
    body: {
      type: 'json',
      schema: yup.object({
        name: yup.string().required(),
      }),
    },
  },
  async handler(context) {
    const { body } = context.request;

    const blogTag = new BlogTag();

    assignExistProperties(blogTag, body, ['name']);

    await blogTag.save();

    context.status = StatusCodes.CREATED;

    context.body = {
      response: mapBlogTagToResponse(blogTag),
    };
  },
};

exports.blogTagCreate = blogTagCreate;
