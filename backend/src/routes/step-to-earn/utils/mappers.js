const mapStepToEarnToResponse = (stepToEarn) => ({
  id: stepToEarn.id,
  text: stepToEarn.text,
  showOnPartnersPage: stepToEarn.showOnPartnersPage,
  placeOnPartnersPage: stepToEarn.placeOnPartnersPage,
});

exports.mapStepToEarnToResponse = mapStepToEarnToResponse;
