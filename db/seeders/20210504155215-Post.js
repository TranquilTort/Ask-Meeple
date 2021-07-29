'use strict';


const postContent =
[
  {
    title:"Settle an argument, in Carcassonne, can the cart be placed on flower gardens?",
    body:"'Ok, so we have the expansion for Carcassonne that comes with carts. Love the carts, great addition. But there\'s a disagreement that keeps coming up where a friend I play with keeps placing the carts on the flower garden as if they were abbots. I\'m pretty sure only abbots can go on the flower gardens. Of course, I\'ve looked up the rules, but could others tell me if that\'s right.",
    image_url:"https://www.creme-de-languedoc.com/_images/tourism/carcassonne/2.jpg"
  },
  {
    title:"I REALLY need a good adventure game. Recommendations?!?!",
    body:"Note: I enjoy fantasy, sci-fi, pirates, pretty much anything haha.",
    image_url:"https://pyxis.nymag.com/v1/imgs/2c7/0cc/7e0a0ec0b953d33edbc370f56494231f4d-07-four-player-board-game-lede.rhorizontal.w700.jpg"
  },
  {
    title:"What games can I get my parents into?",
    body:"My brothers have all moved out, and so there\'s not a lot of people left to play board games with. Any suggestions of games I can maybe convince my parents to play?",
    image_url:"https://mk0gamingweekenv48ev.kinstacdn.com/wp-content/uploads/2019/07/best-2-player-board-games.jpg"
  },
  {
    title:"The 5 Best Games I Played Recently",
    body:"If you\'re wanting some recommendations, here are 5 games I played recently that were TOTALLY worth it. Some of these are old, so maybe I\'m just now getting on the bandwagon. 1. Horrified - based on the old universal monsters movies, a small town is under attack by Dracula, Wolfman and others. You all play as different characters to defent the villagers and defeat the monsters before time runs out! 2. Carcassonne - ok, so I KNOW that I\'m like 20 years behind the curb on this one, but I got a copy of this for Christmas and it deserves it\'s status as a class game. A lot of replay value. I\'ve already gotten three expansions for it. 3. Godzilla: Tokyo Class - you play as monsters and throw tanks at each other. That\'s about it! But the quality of the pieces is superb! Funko Games did good with that one! 4. Pit - so this is another old one, however, it is a great game for playing with groups! It can handle 8 or 9 players. So if you\'re having a game night and a lot of people show up, it\'s a good one to have on hand. 5. Ticket to Ride: United Kingdom - so, pretty much just Ticket to Ride, but I love Britain, so this map is more fun for me.",
    image_url:"https://cdn.pixabay.com/photo/2017/04/18/02/13/board-game-2237460_1280.jpg"
  },
  {
    title:"Forming a gaming group (a fellowship if you will), any suggestions on what makes a good group?",
    body:"If you are in my area feel free to reach out!",
    image_url:"https://am22.mediaite.com/tms/cnt/uploads/2020/04/lord-of-the-rings-fellowship-of-the-ring.jpg"
  },
  {
    title:"Is there going to be a Catan Movie?",
    body:"Was browsing IMDb the other day, and found a page for a Settlers of Catan Movie... Is this a thing? Here\'s the link: https://www.imdb.com/title/tt4481574/?ref_=fn_al_tt_1 I can\'t decide if I want this to be legit or not... ",
    image_url:"https://business.uni.edu/sites/default/files/news/a_game_of_settlers_of_catan2.jpg"
  },
  {
    title:"Are Legacy Games Worth It?",
    body:"So I\'ve watched a couple of videos on Legacy-style board games like Pandemic Legacy and Risk Legacy. While I\'m interested in the concept, some of these games are EXPENSIVE! And since the whole point of a Legacy game is that you kinda play through it once and alter the game as you go, I\'m wondering if the experince is worth it? Also, any recommendations on good Legacy games to try out? (Preferable not costing an arm and a leg.)",
    image_url:"http://armchairgeneral.com/wp-content/image/2011/Games/Risk-Legacy-Boardgame-Review/RiskLegacy-Image3.jpg"
  },
  {
    title:"Any Idea What Version of Catan this Is?",
    body:"Saw this pic online. Any idea what version of Catan this is? Never seen windmills before!",
    image_url:"https://cdn.pixabay.com/photo/2019/09/21/14/57/catan-4494043_1280.jpg"
  },
  {
    title:"Live in MN, anyone want to play?",
    body:"Yo, I\'m in the St. Paul area; anyone nearby wanna get together for some games?",
    image_url:"https://youngzine.org/sites/default/files/slideshow/board_games.jpg"
  },
  {
    title:"Chronicles of Crime: 1900 Pre-Order Available!",
    body:"You can now pre-order your copy of Chronicles of Crime: 1900, from Lucky Duck Games. The game should be available April 29th!",
    image_url:"https://cf.geekdo-images.com/1BMyuEwK0zV9005oYinYLw__opengraph/img/GInTwk9fCgJQxjo2WWv8gFArLxU=/fit-in/1200x630/filters:strip_icc()/pic4317519.jpg"
  },
  {
    title:"Kingdomino: Set-Up for Two Players?",
    body:"I bought a second-hand copy of Kingdomino, so I don\'t have the instruction manual.  I enjoyed playing this as a four-player game, and wanted to play a few games as a two-player game with my spouse.  However, the game felt really clunky, as only one player really got to choose a tile, while the other player was forced into one tile.  The box says this game is playable with 2 players, are there additional set-up rules that are unique to a two-player game?",
    image_url:"https://m.media-amazon.com/images/I/91j3ey6HyRL._AC_SX679_.jpg"
  },
  {
    title:"Tammany Hall: Starting Cubes",
    body:"I\'m having trouble with the rules for Tammany Hall.  I\'ve placed the cubes in the Set-Up spot on the board, but how are they moved to the precincts?",
    image_url:"https://i.imgur.com/krJCuxJ.jpg"
  },
  {
    title:"Do you like when rulebooks include strategy tips?",
    body:"I like to play a lot of different games a couple times, rather than stick with one game for a bunch of plays for awhile... the unfortunate problem with this is that I tend not to develop deep strategies in my gameplay... or even really remember rules without having to reread rulebooks all the time. I've found when a game includes strategy tips in the rulebook, it helps me feel like I know better what to do and thus I enjoy the game a bit more than if I were still just bumbling around trying to figure it out myself... which also means its easier to bounce from game to game that has these.",
    image_url:"https://hexandcube.com/wp-content/uploads/2019/05/IMG_3487-1024x683.jpg"
  },
  {
    title:"Gaming Budget Concerns",
    body:"Do you have an yearly budget to buy games? If yes, do you ever go over it? Do you sell games to increase your budget? If you have any money left at the end of the year, do you add it to the next year's budget? I do not have a budget. I just buy games when they are a good deal in my opinion. This causes me to spend a lot some years (I believe $500 is the most I spent in a single year) and very few other years. I know this probably means I am spending more on average than if I were to strickly adhere to a budget, but gaming is to me a hobby and, in order to really enjoy it, I need the freedom of buying the games I want when they are affordable, even if several of them are affordable at the same time.",
    image_url:"https://m.media-amazon.com/images/I/81AGAI1D47L._AC_SL1500_.jpg"
  },
  {
    title:"Game of the Week (Ticket To Ride)",
    body:"Let's talk about Ticket To Ride! Do you like it, own it, play it all the time, dislike, best strategies, or anything related to it?",
    image_url:"https://cf.geekdo-images.com/ZWJg0dCdrWHxVnc0eFXK8w__opengraph/img/oRJRRh2n9Z928aHC8QXaWQwaNuc=/fit-in/1200x630/filters:strip_icc()/pic38668.jpg"
  },
  {
    title:"Imperial Struggle: First Impressions",
    body:"Imperial Struggle, I believe, is a masterpiece of game design. It does not apologize for the many difficulties it puts in your way. Difficulties come in the form of: long gameplay, restrictive player count, the rules and play complexity, the potentially problematic theme, and the head-to-head competition inherent in this game. It is most definitely NOT a multiplayer solitaire game. I respect it for not trying to sugarcoat these things. Whether or not these things are dealbreakers for you or not… I cannot say. But, I will say that this is a masterful exploration of the period and the players of that period. This is a game that I am proud to have in my collection, even if I only get to play it solo. This is a game that I really hope to be able to play with someone else at some point. This is a game that I don’t expect to play often, but, I expect will stay in my collection for a very long time. Based on my first impressions formed in 1.5 solo plays, I give this game a 9/10.",
    image_url:"https://d2k4q26owzy373.cloudfront.net/700x700/games/userfiles/1627472695732-20210711_084955%5B1%5D.jpg?format=webp"
  },
  {
    title:"What has been the hardest game for you to learn?",
    body:"I have been working on learning Pax Emancipation this weekend. It has been brutal. I have had the opportunity to learn a number of games generally considered pretty heavy. ",
    image_url:"https://d2k4q26owzy373.cloudfront.net/350x350/games/uploaded/1547165838564?format=webp"
  },
  {
    title:"Can anyone identify the game for these counters?",
    body:"Usually when you put a question like this on the wargame forum, it is answered within 10 minutes. A few of them suggested I try here for the number of eyes and because there is a chance it may not be a wargame.",
    image_url:"https://cf.geekdo-images.com/Rbg4fh4ed2nBhks2GGDq4g__original/img/e64dPxc1JB09hGBmuqKguMUGVkM=/0x0/filters:format(jpeg)/pic6296352.jpg"
  },
  {
    title:"“Filler game” is a dismissive, loaded term",
    body:"To dismissively refer to them as “fillers” shows an unconscious bias toward a certain type of social gaming experience (filler first, real game next). These shorter games are treated like the mediocre opening act at a Rolling Stones concert. By implication, so are their fans.",
    image_url:"https://m.media-amazon.com/images/I/91bHa8umU7L._AC_SL1500_.jpg"
  },
  {
    title:"How I can improve my game nights",
    body:"When my group meets for game night, it’s usually at my place and I’m more or less “in charge.” And we always have a good time, but there are things I can improve on in my game night hosting.",
    image_url:"https://www.gannett-cdn.com/media/2021/04/01/USATODAY/usatsports/Reviewed.com-RvEW-27144-boardgames.jpg"
  },
  {
    title:"Best platform to play games on?",
    body:"I usually use a table, although sometimes a counter or the floor are okay.",
    image_url:"https://images.thdstatic.com/productImages/2359194e-b3fa-492c-8d79-fbbc8026e715/svn/best-redwood-patio-dining-tables-fdt-31h38w96l-1910-64_1000.jpg"
  },
  {
    title:"",
    body:"",
    image_url:""
  },
  {
    title:"",
    body:"",
    image_url:""
  },
  {
    title:"",
    body:"",
    image_url:""
  },
  {
    title:"",
    body:"",
    image_url:""
  },
]


let insertArray =[];
for(let i =0; i<postContent.length; i++){
  insertArray.push({title:postContent[i].title,user_id:(i+1),body:postContent[i].body,createdAt: new Date(), updatedAt: new Date()})
}

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('Posts',
      insertArray
    //   [
    //     {
    //       title: 'Settle an argument, in Carcassonne, can the cart be placed on flower gardens?',
    //       user_id:5,
    //       body: 'Ok, so we have the expansion for Carcassonne that comes with carts. Love the carts, great addition. But there\'s a disagreement that keeps coming up where a friend I play with keeps placing the carts on the flower garden as if they were abbots. I\'m pretty sure only abbots can go on the flower gardens. Of course, I\'ve looked up the rules, but could others tell me if that\'s right.',
    //       createdAt: new Date(),
    //       updatedAt: new Date()
    //     },
    //     {
    //       title: 'I REALLY need a good adventure game. Recommendations?!?!',
    //       user_id:1,
    //       body: 'Note: I enjoy fantasy, sci-fi, pirates, pretty much anything haha.',
    //       createdAt: new Date(),
    //       updatedAt: new Date()
    //     },
    //     {
    //       title: 'What games can I get my parents into?',
    //       user_id:2,
    //       body: 'My brothers have all moved out, and so there\'s not a lot of people left to play board games with. Any suggestions of games I can maybe convince my parents to play?',
    //       createdAt: new Date(),
    //       updatedAt: new Date()
    //     },
    //     {
    //       title: 'The 5 Best Games I Played Recently',
    //       user_id:6,
    //       body: 'If you\'re wanting some recommendations, here are 5 games I played recently that were TOTALLY worth it. Some of these are old, so maybe I\'m just now getting on the bandwagon. 1. Horrified - based on the old universal monsters movies, a small town is under attack by Dracula, Wolfman and others. You all play as different characters to defent the villagers and defeat the monsters before time runs out! 2. Carcassonne - ok, so I KNOW that I\'m like 20 years behind the curb on this one, but I got a copy of this for Christmas and it deserves it\'s status as a class game. A lot of replay value. I\'ve already gotten three expansions for it. 3. Godzilla: Tokyo Class - you play as monsters and throw tanks at each other. That\'s about it! But the quality of the pieces is superb! Funko Games did good with that one! 4. Pit - so this is another old one, however, it is a great game for playing with groups! It can handle 8 or 9 players. So if you\'re having a game night and a lot of people show up, it\'s a good one to have on hand. 5. Ticket to Ride: United Kingdom - so, pretty much just Ticket to Ride, but I love Britain, so this map is more fun for me.',
    //       createdAt: new Date(),
    //       updatedAt: new Date(),
    //       image_url: 'https://cdn.pixabay.com/photo/2017/04/18/02/13/board-game-2237460_1280.jpg',
    //     },
    //     {
    //       title: 'Forming a gaming group (a fellowship if you will), any suggestions on what makes a good group?',
    //       user_id:5,
    //       body: '',
    //       createdAt: new Date(),
    //       updatedAt: new Date()
    //     },
    //     {
    //       title: 'Is there going to be a Catan Movie?',
    //       user_id:4,
    //       body: 'Was browsing IMDb the other day, and found a page for a Settlers of Catan Movie... Is this a thing? Here\'s the link: https://www.imdb.com/title/tt4481574/?ref_=fn_al_tt_1 I can\'t decide if I want this to be legit or not... ',
    //       createdAt: new Date(),
    //       updatedAt: new Date(),
    //     },
    //     {
    //       title: 'Are Legacy Games Worth It?',
    //       user_id:3,
    //       body: 'So I\'ve watched a couple of videos on Legacy-style board games like Pandemic Legacy and Risk Legacy. While I\'m interested in the concept, some of these games are EXPENSIVE! And since the whole point of a Legacy game is that you kinda play through it once and alter the game as you go, I\'m wondering if the experince is worth it? Also, any recommendations on good Legacy games to try out? (Preferable not costing an arm and a leg.)',
    //       createdAt: new Date(),
    //       updatedAt: new Date()
    //     },
    //     {
    //       title: 'Any Idea What Version of Catan this Is?',
    //       user_id:5,
    //       body: 'Saw this pic online. Any idea what version of Catan this is? Never seen windmills before!',
    //       createdAt: new Date(),
    //       updatedAt: new Date(),
    //       image_url: 'https://cdn.pixabay.com/photo/2019/09/21/14/57/catan-4494043_1280.jpg',
    //     },
    //     {
    //       title: 'Live in MN, anyone want to play?',
    //       user_id:7,
    //       body: 'Yo, I\'m in the St. Paul area; anyone nearby wanna get together for some games?',
    //       createdAt: new Date(),
    //       updatedAt: new Date(),
    //     },
    //     {
    //       title: 'Chronicles of Crime: 1900 Pre-Order Available!',
    //       user_id:8,
    //       body: 'You can now pre-order your copy of Chronicles of Crime: 1900, from Lucky Duck Games. The game should be available April 29th!',
    //       createdAt: new Date(),
    //       updatedAt: new Date(),
    //     },
    //     {
    //       title: 'Kingdomino: Set-Up for Two Players?',
    //       user_id:3,
    //       body: 'I bought a second-hand copy of Kingdomino, so I don\'t have the instruction manual.  I enjoyed playing this as a four-player game, and wanted to play a few games as a two-player game with my spouse.  However, the game felt really clunky, as only one player really got to choose a tile, while the other player was forced into one tile.  The box says this game is playable with 2 players, are there additional set-up rules that are unique to a two-player game?',
    //       createdAt: new Date(),
    //       updatedAt: new Date(),
    //       image_url: 'https://i.imgur.com/xUAJVKO.jpg',
    //     },
    //     {
    //       title: 'Tammany Hall: Starting Cubes',
    //       user_id:3,
    //       body: 'I\'m having trouble with the rules for Tammany Hall.  I\'ve placed the cubes in the Set-Up spot on the board, but how are they moved to the precincts?',
    //       createdAt: new Date(),
    //       updatedAt: new Date(),
    //       image_url: 'https://i.imgur.com/krJCuxJ.jpg',
    //     },

    // ]
    , {});

  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('Posts', null, {});

  }
};
