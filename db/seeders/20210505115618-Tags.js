'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('Tags', [
        {name: 'Game Set Up', createdAt: new Date(), updatedAt: new Date()},
        {name: 'Game Strategy', createdAt: new Date(), updatedAt: new Date()},
        {name: 'Looking to Play', createdAt: new Date(), updatedAt: new Date()},
        {name: 'News', createdAt: new Date(), updatedAt: new Date()},
        {name: 'Recommendations', createdAt: new Date(), updatedAt: new Date()},
        {name: 'Reviews', createdAt: new Date(), updatedAt: new Date()},
        {name: 'Rules Clarification', createdAt: new Date(), updatedAt: new Date()},
        {name: 'Miscellaneous', createdAt: new Date(), updatedAt: new Date()},
        ], {});
  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('Tags', null, {});
  }
};
