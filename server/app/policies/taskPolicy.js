const Task = require('../models/Task');
const User = require('../models/User');

const taskPolicy = {
  scope: {
    resolve: (user) => (user.admin
      ? Task.findAll({ include: User })
      : Task.findAll({ where: { id: user.id }, include: User })
    ),
  },
};

module.exports = taskPolicy;
