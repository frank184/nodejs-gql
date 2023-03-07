const sequelize = require('./connection');
// eslint-disable-next-line import/no-extraneous-dependencies
require('colors');

module.exports = {
  sequelize,
  test: async () => {
    console.log('config.db:', global.config.db);
    try {
      await sequelize.authenticate().then(() => {
        console.log(`[${'✔'.green}] Check Connection: successfully established.`.bgWhite.bold);
      });
    } catch (error) {
      console.error(`[${'X'.red}] Check Connection: unable to connect to the database:`.bgWhite.bold, error);
    }
  },
  create: async () => {
    try {
      await sequelize.sync().then(() => {
        console.log(`[${'✔'.green}] Tables created successfully.`.bgWhite.bold);
      });
    } catch (error) {
      console.error(`[${'X'.red}] Tables could not be created:`.bgWhite.bold, error);
    }
  },
  drop: async () => {
    try {
      await sequelize.drop().then(() => {
        console.log(`[${'✔'.green}] Tables dropped successfully.`.bgWhite.bold);
      });
    } catch (error) {
      console.error(`[${'X'.red}] Tables could not be dropped:`.bgWhite.bold, error);
    }
  },
  setup: async () => {
    try {
      await sequelize.sync({ force: true }).then(() => {
        console.log(`[${'✔'.green}] Tables setup successfully.`.bgWhite.bold);
      });
    } catch (error) {
      console.error(`[${'X'.red}] Tables could not be setup:`.bgWhite.bold, error);
    }
  },
  sync: async () => {
    try {
      await sequelize.sync({ alter: true }).then(() => {
        console.log(`[${'✔'.green}] Tables synced successfully.`.bgWhite.bold);
      });
    } catch (error) {
      console.error(`[${'X'.red}] Tables did not sync unsuccessfully:`.bgWhite.bold, error);
    }
  },
};
