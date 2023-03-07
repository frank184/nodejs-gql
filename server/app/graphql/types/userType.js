const {
  GraphQLObjectType, GraphQLID, GraphQLString, GraphQLNonNull, GraphQLList,
} = require('graphql');

// Define the GQL User type
const UserType = new GraphQLObjectType({
  name: 'User',
  fields: () => {
    // eslint-disable-next-line global-require
    const TaskType = require('./taskType');
    return {
      id: { type: new GraphQLNonNull(GraphQLID) },
      email: { type: new GraphQLNonNull(GraphQLString) },
      firstName: { type: new GraphQLNonNull(GraphQLString) },
      lastName: { type: new GraphQLNonNull(GraphQLString) },
      tasks: { type: new GraphQLList(TaskType), resolve: (parent) => parent.tasks },
    };
  },
});

module.exports = UserType;
