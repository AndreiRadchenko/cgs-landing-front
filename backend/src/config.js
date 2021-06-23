const ms = require('ms');
// eslint-disable-next-line no-underscore-dangle
const _config = require('config');

const getConfig = (path) => {
  return _config.get(path);
};

const config = {
  server: {
    host: getConfig('server.host'),
    port: process.env.PORT || Number(getConfig('server.port')),
  },
  database: {
    uri: getConfig('database.uri'),
  },
  aws: {
    s3: {
      accessKeyId: getConfig('aws.s3.accessKeyId'),
      secretAccessKey: getConfig('aws.s3.secretAccessKey'),
      bucketName: getConfig('aws.s3.bucketName'),
    },
  },
  mailer: {
    server: {
      host: getConfig('mailer.server.host'),
      port: Number(getConfig('mailer.server.port')),
    },
    auth: {
      user: getConfig('mailer.auth.user'),
      password: getConfig('mailer.auth.password'),
    },
    bussinesEmail: getConfig('mailer.bussinesEmail'),
  },
  security: {
    registerSecretCode: getConfig('security.registerSecretCode'),
  },
  session: {
    accessToken: {
      length: Number(getConfig('session.accessToken.length')),
      expiration: ms(getConfig('session.accessToken.expiration')),
    },
    refreshToken: {
      length: Number(getConfig('session.refreshToken.length')),
      expiration: ms(getConfig('session.refreshToken.expiration')),
    },
  },
};

exports.config = config;
