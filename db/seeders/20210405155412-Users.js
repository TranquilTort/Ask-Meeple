'use strict';
const userCount = 200;
let insertArray = [{username: 'DemoUser',        email: 'demo@user.com',     hashedPassword: '$2a$10$DwtHNVxY1gx9nsanxl2rRecoraJOKpLlUfOnwb1UlWQi1spDfY3Jy', createdAt: new Date(), updatedAt: new Date()}];
for(let i = 1; i < userCount;i++){
  insertArray.push({username:`user-${i+1}`,email:`user-${i+1}@email.com`, hashedPassword: '$2a$10$DwtHNVxY1gx9nsanxl2rRecoraJOKpLlUfOnwb1UlWQi1spDfY3Jy', createdAt: new Date(), updatedAt: new Date()})
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
