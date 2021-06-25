const { mapFileToResponse } = require('../../file/utils/mappers');
const { mapTechnologyToResponse } = require('../../technology/utils/mappers');

const mapProjectToResponse = (project) => ({
  id: project.id,
  name: project.name,
  countryCode: project.countryCode,
  shortDescription: project.shortDescription,
  fullDescription: project.fullDescription,
  technologies: project.technologies.map(mapTechnologyToResponse),
  link: project.link ?? null,
  imageFile: project.imageFile
    ? mapFileToResponse(project.imageFile)
    : null,
  showOnHomePage: project.showOnHomePage,
});

exports.mapProjectToResponse = mapProjectToResponse;
