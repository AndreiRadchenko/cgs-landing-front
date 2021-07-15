const mapStepToResponse = (step) => ({
  id: step.id,
  title: step.title,
  text: step.text,
  iconUrl: step.iconFile?.s3FileUrl ?? null,
});

exports.mapStepToResponse = mapStepToResponse;

const mapStepToEarnToResponse = (stepToEarn) => ({
  id: stepToEarn.id,
  text: stepToEarn.text,
});

exports.mapStepToEarnToResponse = mapStepToEarnToResponse;
