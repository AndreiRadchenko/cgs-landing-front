const mapFileToResponse = (file) => ({
  id: file.id,
  name: file.name,
  extension: file.extension,
  savedAs: file.savedAs,
  mimeType: file.mimeType,
  size: file.size,
  uploadedAt: file.uploadedAt,
});

exports.mapFileToResponse = mapFileToResponse;
