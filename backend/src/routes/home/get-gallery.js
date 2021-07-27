const { Gallery } = require('../../database');

const { mapGalleryToResponse } = require('./utils/mappers');

const getGallery = {
  path: '/get-gallery',
  method: 'GET',
  async handler(context) {
    const query = Gallery.find();

    query.where('showOnPartnersPage', true);

    query.populate({
      path: 'imageFiles',
    });

    query.sort({
      placeOnPartnersPage: 1,
    });

    const gallery = await query.exec();

    // console.log(gallery)

    context.body = {
      response: gallery.map(mapGalleryToResponse),
    };
  },
};

exports.getGallery = getGallery;
