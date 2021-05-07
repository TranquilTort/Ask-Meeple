
const express = require('express');
const router = express.Router();
const { csrfProtection, asyncHandler } = require('./utils');
const {sessionSecret} = require('../config');
const db = require('../db/models');
const {check,validationResult} = require('express-validator')
const bcrypt = require('bcryptjs');
const { Sequelize } = require('sequelize');
const Op = Sequelize.Op;

const {loginUser,logoutUser,requireAuth} = require('../auth.js');

/* GET home page. */

router.get('/', asyncHandler(async function(req, res) {
  const posts = await db.Post.findAll({order:[['createdAt','DESC']],include:[db.User, db.Tag], limit:5})
  const tags = await db.Tag.findAll();

  const searchTags = tags.map((tag) => {
    let searchFor = tag.dataValues.name;
    let searchSplit = searchFor.split(" ");
    let searchJoin = searchSplit.join("+");
    return searchJoin;
  });

  tags.forEach((tag, i) => {
    tag.searchTerm = searchTags[i];
  });

  res.render('index', {
    page: 1,
    title: 'Ask Meeple',
    posts,
    tags
  });


}));

router.get('/:id(\\d)+',  asyncHandler(async function(req, res) {
  const page = parseInt(req.params.id)
  const posts = await db.Post.findAll({order:[['createdAt','DESC']],include:[db.User, db.Tag], offset:(page-1)*5, limit:5})
  const tags = await db.Tag.findAll();

  const searchTags = tags.map((tag) => {
    let searchFor = tag.dataValues.name;
    let searchSplit = searchFor.split(" ");
    let searchJoin = searchSplit.join("+");
    return searchJoin;
  });

  tags.forEach((tag, i) => {
    tag.searchTerm = searchTags[i];
  });

  res.render('index', {
    page:page,
    title: 'Ask Meeple',
    posts,
    tags

  });

}));

router.post('/demo-user', asyncHandler(async function(req, res) {
  const demoUser = await db.User.findByPk(1);
  loginUser(req, res, demoUser);
  return req.session.save( () => res.redirect("/") );
}));


//Validators

const postValidators = [

  check('title')
    .exists({checkFalsy:true})
    .withMessage('Please enter a Title for the post.'),
  check('body')
    .exists({checkFalsy:true})
    .withMessage('Please provide text in the Body for the post.'),
];


router.get('/new-post', csrfProtection, requireAuth, asyncHandler(async (req, res) => {
  console.log(res.socket.parser.socket.parser.incoming.url);
  const post = db.Post.build();
  const tags = await db.Tag.findAll({});

  res.render('post-form', {
    post,
    tags,
    title: 'Post Creation',
    token: req.csrfToken(),
  });

}));

router.post('/new-post', csrfProtection, postValidators, requireAuth, asyncHandler(async (req, res) => {

  const { title, body, image_url } = req.body;
  const user_id = req.session.auth.userId;

  const tags = await db.Tag.findAll({});

  const post = db.Post.build(
    {
      body,
      image_url,
      title,
      user_id,
    }
  );

  const arrTags = [];

  for (let i = 1; i <= tags.length; i++) {
    let strTagName = `tag-${i}`;
    if (req.body[strTagName]==='on') {arrTags.push(i)};
  }

  const validatorErrors = validationResult(req);
  let errors = [];

  if(validatorErrors.isEmpty()) {

    await post.save();

    const samePost = await db.Post.findOne(
      {
        where: {user_id},
        order: [['createdAt', 'DESC']],
      });

    for (let i = 0; i < arrTags.length; i++) {
      let postTag = db.Post_Tag.build({
        tag_id: arrTags[i],
        post_id: samePost.id,
      });
      await postTag.save();
    }

    return req.session.save( () => res.redirect("/") );

  }
  else {
    errors = validatorErrors.array().map((error) => error.msg);
  }

  res.render('post-form', {
    post,
    tags,
    title: 'Post Creation',
    token: req.csrfToken(),
    errors,
  });

}));

module.exports = router;
