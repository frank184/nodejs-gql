const {
  GraphQLObjectType, GraphQLInputObjectType, GraphQLNonNull, GraphQLString, GraphQLBoolean,
} = require('graphql');
const { ValidationError } = require('sequelize');
const UserTask = require('../types/userType');
const User = require('../../models/User');
const token = require('../../token');

const SessionInput = new GraphQLInputObjectType({
  name: 'SessionInput',
  fields: {
    email: { type: new GraphQLNonNull(GraphQLString) },
    password: { type: new GraphQLNonNull(GraphQLString) },
    remember: { type: GraphQLBoolean },
  },
});

const SignInResponse = new GraphQLObjectType({
  name: 'SignIn',
  fields: {
    user: { type: UserTask },
    jwt: { type: GraphQLString },
  },
});

const signInMutation = {
  type: SignInResponse,
  args: {
    input: {
      type: new GraphQLNonNull(SessionInput),
    },
  },
  resolve: async (_, { input }) => {
    const user = await User.authenticate(input);
    if (!user) throw new ValidationError('Invalid email or password.');
    const jwt = token.create(user);
    return { user, jwt };
  },
};

module.exports = signInMutation;
