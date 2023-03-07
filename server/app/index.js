const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const depthLimit = require('graphql-depth-limit');
// VSCode complaining even though cors is in the package.json dependencies
// eslint-disable-next-line import/no-extraneous-dependencies
const cors = require('cors');
const schema = require('./graphql/schema');

const app = express();
app.use(cors());
app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true,
  validationRules: [depthLimit(10)],
}));

module.exports = app;
