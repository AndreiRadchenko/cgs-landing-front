const { Article } = require('../../database');

const { mapArticleToResponse } = require('./utils/mappers');

const getMostViewedArticle = (rawArticles) => {
  const articles = [...rawArticles];

  articles.sort((a, b) => b.views - a.views);

  return articles[0];
};

const articlesRoute = {
  path: '/',
  method: 'GET',
  async handler(context) {
    const query = Article.find();

    query.sort({
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

    const allArticles = await query.exec();

    const mostViewedArticlte = getMostViewedArticle(allArticles);

    const articles = [
      mostViewedArticlte,

      ...allArticles.filter((article) => article.id !== mostViewedArticlte.id),
    ];

    context.body = {
      response: articles.map(mapArticleToResponse),
    };
  },
};

exports.articlesRoute = articlesRoute;
