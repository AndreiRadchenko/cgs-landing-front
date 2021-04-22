const { YupRouter } = require('../../yup-router');

const { fileGet } = require('./get');
const { fileUpload } = require('./upload');
const { fileDelete } = require('./delete');

const fileRouter = new YupRouter();

fileRouter.prefix('/file');

fileRouter.addRoutes([
  fileGet,
  fileUpload,
  fileDelete,
]);

exports.fileRouter = fileRouter;
