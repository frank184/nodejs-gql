const {
  GraphQLObjectType, GraphQLID, GraphQLString,
} = require('graphql');

// Define the GQL Error type
const ErrorType = new GraphQLObjectType({
  name: 'Error',
  fields: {
    code: { type: GraphQLID },
    message: { type: GraphQLString },
  },
});

module.exports = ErrorType;
