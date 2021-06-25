const yup = require('yup');

const { StatusCodes } = require('http-status-codes');

const { assignExistProperties } = require('../../utils/helpers');

const { Article } = require('../../database');

const { mapArticleToResponse } = require('./utils/mappers');

const articleUpdate = {
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
        title: yup.string().min(1).optional(),
        author: yup.string().min(1).optional(),
        imageFileId: yup.objectId().optional(),
        content: yup.string().min(1).optional(),
        tagIds: yup.array().of(yup.objectId()).min(1).optional(),
        views: yup.number().optional(),
        createdAt: yup.date().optional(),
      }),
    },
  },
  async handler(context) {
    const { params, body } = context.request;

    let article = await Article.findById(params.id);

    if (!article) {
      context.status = StatusCodes.NOT_FOUND;

      context.body = {
        response: null,
      };

      return;
    }

    if (body.imageFileId !== undefined) {
      article.imageFile = body.imageFileId;
    }

    if (body.tagIds !== undefined) {
      article.tags = body.tagIds;
    }

    assignExistProperties(article, body, [
      'title',
      'author',
      'content',
      'views',
      'createdAt',
    ]);

    await article.save();

    article.populate([
      {
        path: 'imageFile',
      },
      {
        path: 'tags',
      },
    ]);

    article = await article.execPopulate();

    context.body = {
      response: mapArticleToResponse(article),
    };
  },
};

exports.articleUpdate = articleUpdate;
