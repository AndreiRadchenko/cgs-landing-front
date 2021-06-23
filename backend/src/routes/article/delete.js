const yup = require('yup');

const { StatusCodes } = require('http-status-codes');

const { Article } = require('../../database');

const articleDelete = {
  path: '/:id',
  method: 'DELETE',
  checkAuth: true,
  validate: {
    params: {
      schema: yup.object({
        id: yup.objectId().required(),
      }),
    },
  },
  async handler(context) {
    const { params } = context.request;

    const article = await Article.findByIdAndDelete(params.id);

    if (!article) {
      context.status = StatusCodes.NOT_FOUND;

      context.body = {
        response: null,
      };

      return;
    }

    context.status = StatusCodes.NO_CONTENT;
  },
};

exports.articleDelete = articleDelete;
