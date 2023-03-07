const { Sequelize } = require('sequelize');

module.exports = new Sequelize(
  global.config.db.database,
  global.config.db.username,
  global.config.db.password,
  {
    host: global.config.db.host,
    dialect: global.config.db.dialect,
    storage: global.config.db.storage,
    logging: global.config.db.logging,
  },
);
