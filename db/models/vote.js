'use strict';
module.exports = (sequelize, DataTypes) => {
  const Vote = sequelize.define('Vote', {
    value: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
    post_id: DataTypes.INTEGER
  }, {});
  Vote.associate = function(models) {
    Vote.belongsTo(models.User,{foreignKey:'user_id'});
    Vote.belongsTo(models.Post,{foreignKey:'post_id'});
  };
  return Vote;
};
