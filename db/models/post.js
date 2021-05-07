'use strict';
module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define('Post', {
    body: DataTypes.TEXT,
    title: DataTypes.STRING,
    user_id: DataTypes.INTEGER,
    image_url: DataTypes.STRING
  }, {});
  Post.associate = function(models) {
    Post.hasMany(models.Comment,{foreignKey:'post_id'});
    Post.belongsTo(models.User,{foreignKey:'user_id'});
    const throughObj = {foreignKey:'post_id',through:'Post_Tags',otherKey:'tag_id'}
    Post.belongsToMany(models.Tag,throughObj);
    Post.hasMany(models.Vote,{foreignKey:'post_id'});
  };
  return Post;
};
