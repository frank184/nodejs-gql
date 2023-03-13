// eslint-disable-next-line import/no-extraneous-dependencies
const bcrypt = require('bcrypt');
const { DataTypes, Model } = require('sequelize');
const { sequelize, ValidationError } = require('../../db');

const encryptSync = (password) => {
  const salt = bcrypt.genSaltSync(10);
  return bcrypt.hashSync(password, salt);
};

class User extends Model {
  static async authenticate({ email, password }) {
    const user = await User.findOne({ where: { email } });
    if (!user) return null;
    return bcrypt.compareSync(password, user.password) ? user : null;
  }
}

User.init({
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
    },
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      customValidator(value) {
        if (this.confirmPassword !== undefined) {
          if (value !== this.confirmPassword) {
            throw new ValidationError('Passwords must match');
          }
        }
      },
    },
  },
  confirmPassword: {
    type: DataTypes.VIRTUAL,
  },
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  admin: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
    allowNull: false,
  },
}, {
  sequelize, modelName: 'users',
});

User.beforeCreate((user) => {
  // eslint-disable-next-line no-param-reassign
  user.password = encryptSync(user.password);
});

module.exports = User;

// Since we'd like to define each model's association within the model that implements it,
// but we also need both modules to be exported, the associations must go here
//
// i.e. User.js requires Task.js which requires the incompletely parsed User.js unless placed here.
User.Tasks = User.hasMany(require('./Task'));
