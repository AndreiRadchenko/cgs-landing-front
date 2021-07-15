const mapStepToResponse = (step) => ({
  id: step.id,
  title: step.title,
  text: step.text,
  iconUrl: step.iconFile?.s3FileUrl ?? null,
});

exports.mapStepToResponse = mapStepToResponse;
