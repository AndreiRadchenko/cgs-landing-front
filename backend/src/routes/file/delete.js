const yup = require('yup');

const { StatusCodes } = require('http-status-codes');

const { File } = require('../../database');

const { fileService } = require('../../services');

const fileDelete = {
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

    const file = await File.findById(params.id);

    if (!file) {
      context.status = StatusCodes.NOT_FOUND;

      context.body = {
        response: null,
      };

      return;
    }

    await fileService.delete({
      id: file.s3FileKey,
    });

    await file.delete();

    context.status = StatusCodes.NO_CONTENT;
  },
};

exports.fileDelete = fileDelete;
