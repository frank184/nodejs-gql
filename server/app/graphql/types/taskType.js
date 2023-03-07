const {
  GraphQLObjectType, GraphQLID, GraphQLString, GraphQLBoolean, GraphQLNonNull,
} = require('graphql');

// Define the GQL Task type
const TaskType = new GraphQLObjectType({
  name: 'Task',
  fields: () => {
    // eslint-disable-next-line global-require
    const UserType = require('./userType');
    return {
      id: { type: new GraphQLNonNull(GraphQLID) },
      title: { type: new GraphQLNonNull(GraphQLString) },
      description: { type: new GraphQLNonNull(GraphQLString) },
      completed: { type: new GraphQLNonNull(GraphQLBoolean) },
      userId: { type: new GraphQLNonNull(GraphQLID) },
      user: { type: UserType, resolve: (parent) => parent.user },
    };
  },
});

module.exports = TaskType;
