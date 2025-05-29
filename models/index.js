const sequelize = require('../config/database');
const { DataTypes } = require('sequelize');
const userModel = require('./user.model')

const DB = {};

DB.sequelize = sequelize;
DB.User = userModel(sequelize, DataTypes);

module.exports = DB;
