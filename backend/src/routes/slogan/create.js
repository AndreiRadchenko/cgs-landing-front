const yup = require('yup');

const { StatusCodes } = require('http-status-codes');

const { assignExistProperties } = require('../../utils/helpers');

const { Slogan } = require('../../database');

const { mapSloganToResponse } = require('./utils/mappers');

const sloganCreate = {
  path: '/',
  method: 'POST',
  checkAuth: true,
  validate: {
    body: {
      type: 'json',
      schema: yup.object({
        title: yup.string().required(),
        text: yup.string().required(),
        selected: yup.boolean().optional(),
      }),
    },
  },
  async handler(context) {
    const { body } = context.request;

    const slogan = new Slogan();

    assignExistProperties(slogan, body, [
      'title',
      'text',
      'selected',
    ]);

    await slogan.save();

    context.status = StatusCodes.CREATED;

    context.body = {
      response: mapSloganToResponse(slogan),
    };
  },
};

exports.sloganCreate = sloganCreate;
