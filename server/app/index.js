/* eslint-disable import/no-extraneous-dependencies */
const express = require('express');
const pino = require('pino');
const expressPino = require('express-pino-logger');
const { graphqlHTTP } = require('express-graphql');
const depthLimit = require('graphql-depth-limit');
const cors = require('cors');
const logging = require('./logging');
const schema = require('./graphql/schema');

const logger = pino({ level: global.config.app.log_level });
const expressPinoLogger = expressPino({ logger });

const app = express();

app.use(express.json());
app.use(cors());
if (global.config.env.development) app.use(logging);
if (global.config.env.production) app.use(expressPinoLogger);
app.use('/graphql', graphqlHTTP({
  schema, graphiql: true, validationRules: [depthLimit(10)],
}));

module.exports = app;
