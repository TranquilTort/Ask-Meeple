'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('Posts', [
        {
          title: 'Disneyland Park',
          user_id:3,
          body: 'Disneyland Park, originally Disneyland, is the first of two theme parks built at the Disneyland Resort in Anaheim, California, opened on July 17, 1955. It is the only theme park designed and built to completion under the direct supervision of Walt Disney. It was originally the only attraction on the property; its official name was changed to Disneyland Park to distinguish it from the expanding complex in the 1990s. It was the first Disney theme park.',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: 'Disney California Adventure Park',
          user_id:2,
          body: 'Disney California Adventure Park, commonly referred to as Disney California Adventure, California Adventure, or DCA, is a theme park located in Anaheim, California. It is owned and operated by The Walt Disney Company through its Parks, Experiences and Products division. The 72-acre (29 ha) park is themed after the history and culture of California, which celebrates the fun and adventure of the state through the use of various Disney, Pixar and Marvel properties. The park opened on February 8, 2001 as Disney\'s California Adventure Park or Disney\'s California Adventure, and it is the second of two theme parks built at the Disneyland Resort complex, after Disneyland Park.',
          createdAt: new Date(),
          updatedAt: new Date()
        }
    ], {});

  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('Posts', null, {});

  }
};
