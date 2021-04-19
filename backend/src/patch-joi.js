const joiObjectId = require('joi-objectid');
const koaJoiRouter = require('koa-joi-router');

// Add support for mongodb object id
const objectId = joiObjectId(koaJoiRouter.Joi, 'needs to be a valid ObjectId');

koaJoiRouter.Joi.objectId = objectId;
