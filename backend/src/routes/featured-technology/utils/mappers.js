const { mapFileToResponse } = require('../../file/utils/mappers');

const mapFeaturedTechnologyToResponse = (featuredTechnology) => ({
  id: featuredTechnology.id,
  name: featuredTechnology.name,
  text: featuredTechnology.text,
  imageFile: featuredTechnology.imageFile
    ? mapFileToResponse(featuredTechnology.imageFile)
    : null,
  label: featuredTechnology.label,
});

exports.mapFeaturedTechnologyToResponse = mapFeaturedTechnologyToResponse;
