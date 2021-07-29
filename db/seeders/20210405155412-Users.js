'use strict';
const faker = require('faker')
const userCount = 25;
let insertArray = [{username: 'DemoUser',        email: 'demo@user.com',     hashedPassword: '$2a$10$DwtHNVxY1gx9nsanxl2rRecoraJOKpLlUfOnwb1UlWQi1spDfY3Jy', createdAt: new Date(), updatedAt: new Date()}];
for(let i = 1; i < userCount;i++){
  insertArray.push({username:faker.name.findName(),email:faker.internet.email(), hashedPassword: '$2a$10$DwtHNVxY1gx9nsanxl2rRecoraJOKpLlUfOnwb1UlWQi1spDfY3Jy', createdAt: new Date(), updatedAt: new Date()})
}
module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Users',
      insertArray
      , {});
  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('Users', null, {});
  }
};
