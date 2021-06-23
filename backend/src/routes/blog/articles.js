const { Article } = require('../../database');

const { mapArticleToResponse } = require('./utils/mappers');

const articlesRoute = {
  path: '/',
  method: 'GET',
  async handler(context) {
    const query = Article.find();

    query.sort({
      views: -1,
      createdAt: -1,
    });

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

exports.articlesRoute = articlesRoute;
