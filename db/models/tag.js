'use strict';
module.exports = (sequelize, DataTypes) => {
  const Tag = sequelize.define('Tag', {
    name: DataTypes.STRING
  }, {});
  Tag.associate = function(models) {
    const throughObj = {foreignKey:'tag_id',through:'Post_Tags',otherKey:'post_id'}
    Tag.belongsToMany(models.Post,throughObj);
  };
  return Tag;
};
