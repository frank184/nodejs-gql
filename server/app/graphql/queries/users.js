const { GraphQLList } = require('graphql');
const UserType = require('../types/userType');
const policy = require('../../policies/userPolicy');

const usersQuery = {
  type: new GraphQLList(UserType),
  resolve: async (_, _variables, context) => {
    if (!context.user) throw new Error('Unauthorized');
    return policy.scope.resolve(context.user);
  },
};

module.exports = usersQuery;
