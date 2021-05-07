'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('Posts', [
        {
          title: 'Settle an argument, in Carcassonne, can the cart be placed on flower gardens?',
          user_id:5,
          body: 'Ok, so we have the expansion for Carcassonne that comes with carts. Love the carts, great addition. But there\'s a disagreement that keeps coming up where a friend I play with keeps placing the carts on the flower garden as if they were abbots. I\'m pretty sure only abbots can go on the flower gardens. Of course, I\'ve looked up the rules, but could others tell me if that\'s right.',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: 'I REALLY need a good adventure game. Recommendations?!?!',
          user_id:1,
          body: 'Note: I enjoy fantasy, sci-fi, pirates, pretty much anything haha.',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: 'What games can I get my parents into?',
          user_id:2,
          body: 'My brothers have all moved out, and so there\'s not a lot of people left to play board games with. Any suggestions of games I can maybe convince my parents to play?',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: 'The 5 Best Games I Played Recently',
          user_id:6,
          body: 'If you\'re wanting some recommendations, here are 5 games I played recently that were TOTALLY worth it. Some of these are old, so maybe I\'m just now getting on the bandwagon. 1. Horrified - based on the old universal monsters movies, a small town is under attack by Dracula, Wolfman and others. You all play as different characters to defent the villagers and defeat the monsters before time runs out! 2. Carcassonne - ok, so I KNOW that I\'m like 20 years behind the curb on this one, but I got a copy of this for Christmas and it deserves it\'s status as a class game. A lot of replay value. I\'ve already gotten three expansions for it. 3. Godzilla: Tokyo Class - you play as monsters and throw tanks at each other. That\'s about it! But the quality of the pieces is superb! Funko Games did good with that one! 4. Pit - so this is another old one, however, it is a great game for playing with groups! It can handle 8 or 9 players. So if you\'re having a game night and a lot of people show up, it\'s a good one to have on hand. 5. Ticket to Ride: United Kingdom - so, pretty much just Ticket to Ride, but I love Britain, so this map is more fun for me.',
          createdAt: new Date(),
          updatedAt: new Date(),
          image_url: 'https://cdn.pixabay.com/photo/2017/04/18/02/13/board-game-2237460_1280.jpg',
        },
        {
          title: 'Forming a gaming group (a fellowship if you will), any suggestions on what makes a good group?',
          user_id:5,
          body: '',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: 'Is there going to be a Catan Movie?',
          user_id:4,
          body: 'Was browsing IMDb the other day, and found a page for a Settlers of Catan Movie... Is this a thing? Here\'s the link: https://www.imdb.com/title/tt4481574/?ref_=fn_al_tt_1 I can\'t decide if I want this to be legit or not... ',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Are Legacy Games Worth It?',
          user_id:3,
          body: 'So I\'ve watched a couple of videos on Legacy-style board games like Pandemic Legacy and Risk Legacy. While I\'m interested in the concept, some of these games are EXPENSIVE! And since the whole point of a Legacy game is that you kinda play through it once and alter the game as you go, I\'m wondering if the experince is worth it? Also, any recommendations on good Legacy games to try out? (Preferable not costing an arm and a leg.)',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: 'Any Idea What Version of Catan this Is?',
          user_id:5,
          body: 'Saw this pic online. Any idea what version of Catan this is? Never seen windmills before!',
          createdAt: new Date(),
          updatedAt: new Date(),
          image_url: 'https://cdn.pixabay.com/photo/2019/09/21/14/57/catan-4494043_1280.jpg',
        },
        {
          title: 'Live in MN, anyone want to play?',
          user_id:7,
          body: 'Yo, I\'m in the St. Paul area; anyone nearby wanna get together for some games?',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Chronicles of Crime: 1900 Pre-Order Available!',
          user_id:8,
          body: 'You can now pre-order your copy of Chronicles of Crime: 1900, from Lucky Duck Games. The game should be available April 29th!',
          createdAt: new Date(),
          updatedAt: new Date(),
        }

    ], {});

  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('Posts', null, {});

  }
};
