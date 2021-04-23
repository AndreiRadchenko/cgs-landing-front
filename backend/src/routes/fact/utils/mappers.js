const { mapFileToResponse } = require('../../file/utils/mappers');

const mapFactToResponse = (fact) => ({
  id: fact.id,
  title: fact.title,
  text: fact.text,
  iconFile: mapFileToResponse(fact.iconFile),
  showOnHomePage: fact.showOnHomePage,
});

exports.mapFactToResponse = mapFactToResponse;
