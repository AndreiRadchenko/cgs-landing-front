const { Schema, SchemaTypes } = require('mongoose');

const { connection } = require('../connection');

const definition = {
  title: {
    type: SchemaTypes.String,
    required: true,
  },
  author: {
    type: SchemaTypes.String,
    required: true,
  },
  imageFile: {
    type: SchemaTypes.ObjectId,
    ref: 'file',
    required: true,
  },
  content: {
    type: SchemaTypes.String,
    required: true,
  },
  tags: [{
    type: SchemaTypes.ObjectId,
    ref: 'blog-tag',
    required: true,
  }],
  views: {
    type: SchemaTypes.Number,
    default: 0,
  },
  createdAt: {
    type: SchemaTypes.Date,
    default: () => new Date(),
  },
};

const schema = new Schema(definition, {
  versionKey: false,
});

const Article = connection.model('article', schema);

exports.Article = Article;
