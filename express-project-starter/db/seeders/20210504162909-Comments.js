'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('Comments', [

        {
        user_id: 1,
        body: "COMMENT 1 ",
        post_id:4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id: 4,
        body: "COMMENT 2",
        post_id:4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id: 3,
        body: "COMMENT 3",
        post_id:4,
        createdAt: new Date(),
        updatedAt: new Date()
      },



    ], {});

  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('Comments', null, {});

  }
};
