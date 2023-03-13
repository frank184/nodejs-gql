const { GraphQLObjectType } = require('graphql');
const users = require('./queries/users');
const tasks = require('./queries/tasks');

// Define the GQL Query type
const Query = new GraphQLObjectType({
  name: 'Query',
  fields: {
    users,
    tasks,
  },
});

module.exports = Query;
