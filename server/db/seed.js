require('../app/models');
// eslint-disable-next-line import/no-extraneous-dependencies
require('colors');

const fs = require('fs');
const sequelize = require('./connection');

const files = ['users.json', 'tasks.json'];

const seed = async () => {
  const records = {};

  files.forEach((file) => {
    const modelName = file.slice(0, -5);
    const data = JSON.parse(fs.readFileSync(`./db/seeds/${file}`));
    records[modelName] = data;
  });

  const modelNames = Object.keys(records);
  for (let i = 0; i < modelNames.length; i += 1) {
    const modelName = modelNames[i];
    const list = records[modelName];
    for (let j = 0; j < list.length; j += 1) {
      const record = list[j];
      const { id, ...defaults } = record;
      const Model = sequelize.models[modelName];
      try {
        // eslint-disable-next-line no-await-in-loop
        await Model.findOrCreate({
          where: { id },
          defaults,
        });
        console.log(`[${'✔'.green}] Seeded ${modelName} ID=${id} successfully.`.bgWhite.bold);
      } catch (error) {
        console.error(`[${'X'.red}] Seeded ${modelName} ID=${id} unsuccessfully:`.bgWhite.bold, error);
      }
    }
  }
};

module.exports = seed;
