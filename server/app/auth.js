const Token = require('./token');
const User = require('./models/User');
const logger = require('./logger');

const authMiddleware = async (req, _res, next) => {
  if (!req.token) return next();
  const { id } = Token.verify(req.token);
  req.user = await User.findByPk(id);
  return next();
};

module.exports = authMiddleware;
