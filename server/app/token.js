// eslint-disable-next-line import/no-extraneous-dependencies
const jwt = require('jsonwebtoken');

const secret = global.config.jwt_secret;

const create = (user) => {
  const payload = { id: user.id, email: user.email };

  return jwt.sign(payload, secret, { expiresIn: '1d' });
};

const verify = (token) => jwt.verify(token, secret);

module.exports = { create, verify };
