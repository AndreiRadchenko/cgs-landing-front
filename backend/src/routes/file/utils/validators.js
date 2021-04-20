const { Joi } = require('koa-joi-router');

const fileByIdSchema = Joi.object({
  id: Joi.objectId(),
});

exports.fileByIdSchema = fileByIdSchema;
