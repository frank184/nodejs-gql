const { DataTypes, Model } = require('sequelize');
const { sequelize } = require('../../db');

class User extends Model {}

User.init({
  email: { type: DataTypes.STRING, allowNull: false, unique: true },
  firstName: { type: DataTypes.STRING, allowNull: false },
  lastName: { type: DataTypes.STRING, allowNull: false },
}, {
  sequelize, modelName: 'users',
});

module.exports = User;

// Since we'd like to define each model's association within the model that implements it,
// but we also need both modules to be exported, the associations must go here
//
// i.e. User.js requires Task.js which requires the incompletely parsed User.js unless placed here.
User.Tasks = User.hasMany(require('./Task'));
