const mongoose = require('mongoose');

const connection = mongoose.createConnection('mongodb://code_generation_landing:bGcc9352aAawcwvE2cm9@95.181.157.142:52068/code_generation_landing', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

exports.connection = connection;
