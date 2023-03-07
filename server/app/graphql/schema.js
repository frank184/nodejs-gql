// Construct a schema, using GraphQL schema language
const graphql = require('graphql');
const QueryType = require('./QueryType');

const schema = new graphql.GraphQLSchema({ query: QueryType });
module.exports = schema;
