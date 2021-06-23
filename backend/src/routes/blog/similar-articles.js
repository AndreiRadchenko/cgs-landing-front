const yup = require('yup');

const { StatusCodes } = require('http-status-codes');

const { Article } = require('../../database');

const { mapArticleToResponse } = require('./utils/mappers');

const MAX_SIMILAR_ARTICLES = 2;

const getSimilarArticleIds = async (article) => {
  const articles = await Article.find(
    {
      _id: {
        $ne: article.id,
      },
      $or: article.tags.map((tag) => ({ tags: tag })),
    },
    {
      tags: 1,
    },
  );

  if (articles.length === 0) {
    return [];
  }

  let similarities = new Map();

  for (const tag of article.tags) {
    for (const { id, tags } of articles) {
      if (similarities.size > MAX_SIMILAR_ARTICLES) {
        break;
      }

      if (!tags.includes(tag)) {
        continue;
      }

      let similarity = similarities.get(id);

      if (similarity === undefined) {
        similarity = {
          matches: 0,
          articleId: id,
        };
      }

      similarity.matches += 1;

      similarities.set(id, similarity);
    }
  }

  similarities = [...similarities.values()];

  similarities.sort((a, b) => b.matches - a.matches);

  return similarities.map(({ articleId }) => articleId);
};

const similarArticlesRoute = {
  path: '/similar-articles/:id',
  method: 'GET',
  validate: {
    params: {
      schema: yup.object({
        id: yup.objectId().required(),
      }),
    },
  },
  async handler(context) {
    const article = await Article.findOne(
      {
        _id: context.request.params.id,
      },
      {
        tags: 1,
      },
    );

    if (!article) {
      context.status = StatusCodes.NOT_FOUND;

      context.body = {
        response: null,
      };

      return;
    }

    const articleIds = await getSimilarArticleIds(article);

    if (articleIds.length === 0) {
      context.body = {
        response: [],
      };

      return;
    }

    const query = Article.find();

    query.where('_id', {
      $in: articleIds,
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

exports.similarArticlesRoute = similarArticlesRoute;
