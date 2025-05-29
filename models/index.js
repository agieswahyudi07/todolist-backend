const sequelize = require('../config/database');
const { DataTypes } = require('sequelize');
const userModel = require('./user.model')
const taskModel = require('./task.model')

const DB = {};

DB.sequelize = sequelize;
DB.User = userModel(sequelize, DataTypes);
DB.Task = taskModel(sequelize, DataTypes);

// relation
DB.User.hasMany(DB.Task, { foreignKey: 'userId'});
DB.Task.belongsTo(DB.User, { foreignKey: 'userId' });

module.exports = DB;
