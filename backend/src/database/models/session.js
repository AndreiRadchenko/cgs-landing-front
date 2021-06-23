const { Schema, SchemaTypes } = require('mongoose');

const { config } = require('../../config');

const { connection } = require('../connection');

const { generateToken } = require('../helpers');

const schema = new Schema(
  {
    user: {
      type: SchemaTypes.ObjectId,
      ref: 'user',
      required: true,
    },
    accessToken: {
      type: SchemaTypes.String,
      default: () => (
        generateToken(config.session.accessToken.length)
      ),
    },
    accessTokenExpiresAt: {
      type: SchemaTypes.Date,
      default: () => (
        new Date(Date.now() + config.session.accessToken.expiration)
      ),
    },
    refreshToken: {
      type: SchemaTypes.String,
      default: () => (
        generateToken(config.session.refreshToken.length)
      ),
    },
    refreshTokenExpiresAt: {
      type: SchemaTypes.Date,
      default: () => (
        new Date(Date.now() + config.session.refreshToken.expiration)
      ),
    },
  },
  {
    versionKey: false,
  },
);

const Session = connection.model('session', schema);

exports.Session = Session;
