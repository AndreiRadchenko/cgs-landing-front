const mapFileToResponse = (file) => ({
  id: file.id,
  name: file.name,
  extension: file.extension,
  mimeType: file.mimeType,
  size: file.size,
  s3FileKey: file.s3FileKey,
  s3FileUrl: file.s3FileUrl,
  uploadedAt: file.uploadedAt,
});

exports.mapFileToResponse = mapFileToResponse;
