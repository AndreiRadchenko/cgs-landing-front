const { Schema, SchemaTypes } = require('mongoose');

const { connection } = require('../connection');

const definition = {
  title: {
    type: SchemaTypes.String,
    required: true,
  },
  text: {
    type: SchemaTypes.String,
    required: true,
  },
  selected: {
    type: SchemaTypes.Boolean,
    default: false,
  },
};

const schema = new Schema(definition, {
  versionKey: false,
});

const Slogan = connection.model('slogan', schema);

exports.Slogan = Slogan;
