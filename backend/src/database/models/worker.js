const { Schema, SchemaTypes } = require('mongoose');

const { connection } = require('../connection');

const schema = new Schema(
  {
    name: {
      type: SchemaTypes.String,
      required: true,
    },
    position: {
      type: SchemaTypes.String,
      required: true,
    },
    text: {
      type: SchemaTypes.String,
      required: true,
    },
    imageFile: {
      type: SchemaTypes.ObjectId,
      ref: 'file',
      required: true,
    },
    placeOnHomePage: {
      type: SchemaTypes.Number,
      default: 1,
    },
    showOnHomePage: {
      type: SchemaTypes.Boolean,
      default: true,
    },
  },
  {
    versionKey: false,
  },
);

const Worker = connection.model('worker', schema);

exports.Worker = Worker;
