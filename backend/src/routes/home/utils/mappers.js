const mapSloganToResponse = (slogan) => ({
  title: slogan.title,
  text: slogan.text,
});

exports.mapSloganToResponse = mapSloganToResponse;

const mapTechnologyToResponse = (technology) => ({
  id: technology.id,
  name: technology.name,
  category: technology.category,
  iconFileSavedAs: technology.iconFile.savedAs,
});

exports.mapTechnologyToResponse = mapTechnologyToResponse;

const mapProjectToResponse = (project) => ({
  id: project.id,
  name: project.name,
  countryCode: project.countryCode,
  shortDescription: project.shortDescription,
  fullDescription: project.fullDescription,
  technologies: project.technologies.map(mapTechnologyToResponse),
  projectLink: project.projectLink,
  imageFileSavedAs: project.imageFile.savedAs,
});

exports.mapProjectToResponse = mapProjectToResponse;
