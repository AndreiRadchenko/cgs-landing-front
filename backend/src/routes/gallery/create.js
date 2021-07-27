const yup = require('yup');

const { StatusCodes } = require('http-status-codes');

const { assignExistProperties } = require('../../utils/helpers');

const { Gallery } = require('../../database');

const { mapGalleryToResponse } = require('./utils/mappers');

const galleryCreate = {
  path: '/',
  method: 'POST',
  checkAuth: true,
  validate: {
    body: {
      type: 'json',
      schema: yup.object({
        title: yup.string().required(),
        text: yup.string().required(),
        imageFileIds: yup.array().of(yup.objectId()).min(1).required(),

        // firstHorizontalFile: yup.objectId().required(),
        // secondHorizontalFile: yup.objectId().required(),
        // firstVerticalFile: yup.objectId().required(),
        // secondVerticalFile: yup.objectId().required(),
        showOnPartnersPage: yup.boolean().optional(),
        placeOnPartnersPage: yup.number().min(1).optional(),
      }),
    },
  },
  async handler(context) {
    const { body } = context.request;

    let gallery = new Gallery({
      imageFiles: body.imageFileIds,
      // firstHorizontalFile: body.iconFileId,
      // secondHorizontalFile: body.iconFileId,
      // firstVerticalFile: body.iconFileId,
      // secondVerticalFile: body.iconFileId,
    });

    assignExistProperties(gallery, body, [
      'title',
      'text',
      'showOnPartnersPage',
      'placeOnPartnersPage',
    ]);

    await gallery.save();

    gallery.populate({
      path: 'imageFiles',
    });

    gallery = await gallery.execPopulate();

    context.status = StatusCodes.CREATED;

    context.body = {
      response: mapGalleryToResponse(gallery),
    };
  },
};

exports.galleryCreate = galleryCreate;
