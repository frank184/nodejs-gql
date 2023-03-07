require('dotenv').config();
const path = require('path');

const {
  NODE_ENV, HOST, PORT, DB_ADAPT, DB_USER, DB_PASS, DB_HOST, DB_NAME, SQL_LOG,
} = process.env;

const config = {
  app: {
    host: HOST,
    port: PORT,
    root: path.resolve(__dirname),
  },
  db: {
    logging: SQL_LOG === 'true' ? console.log : false,
    database: `${DB_NAME}-${NODE_ENV}`,
    dialect: DB_ADAPT,
    username: DB_USER,
    password: DB_PASS,
    host: DB_HOST,
  },
};

if (DB_ADAPT === 'sqlite') { config.db.storage = `db/${DB_NAME}.sqlite`; }

global.config = config;
module.exports = config;
