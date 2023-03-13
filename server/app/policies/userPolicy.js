const User = require('../models/User');
const Task = require('../models/Task');

const userPolicy = {
  scope: {
    resolve: (user) => (user.isAdmin
      ? User.findAll({ include: Task })
      : User.findAll({ where: { id: user.id }, include: Task })
    ),
  },
};

module.exports = userPolicy;
