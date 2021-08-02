const { Gallery } = require('../../database');

const { mapGalleryToResponse } = require('./utils/mappers');

const getGallery = {
  path: '/get-gallery',
  method: 'GET',
  async handler(context) {
    const query = Gallery.find();

    query.where('showOnHomePage', true);

    query.populate({
      path: 'imageFiles',
    });

    query.sort({
      placeOnHomePage: 1,
    });

    const gallery = await query.exec();

    context.body = {
      response: gallery.map(mapGalleryToResponse),
    };
  },
};

exports.getGallery = getGallery;
