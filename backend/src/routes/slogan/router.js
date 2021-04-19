const createRouter = require('koa-joi-router');

const { createSlogan } = require('./create');
const { getSlogan } = require('./get');
const { updateSlogan } = require('./update');
const { deleteSlogan } = require('./delete');

const sloganRouter = createRouter();

sloganRouter.prefix('/slogan');

sloganRouter.route([
  createSlogan,
  getSlogan,
  updateSlogan,
  deleteSlogan,
]);

exports.sloganRouter = sloganRouter;
