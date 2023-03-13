const { GraphQLObjectType } = require('graphql');
const signIn = require('./mutations/signIn');
const signUp = require('./mutations/signUp');

// Define the GQL Query type
const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    signIn,
    signUp,
  },
});

module.exports = Mutation;
