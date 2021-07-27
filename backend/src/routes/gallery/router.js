const { YupRouter } = require('../../yup-router');

const { galleryGet } = require('./get');
const { galleryCreate } = require('./create');
const { galleryUpdate } = require('./update');
const { galleryDelete } = require('./delete');

const galleryRouter = new YupRouter();

galleryRouter.prefix('/gallery');

galleryRouter.addRoutes([
  galleryGet,
  galleryCreate,
  galleryUpdate,
  galleryDelete,
]);

exports.galleryRouter = galleryRouter;
