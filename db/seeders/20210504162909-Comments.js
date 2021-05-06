'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('Comments', [

        {
        user_id: 3,
        body: "COMMENT 1 ",
        post_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id: 2,
        body: "COMMENT 2",
        post_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id: 2,
        body: "COMMENT 3",
        post_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },



    ], {});

  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('Comments', null, {});

  }
};
