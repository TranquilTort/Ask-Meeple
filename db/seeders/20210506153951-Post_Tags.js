'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Post_Tags',
    [
      {tag_id: 2, post_id: 2, createdAt: new Date(), updatedAt: new Date(),}
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Post_Tags', null, {});
  }
};
