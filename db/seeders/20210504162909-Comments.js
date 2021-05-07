'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('Comments', [

        {
        user_id: 3,
        body: "Good friends. Like, legit. I've played a few RPG campaigns and really, the game is fun, but the people make the game.",
        post_id: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id: 8,
        body: "I agree with MrGreen. It's totally the poeple. Good friends make a bad game fun, and a not great group can drain all the fun out of any game. I'd say just grab some friends and pick a game. Depending on what games your friends like to play, and how long you have, I'd suggest something like Space Team for shorter games, Horrified for medium games, and Scythe for longer games (if you guys can handle it haha).",
        post_id: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id: 6,
        body: "Don't know if this is considered 'Adventure' or 'Strategy' but I like Everdell. It's a cute game. X)",
        post_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id: 2,
        body: "I kinda liked Forgot Waters. But it may also depend on who you/'re palying with. For playing with kids, something like Princess Bride Adventure Book game would be good. But for grown-ups, something like LotR: Journeys in Middle-Earch could work.",
        post_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id: 7,
        body: "Had a similar problem. I found that Carcassonne was the most successful game to get my parents into. I tried Ticket to Ride and they didn't get into it all that much. But my mom is obsessed with Carcassonne. Rummikube is also another one they play alot. It's kinda a classic.",
        post_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },



    ], {});

  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('Comments', null, {});

  }
};
