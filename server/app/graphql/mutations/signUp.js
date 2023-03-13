const {
  GraphQLObjectType, GraphQLInputObjectType, GraphQLNonNull, GraphQLString,
} = require('graphql');
const { ValidationError } = require('sequelize');
const UserTask = require('../types/userType');
const User = require('../../models/User');
const token = require('../../token');

const RegistrationInput = new GraphQLInputObjectType({
  name: 'RegistrationInput',
  fields: {
    firstName: { type: GraphQLString },
    lastName: { type: GraphQLString },
    email: { type: new GraphQLNonNull(GraphQLString) },
    password: { type: new GraphQLNonNull(GraphQLString) },
    confirmPassword: { type: new GraphQLNonNull(GraphQLString) },
  },
});

const SignUpResponse = new GraphQLObjectType({
  name: 'SignUp',
  fields: {
    user: { type: UserTask },
    jwt: { type: GraphQLString },
  },
});

const signUpMutation = {
  type: SignUpResponse,
  args: {
    input: {
      type: new GraphQLNonNull(RegistrationInput),
    },
  },
  resolve: async (_root, { input }) => {
    let user;
    let jwt;

    try {
      user = await User.create(input);
      jwt = token.create(user);
    } catch (error) {
      const { errors } = error;
      if (errors.length === 0) throw error;
      throw new ValidationError(errors.map((err) => err.message).join(',\n'));
    }

    return { user, jwt };
  },
};

module.exports = signUpMutation;
