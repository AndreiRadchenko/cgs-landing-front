const yup = require('yup');

const { StatusCodes } = require('http-status-codes');

const { Article } = require('../../database');

const { mapArticleToResponse } = require('./utils/mappers');

const articleRoute = {
  path: '/:id',
  method: 'GET',
  validate: {
    params: {
      schema: yup.object({
        id: yup.objectId().required(),
      }),
    },
  },
  async handler(context) {
    const query = Article.findOne();

    query.where('_id', context.request.params.id);

    query.populate([
      {
        path: 'imageFile',
      },
      {
        path: 'tags',
      },
    ]);

    const article = await query.exec();

    if (!article) {
      context.status = StatusCodes.NOT_FOUND;

      context.body = {
        response: null,
      };

      return;
    }

    setImmediate(async () => {
      await Article.findOneAndUpdate(
        {
          _id: article.id,
        },
        {
          $inc: {
            views: 1,
          },
        },
      );
    });

    context.body = {
      response: mapArticleToResponse(article),
    };
  },
};

exports.articleRoute = articleRoute;
