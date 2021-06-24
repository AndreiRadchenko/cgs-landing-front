const { Schema, SchemaTypes } = require('mongoose');

const { connection } = require('../connection');

const definition = {
  name: {
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
  label: {
    type: SchemaTypes.String,
    required: true,
  },
};

const schema = new Schema(definition, {
  versionKey: false,
});

const FeaturedTechnology = connection.model('featured-technology', schema);

exports.FeaturedTechnology = FeaturedTechnology;
