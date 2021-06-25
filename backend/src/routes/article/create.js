const yup = require('yup');

const { StatusCodes } = require('http-status-codes');

const { assignExistProperties } = require('../../utils/helpers');

const { Article } = require('../../database');

const { mapArticleToResponse } = require('./utils/mappers');

const articleCreate = {
  path: '/',
  method: 'POST',
  checkAuth: true,
  validate: {
    body: {
      type: 'json',
      schema: yup.object({
        title: yup.string().required(),
        author: yup.string().required(),
        imageFileId: yup.objectId().required(),
        content: yup.string().required(),
        tagIds: yup.array().of(yup.objectId()).min(1).required(),
        views: yup.number().optional(),
        createdAt: yup.date().optional(),
      }),
    },
  },
  async handler(context) {
    const { body } = context.request;

    let article = new Article({
      imageFile: body.imageFileId,
      tags: body.tagIds,
    });

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

    context.status = StatusCodes.CREATED;

    context.body = {
      response: mapArticleToResponse(article),
    };
  },
};

exports.articleCreate = articleCreate;
