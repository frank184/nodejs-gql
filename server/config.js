require('dotenv').config();
const path = require('path');

const {
  NODE_ENV, HOST, PORT, DB_ADAPT, DB_USER, DB_PASS, DB_HOST, DB_NAME, SQL_LOG, LOG_LEVEL,
} = process.env;

const config = {
  env: {
    node: NODE_ENV,
    development: NODE_ENV === 'development',
    production: NODE_ENV === 'production',
    test: NODE_ENV === 'test',
  },
  app: {
    host: HOST,
    port: PORT,
    root: path.resolve(__dirname),
    log_level: LOG_LEVEL || 'info',
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
