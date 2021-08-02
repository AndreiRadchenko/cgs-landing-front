const { mapFileToResponse } = require('../../file/utils/mappers');

const mapGalleryToResponse = (gallery) => ({
  id: gallery.id,
  title: gallery.title,
  text: gallery.text,
  imageFiles: gallery.imageFiles.map(mapFileToResponse),
  showOnHomePage: gallery.showOnHomePage,
  placeOnHomePage: gallery.placeOnHomePage,
});

exports.mapGalleryToResponse = mapGalleryToResponse;
