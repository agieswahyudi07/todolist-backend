const userModel = require("./user.model");
module.exports = (sequelize, DataTypes) => {  
  const Task = sequelize.define('Task', {
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    completed: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
  },{
    tableName: 'tasks'
  });
  return Task;
};
