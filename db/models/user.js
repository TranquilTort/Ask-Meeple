'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    hashedPassword: DataTypes.STRING
  }, {});
  User.associate = function(models) {
    User.hasMany(models.Post,{foreignKey:'user_id'});
    User.hasMany(models.Comment,{foreignKey:'user_id'});
    User.hasMany(models.Vote,{foreignKey:'user_id'});
    
  };
  return User;
};
