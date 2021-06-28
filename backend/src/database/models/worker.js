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
    showOnHomePage: {
      type: SchemaTypes.Boolean,
      default: true,
    },
    placeOnHomePage: {
      type: SchemaTypes.Number,
      default: 1,
    },
    createdAt: {
      type: SchemaTypes.Date,
      default: () => Date.now(),
    },
  },
  {
    versionKey: false,
    timestamps: true,
  },
);

const Worker = connection.model('worker', schema);

exports.Worker = Worker;
