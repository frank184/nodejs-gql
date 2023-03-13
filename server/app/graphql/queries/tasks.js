const { GraphQLList } = require('graphql');
const TaskType = require('../types/taskType');
const policy = require('../../policies/taskPolicy');

const tasksQuery = {
  type: new GraphQLList(TaskType),
  resolve: async (_, _variables, context) => {
    if (!context.user) throw new Error('Unauthorized');
    return policy.scope.resolve(context.user);
  },
};

module.exports = tasksQuery;
