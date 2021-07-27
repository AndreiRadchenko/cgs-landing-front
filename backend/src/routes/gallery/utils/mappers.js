const { mapFileToResponse } = require('../../file/utils/mappers');

const mapGalleryToResponse = (gallery) => ({
  id: gallery.id,
  title: gallery.title,
  text: gallery.text,
  imageFiles: gallery.imageFiles.map(mapFileToResponse),
  showOnPartnersPage: gallery.showOnPartnersPage,
  placeOnPartnersPage: gallery.placeOnPartnersPage,
});

exports.mapGalleryToResponse = mapGalleryToResponse;
