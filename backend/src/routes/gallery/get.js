const yup = require('yup');

const { Gallery } = require('../../database');

const { mapGalleryToResponse } = require('./utils/mappers');

const galleryGet = {
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

    const query = Gallery.find();

    if (params.id !== undefined) {
      query.where('_id', params.id);
    }

    query.populate({
      path: 'imageFiles',
    });

    const steps = await query.exec();

    context.body = {
      response: steps.map(mapGalleryToResponse),
    };
  },
};

exports.galleryGet = galleryGet;
