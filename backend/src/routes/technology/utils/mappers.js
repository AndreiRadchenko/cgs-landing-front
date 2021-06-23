const { mapFileToResponse } = require('../../file/utils/mappers');

const mapTechnologyToResponse = (technology) => ({
  id: technology.id,
  name: technology.name,
  category: technology.category,
  iconFile: technology.iconFile
    ? mapFileToResponse(technology.iconFile)
    : null,
  showOnHomePage: technology.showOnHomePage,
});

exports.mapTechnologyToResponse = mapTechnologyToResponse;
