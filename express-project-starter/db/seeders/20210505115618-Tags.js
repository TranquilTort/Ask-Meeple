'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
      return queryInterface.bulkInsert('Tags', [
        {name: 'Ask for Recommendations for Buying', createdAt: new Date(), updatedAt: new Date()},
        {name: 'Rules Clarification', createdAt: new Date(), updatedAt: new Date()},
        {name: 'Review', createdAt: new Date(), updatedAt: new Date()},
        {name: 'Strategy', createdAt: new Date(), updatedAt: new Date()},
        ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
      return queryInterface.bulkDelete('Tags', null, {});
  }
};
