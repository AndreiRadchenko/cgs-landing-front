const { callbackify } = require('util');

const multer = require('@koa/multer');

const { fileService } = require('../../../services/file-service');

const { kFile, defaultOptions } = require('./constants');

const parser = multer({
  storage: {
    _handleFile: callbackify(async (req, file) => {
      req[kFile] = await fileService.upload({
        filename: file.originalname,
        mimeType: file.mimetype,
        body: file.stream,
      });
    }),
    _removeFile: callbackify((req) => {
      const file = req[kFile];

      return fileService.delete({
        id: file.s3FileKey,
      });
    }),
  },
});

const makeMultipartBodyParser = (options = defaultOptions) => {
  const singleParser = parser.single(options.fieldName);

  return async (context, next) => {
    await singleParser(context, () => {
      context.request.file = context.req[kFile];

      return next();
    });
  };
};

exports.makeMultipartBodyParser = makeMultipartBodyParser;
