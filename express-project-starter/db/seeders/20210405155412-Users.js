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
    return queryInterface.bulkInsert('Users',
      [
        {username: 'ColonelMustard',  email: 'yellow@clue.com',   hashedPassword: '\x2432612431302431557a6248456a556c424c37332f34634b63494837657279616d433633504e6a7331344b7a326b474d316f50354d566675576d354b', createdAt: new Date(), updatedAt: new Date()},
        {username: 'MrGreen',         email: 'green@clue.com',    hashedPassword: '\x2432612431302431557a6248456a556c424c37332f34634b63494837657279616d433633504e6a7331344b7a326b474d316f50354d566675576d354b', createdAt: new Date(), updatedAt: new Date()},
        {username: 'MissScarlet',     email: 'red@clue.com',      hashedPassword: '\x2432612431302431557a6248456a556c424c37332f34634b63494837657279616d433633504e6a7331344b7a326b474d316f50354d566675576d354b', createdAt: new Date(), updatedAt: new Date()},
      ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    return queryInterface.bulkDelete('Users', null, {});
  }
};
