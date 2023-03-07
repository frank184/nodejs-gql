const { DataTypes, Model } = require('sequelize');
const { sequelize } = require('../../db');

class Task extends Model {}

Task.init({
  title: { type: DataTypes.STRING, allowNull: false },
  description: { type: DataTypes.STRING },
  completed: { type: DataTypes.BOOLEAN, allowNull: false },
  userId: { type: DataTypes.INTEGER, allowNull: false },
}, {
  sequelize, modelName: 'tasks',
});

module.exports = Task;

// Since we'd like to define each model's association within the model that implements it,
// but we also need both modules to be exported, the associations must go here
//
// i.e. Task.js requires User.js which requires the incompletely parsed Task.js unless placed here.
Task.User = Task.belongsTo(require('./User'));
