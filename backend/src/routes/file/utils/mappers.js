const mapLocalFileToFile = (localFile) => ({
  name: localFile.name,
  extension: localFile.extension,
  mimeType: localFile.mimeType,
  size: localFile.size,
  hash: localFile.hash,
  path: localFile.path,
  savedAs: localFile.savedAs,
});

exports.mapLocalFileToFile = mapLocalFileToFile;

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

const mapFilesToResponse = (files) => {
  return files.map(mapFileToResponse);
};

exports.mapFilesToResponse = mapFilesToResponse;
