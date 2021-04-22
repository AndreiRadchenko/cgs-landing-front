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
