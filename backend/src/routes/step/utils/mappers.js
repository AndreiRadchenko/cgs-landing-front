const { mapFileToResponse } = require('../../file/utils/mappers');

const mapStepToResponse = (step) => ({
  id: step.id,
  title: step.title,
  text: step.text,
  iconFile: step.iconFile
    ? mapFileToResponse(step.iconFile)
    : null,
  showOnPartnersPage: step.showOnPartnersPage,
  placeOnPartnersPage: step.placeOnPartnersPage,
});

exports.mapStepToResponse = mapStepToResponse;
