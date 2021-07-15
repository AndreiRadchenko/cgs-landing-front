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
    iconFile: {
      type: SchemaTypes.ObjectId,
      ref: 'file',
      required: true,
    },
    showOnPartnersPage: {
      type: SchemaTypes.Boolean,
      default: true,
    },
    placeOnPartnersPage: {
      type: SchemaTypes.Number,
      default: 1,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

const Step = connection.model('step', schema);

exports.Step = Step;
