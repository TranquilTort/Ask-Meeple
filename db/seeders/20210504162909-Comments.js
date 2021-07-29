'use strict';
const commentsArray =
[
  {
    user_id: 3,
    body: "Good friends. Like, legit. I've played a few RPG campaigns and really, the game is fun, but the people make the game.",
    post_id: 5,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    user_id: 8,
    body: "I agree with MrGreen. It's totally the people. Good friends make a bad game fun, and a not great group can drain all the fun out of any game. I'd say just grab some friends and pick a game. Depending on what games your friends like to play, and how long you have, I'd suggest something like Space Team for shorter games, Horrified for medium games, and Scythe for longer games (if you guys can handle it haha).",
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
  {
    user_id: 2,
    body: "I don't know about the version, but I'm not sure those are windmills haha. I think they're just funky houses.",
    post_id: 8,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    user_id: 2,
    body: "This is probably not a helpful answer, but it totally depends. I really enjoy legacy games cause each game you play effects the next game. You're right that some of them you only get to play through once, but some of them can be played a few times through. If you're interested in trying one out, I may suggest Risk Legacy. Or, you could try out a campaign game instead? They're sorta like legacy games in my opinion but don't necessarily invovle destroy pieces or altering the board.",
    post_id: 7,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    user_id: 8,
    body: "I feel like this is probably some sort of marketing play. Not sure it'll work.",
    post_id: 6,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    user_id: 8,
    body: "Only Abbots can go on flower gardens. Carts can work like regular meeples in most cases, except carts can't be used as farmers.",
    post_id: 1,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    user_id: 4,
    body: "I might add Brass: Birmingham onto that list.",
    post_id: 4,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    user_id: 1,
    body: "Forbidden Island is also a good one! And Forbidden Dessert.",
    post_id: 4,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    user_id: 7,
    body: "Perfect! How about Friday @ 7:30?",
    post_id: 9,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    user_id: 3,
    body: "Hey! I'm not too far away. Do you know where 'Hobby Town' is? They have some tables set up. Could meet up there?",
    post_id: 9,
    createdAt: new Date(),
    updatedAt: new Date()
  },
]

let insertArray = [];
for(let i =i; i<=25; i++){
  insertArray.push({user_id:(Math.floor(Math.random()*25)), body:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", post_id:i,createdAt: new Date(), updatedAt: new Date() })
}

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('Comments',
      insertArray
    , {});

  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('Comments', null, {});

  }
};
