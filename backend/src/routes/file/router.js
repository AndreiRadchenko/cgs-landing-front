const createRouter = require('koa-joi-router');

const { fileGet } = require('./get');
const { fileGetAll } = require('./get-all');
const { fileUpload } = require('./upload');
const { fileDelete } = require('./delete');

const fileRouter = createRouter();

fileRouter.prefix('/file');

fileRouter.route([
  fileGet,
  fileGetAll,
  fileUpload,
  fileDelete,
]);

exports.fileRouter = fileRouter;
