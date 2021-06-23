const yup = require('yup');

const { Article } = require('../../database');

const { mapArticleToResponse } = require('./utils/mappers');

const articleGet = {
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

    const query = Article.find();

    if (params.id !== undefined) {
      query.where('_id', params.id);
    }

    query.populate([
      {
        path: 'imageFile',
      },
      {
        path: 'tags',
      },
    ]);

    const articles = await query.exec();

    context.body = {
      response: articles.map(mapArticleToResponse),
    };
  },
};

exports.articleGet = articleGet;
