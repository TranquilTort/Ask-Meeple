'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Post_Tags',
    [
      {tag_id: 7, post_id: 1, createdAt: new Date(), updatedAt: new Date(),},
      {tag_id: 2, post_id: 1, createdAt: new Date(), updatedAt: new Date(),},
      {tag_id: 5, post_id: 2, createdAt: new Date(), updatedAt: new Date(),},
      {tag_id: 5, post_id: 3, createdAt: new Date(), updatedAt: new Date(),},
      {tag_id: 8, post_id: 5, createdAt: new Date(), updatedAt: new Date(),},
      {tag_id: 6, post_id: 4, createdAt: new Date(), updatedAt: new Date(),},
      {tag_id: 5, post_id: 3, createdAt: new Date(), updatedAt: new Date(),},
      {tag_id: 5, post_id: 3, createdAt: new Date(), updatedAt: new Date(),},
      {tag_id: 4, post_id: 10, createdAt: new Date(), updatedAt: new Date(),},
      {tag_id: 8, post_id: 8, createdAt: new Date(), updatedAt: new Date(),},
      {tag_id: 8, post_id: 6, createdAt: new Date(), updatedAt: new Date(),},
      {tag_id: 3, post_id: 9, createdAt: new Date(), updatedAt: new Date(),},
      {tag_id: 8, post_id: 7, createdAt: new Date(), updatedAt: new Date(),},
      {tag_id: 5, post_id: 7, createdAt: new Date(), updatedAt: new Date(),},
      {tag_id: 1, post_id: 11, createdAt: new Date(), updatedAt: new Date(),},
      {tag_id: 1, post_id: 12, createdAt: new Date(), updatedAt: new Date(),},
      {tag_id: 2, post_id: 12, createdAt: new Date(), updatedAt: new Date(),},
      {tag_id: 2, post_id: 9, createdAt: new Date(), updatedAt: new Date(),},
      {tag_id: 8, post_id: 13, createdAt: new Date(), updatedAt: new Date(),},
      {tag_id: 5, post_id: 14, createdAt: new Date(), updatedAt: new Date(),},
      {tag_id: 4, post_id: 15, createdAt: new Date(), updatedAt: new Date(),},
      {tag_id: 3, post_id: 16, createdAt: new Date(), updatedAt: new Date(),},
      {tag_id: 1, post_id: 17, createdAt: new Date(), updatedAt: new Date(),},
      {tag_id: 4, post_id: 18, createdAt: new Date(), updatedAt: new Date(),},
      {tag_id: 7, post_id: 19, createdAt: new Date(), updatedAt: new Date(),},
      {tag_id: 3, post_id: 20, createdAt: new Date(), updatedAt: new Date(),},
      {tag_id: 5, post_id: 21, createdAt: new Date(), updatedAt: new Date(),},
      {tag_id: 4, post_id: 22, createdAt: new Date(), updatedAt: new Date(),},
      {tag_id: 6, post_id: 23, createdAt: new Date(), updatedAt: new Date(),},
      {tag_id: 3, post_id: 24, createdAt: new Date(), updatedAt: new Date(),},
      {tag_id: 2, post_id: 25, createdAt: new Date(), updatedAt: new Date(),},

    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Post_Tags', null, {});
  }
};
