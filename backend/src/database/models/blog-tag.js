const { Schema, SchemaTypes } = require('mongoose');

const { connection } = require('../connection');

const definition = {
  name: {
    type: SchemaTypes.String,
    required: true,
    unique: true,
  },
};

const schema = new Schema(definition, {
  versionKey: false,
});

const BlogTag = connection.model('blog-tag', schema);

exports.BlogTag = BlogTag;
