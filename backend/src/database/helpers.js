const { randomBytes } = require('crypto');

const generateToken = (rawSize = 10) => {
  const size = Math.max(1, Math.ceil(rawSize / 2));

  const bytes = randomBytes(size);

  return bytes.toString('hex').slice(0, rawSize);
};

exports.generateToken = generateToken;
