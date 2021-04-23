const { mapFileToResponse } = require('../../file/utils/mappers');
const { mapTechnologyToResponse } = require('../../technology/utils/mappers');

const mapProjectToResponse = (project) => ({
  id: project.id,
  name: project.name,
  countryCode: project.countryCode,
  shortDescription: project.shortDescription,
  fullDescription: project.fullDescription,
  technologies: project.technologies.map(mapTechnologyToResponse),
  projectLink: project.projectLink,
  imageFile: mapFileToResponse(project.imageFile),
  showOnHomePage: project.showOnHomePage,
});

exports.mapProjectToResponse = mapProjectToResponse;
