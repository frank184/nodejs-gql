const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const depthLimit = require('graphql-depth-limit');
const cors = require('cors');
const pino = require('pino');
const expressPino = require('express-pino-logger');
const { SequelizeValidationError } = require('sequelize');
// eslint-disable-next-line import/no-extraneous-dependencies
const bearerToken = require('express-bearer-token');
const devLogger = require('./logger');
const schema = require('./graphql/schema');
const auth = require('./auth');

const pinoLogger = pino({ level: global.config.app.log_level });
pinoLogger.handler = expressPino({ pinoLogger });

const logger = global.config.env.development ? devLogger : pinoLogger;

const app = express();

app.use(cors());
app.use(express.json());
app.use(bearerToken());

app.use(auth);
app.use(logger.handler);
app.use('/graphql', graphqlHTTP((req) => ({
  schema,
  graphiql: true,
  validationRules: [depthLimit(10)],
  context: { user: req.user },
  customFormatErrorFn: (err) => {
    let errors;
    if (err.prototype === SequelizeValidationError) {
      const code = 'VALIDATION_ERROR';
      errors = err.message.split(',\n');
      errors = errors.map((message) => ({ code, message }));
    }
    logger.error(err);
    return errors;
  },
})));

module.exports = app;
