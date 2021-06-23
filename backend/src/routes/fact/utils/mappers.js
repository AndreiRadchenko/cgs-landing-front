const { mapFileToResponse } = require('../../file/utils/mappers');

const mapFactToResponse = (fact) => ({
  id: fact.id,
  title: fact.title,
  text: fact.text,
  iconFile: fact.iconFile
    ? mapFileToResponse(fact.iconFile)
    : null,
  showOnHomePage: fact.showOnHomePage,
});

exports.mapFactToResponse = mapFactToResponse;
