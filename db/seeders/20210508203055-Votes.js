'use strict';

let insertArray = [];
for(let i = 1; i <=25; i++){
  insertArray.push({value:(Math.floor(Math.random()*200)+15), user_id:25,post_id: i,createdAt: new Date(), updatedAt: new Date()})
}

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Votes',
    insertArray
    , {});
  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('Votes', null, {});
  }
};
