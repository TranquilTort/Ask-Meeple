'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Users',
      [
        {username: 'DemoUser',        email: 'demo@user.com',     hashedPassword: '$2a$10$DwtHNVxY1gx9nsanxl2rRecoraJOKpLlUfOnwb1UlWQi1spDfY3Jy', createdAt: new Date(), updatedAt: new Date()},
        {username: 'ProfPlum',        email: 'purple@clue.com',     hashedPassword: '$2a$10$DwtHNVxY1gx9nsanxl2rRecoraJOKpLlUfOnwb1UlWQi1spDfY3Jy', createdAt: new Date(), updatedAt: new Date()},
        {username: 'MrGreen',         email: 'green@clue.com',    hashedPassword: '$2a$10$DwtHNVxY1gx9nsanxl2rRecoraJOKpLlUfOnwb1UlWQi1spDfY3Jy', createdAt: new Date(), updatedAt: new Date()},
        {username: 'MissScarlet',     email: 'red@clue.com',      hashedPassword: '$2a$10$DwtHNVxY1gx9nsanxl2rRecoraJOKpLlUfOnwb1UlWQi1spDfY3Jy', createdAt: new Date(), updatedAt: new Date()},
        {username: 'PrimPeacock',     email: 'blue@clue.com',      hashedPassword: '$2a$10$DwtHNVxY1gx9nsanxl2rRecoraJOKpLlUfOnwb1UlWQi1spDfY3Jy', createdAt: new Date(), updatedAt: new Date()},
        {username: 'MaidWhite',       email: 'white@clue.com',      hashedPassword: '$2a$10$DwtHNVxY1gx9nsanxl2rRecoraJOKpLlUfOnwb1UlWQi1spDfY3Jy', createdAt: new Date(), updatedAt: new Date()},
        {username: 'ColMustard',      email: 'yellow@clue.com',      hashedPassword: '$2a$10$DwtHNVxY1gx9nsanxl2rRecoraJOKpLlUfOnwb1UlWQi1spDfY3Jy', createdAt: new Date(), updatedAt: new Date()},
        {username: 'DrOrchid',        email: 'orchid@clue.com',      hashedPassword: '$2a$10$DwtHNVxY1gx9nsanxl2rRecoraJOKpLlUfOnwb1UlWQi1spDfY3Jy', createdAt: new Date(), updatedAt: new Date()},
        {username: 'MrBoddy',         email: 'boddy@clue.com',      hashedPassword: '$2a$10$DwtHNVxY1gx9nsanxl2rRecoraJOKpLlUfOnwb1UlWQi1spDfY3Jy', createdAt: new Date(), updatedAt: new Date()},
      ], {});
  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('Users', null, {});
  }
};
