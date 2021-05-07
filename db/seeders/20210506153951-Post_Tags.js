'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Post_Tags',
    [
      {tag_id: 7, post_id: 1, createdAt: new Date(), updatedAt: new Date(),},
      {tag_id: 2, post_id: 1, createdAt: new Date(), updatedAt: new Date(),},
      {tag_id: 5, post_id: 2, createdAt: new Date(), updatedAt: new Date(),},
      {tag_id: 8, post_id: 5, createdAt: new Date(), updatedAt: new Date(),},
      {tag_id: 6, post_id: 4, createdAt: new Date(), updatedAt: new Date(),},
      {tag_id: 5, post_id: 3, createdAt: new Date(), updatedAt: new Date(),},
      {tag_id: 5, post_id: 3, createdAt: new Date(), updatedAt: new Date(),},
      {tag_id: 4, post_id: 10, createdAt: new Date(), updatedAt: new Date(),},
      {tag_id: 8, post_id: 8, createdAt: new Date(), updatedAt: new Date(),},
      {tag_id: 8, post_id: 6, createdAt: new Date(), updatedAt: new Date(),},
      {tag_id: 3, post_id: 9, createdAt: new Date(), updatedAt: new Date(),},
      {tag_id: 8, post_id: 7, createdAt: new Date(), updatedAt: new Date(),},
      {tag_id: 5, post_id: 7, createdAt: new Date(), updatedAt: new Date(),}

    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Post_Tags', null, {});
  }
};
