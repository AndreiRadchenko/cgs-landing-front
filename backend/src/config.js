const { resolve: pathResolve } = require('path');

const config = {
  server: {
    host: '0.0.0.0',
    port: 8080,
  },
  database: {
    uri: 'mongodb://code_generation_landing:bGcc9352aAawcwvE2cm9@95.181.157.142:52068/code_generation_landing',
  },
  files: {
    storagePath: pathResolve(__dirname, '../public/uploads'),
  },
};

exports.config = config;
