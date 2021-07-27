const yup = require('yup');

const { StatusCodes } = require('http-status-codes');

const { Gallery } = require('../../database');

const galleryDelete = {
  path: '/:id',
  method: 'DELETE',
  checkAuth: true,
  validate: {
    params: {
      schema: yup.object({
        id: yup.string().required(),
      }),
    },
  },
  async handler(context) {
    const { params } = context.request;

    const gallery = await Gallery.findByIdAndDelete(params.id);

    if (!gallery) {
      context.status = StatusCodes.NOT_FOUND;

      context.body = {
        response: null,
      };

      return;
    }

    context.status = StatusCodes.NO_CONTENT;
  },
};

exports.galleryDelete = galleryDelete;
