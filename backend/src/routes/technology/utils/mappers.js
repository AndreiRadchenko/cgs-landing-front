const { mapFileToResponse } = require('../../file/utils/mappers');

const mapTechnologyToResponse = (technology) => ({
  id: technology.id,
  name: technology.name,
  category: technology.category,
  iconFile: mapFileToResponse(technology.iconFile),
});

exports.mapTechnologyToResponse = mapTechnologyToResponse;
