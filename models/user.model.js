const { underscoredIf } = require("sequelize/lib/utils");

module.exports = (sequelize, DataTypes, Models) => {
  const User = sequelize.define('User', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: { isEmail: true }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },{
    tableName: 'users',
  });
  return User;
};
