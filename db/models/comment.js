'use strict';
module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define('Comment', {
    body: DataTypes.TEXT,
    user_id: DataTypes.INTEGER,
    post_id: DataTypes.INTEGER
  }, {});
  Comment.associate = function(models) {
    Comment.belongsTo(models.User,{foreignKey:'user_id'});
    Comment.belongsTo(models.Post,{foreignKey:'post_id'});
  };
  return Comment;
};
