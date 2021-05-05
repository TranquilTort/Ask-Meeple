'use strict';
module.exports = (sequelize, DataTypes) => {
  const Post_Tag = sequelize.define('Post_Tag', {
    tag_id: DataTypes.INTEGER,
    post_id: DataTypes.INTEGER
  }, {});
  Post_Tag.associate = function(models) {
    // associations can be defined here
  };
  return Post_Tag;
};