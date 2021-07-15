const { Schema, SchemaTypes } = require('mongoose');

const { connection } = require('../connection');

const schema = new Schema(
  {
    text: {
      type: SchemaTypes.String,
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

const StepToEarn = connection.model('step-to-earn', schema);

exports.StepToEarn = StepToEarn;
