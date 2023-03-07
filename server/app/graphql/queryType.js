const { GraphQLObjectType, GraphQLList } = require('graphql');
const { UserType, TaskType } = require('./types');
const { User, Task } = require('../models');

// Define the GQL Query type
const QueryType = new GraphQLObjectType({
  name: 'Query',
  fields: {
    users: {
      type: new GraphQLList(UserType),
      resolve: async () => User.findAll({ include: Task }),
    },
    tasks: {
      type: new GraphQLList(TaskType),
      resolve: async () => Task.findAll({ include: User }),
    },
  },
});

module.exports = QueryType;
