const { Schema, SchemaTypes } = require('mongoose');

const { connection } = require('../connection');

const schema = new Schema(
  {
    title: {
      type: SchemaTypes.String,
      required: true,
    },
    text: {
      type: SchemaTypes.String,
      required: true,
    },
    imageFiles: [{
      type: SchemaTypes.ObjectId,
      ref: 'file',
      required: true,
    }],
    showOnHomePage: {
      type: SchemaTypes.Boolean,
      default: true,
    },
    placeOnHomePage: {
      type: SchemaTypes.Number,
      default: 1,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

const Gallery = connection.model('gallery', schema);

exports.Gallery = Gallery;