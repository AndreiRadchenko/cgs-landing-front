const { uploadFiles } = require('../../middlewares');

const { File } = require('../../database');

const {
  mapFilesToResponse,
  mapLocalFileToFile,
} = require('./utils/mappers');

const fileUpload = {
  path: '/upload',
  method: 'POST',
  pre: uploadFiles,
  handler: async (context) => {
    const { files: localFiles } = context.request;

    const files = await Promise.all(
      localFiles.map((localFile) => {
        const doc = mapLocalFileToFile(localFile);

        return File.create(doc);
      }),
    );

    context.status = 201;

    context.body = {
      response: mapFilesToResponse(files),
    };
  },
};

exports.fileUpload = fileUpload;
