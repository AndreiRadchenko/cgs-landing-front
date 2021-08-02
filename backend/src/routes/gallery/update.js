const yup = require('yup');

const { StatusCodes } = require('http-status-codes');

const { assignExistProperties } = require('../../utils/helpers');

const { Gallery } = require('../../database');

const { mapGalleryToResponse } = require('./utils/mappers');

const galleryUpdate = {
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
        title: yup.string().required(),
        text: yup.string().required(),
        imageFileIds: yup.array().of(yup.objectId()).min(1).required(),
        showOnHomePage: yup.boolean().optional(),
        placeOnHomePage: yup.number().min(1).optional(),
      }),
    },
  },
  async handler(context) {
    const { params, body } = context.request;

    let gallery = await Gallery.findById(params.id);

    if (!gallery) {
      context.status = StatusCodes.NOT_FOUND;

      context.body = {
        response: null,
      };

      return;
    }

    if (body.imageFileIds !== undefined) {
      gallery.imageFiles = body.imageFileIds;
    }

    assignExistProperties(gallery, body, [
      'title',
      'text',
      'showOnHomePage',
      'placeOnHomePage',
    ]);

    await gallery.save();

    gallery.populate({
      path: 'imageFiles',
    });

    gallery = await gallery.execPopulate();

    context.body = {
      response: mapGalleryToResponse(gallery),
    };
  },
};

exports.galleryUpdate = galleryUpdate;
