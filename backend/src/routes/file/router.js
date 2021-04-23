const { YupRouter } = require('../../yup-router');

const { fileGet } = require('./get');
const { fileUpload } = require('./upload');
const { fileUpdate } = require('./update');
const { fileDelete } = require('./delete');

const fileRouter = new YupRouter();

fileRouter.prefix('/file');

fileRouter.addRoutes([
  fileGet,
  fileUpload,
  fileUpdate,
  fileDelete,
]);

exports.fileRouter = fileRouter;
