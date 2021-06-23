const {
  hash: bcryptHash,
  genSalt: bcryptGenSalt,
  compare: bcryptCompare,
} = require('bcrypt');

const { Schema, SchemaTypes } = require('mongoose');

const { connection } = require('../connection');

const schema = new Schema(
  {
    username: {
      type: SchemaTypes.String,
      required: true,
    },
    password: {
      type: SchemaTypes.String,
      required: true,
    },
  },
  {
    versionKey: false,
  },
);

// eslint-disable-next-line func-names
schema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    next();

    return;
  }

  const salt = await bcryptGenSalt();

  this.password = await bcryptHash(this.password, salt);

  next();
});

class UserMethods {
  comparePassword(password) {
    return bcryptCompare(password, this.password);
  }
}

schema.loadClass(UserMethods);

const User = connection.model('user', schema);

exports.User = User;
