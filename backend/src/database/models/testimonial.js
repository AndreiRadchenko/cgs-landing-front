const { Schema, SchemaTypes } = require('mongoose');

const { FeedbackPlatformType } = require('../../utils/constants');

const { connection } = require('../connection');

const definition = {
  customerName: {
    type: SchemaTypes.String,
    required: true,
  },
  countryCode: {
    type: SchemaTypes.String,
    required: true,
  },
  companyName: {
    type: SchemaTypes.String,
    required: true,
  },
  customerPosition: {
    type: SchemaTypes.String,
    required: true,
  },
  feedback: {
    type: SchemaTypes.String,
    required: true,
  },
  platforms: [{
    type: {
      type: SchemaTypes.String,
      enum: FeedbackPlatformType,
      required: true,
    },
    rate: {
      type: SchemaTypes.Number,
      required: true,
    },
    link: {
      type: SchemaTypes.String,
      default: null,
    },
  }],
};

const schema = new Schema(definition, {
  versionKey: false,
});

const Testimonial = connection.model('testimonial', schema);

exports.Testimonial = Testimonial;
