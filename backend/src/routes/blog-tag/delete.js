const yup = require('yup');

const { StatusCodes } = require('http-status-codes');

const { BlogTag } = require('../../database');

const blogTagDelete = {
  path: '/:id',
  method: 'DELETE',
  validate: {
    params: {
      schema: yup.object({
        id: yup.string().required(),
      }),
    },
  },
  async handler(context) {
    const { params } = context.request;

    const blogTag = await BlogTag.findByIdAndDelete(params.id);

    if (!blogTag) {
      context.status = StatusCodes.NOT_FOUND;

      context.body = {
        response: null,
      };

      return;
    }

    context.status = StatusCodes.CREATED;
  },
};

exports.blogTagDelete = blogTagDelete;
