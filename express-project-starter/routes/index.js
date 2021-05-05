var express = require('express');
var router = express.Router();
const { csrfProtection, asyncHandler } = require('./utils');
const db = require('../db/models');
const {check,validationResult} = require('express-validator')
const bcrypt = require('bcryptjs');
const { Sequelize } = require('sequelize');
const Op = Sequelize.Op;
const {requireAuth} = require('../auth.js');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', {


    // authenticated: res.locals.authenticated,

    title: 'Ask Meeple',
    // authenticated: res.locals.authenticated,
    // user: res.locals.user


  });

});

//Validators

const postValidators = [

  check('title')
    .exists({checkFalsy:true})
    .withMessage('Please enter a Title for the post.'),
  check('body')
    .exists({checkFalsy:true})
    .withMessage('Please provide text in the Body for the post.'),
];


router.get('/new-post', csrfProtection, asyncHandler(async (req, res) => {

  const post = db.Post.build();

  // const tags = await db.Tag.findAll({})
  const tags = [{name: 'Ask for Recommendations for Buying'}, {name:'Rules Clarification'},{name:'Review'},{name:'Strategy'}];

  res.render('post-form', {
    post,
    tags,
    title: 'Post Creation',
    token: req.csrfToken(),
  });
}));

router.post('/new-post', csrfProtection, postValidators, requireAuth, asyncHandler(async (req, res) => {
  const { title, body, image_url } = req.body

  // const tags = await db.Tag.findAll({})
  const tags = [{name: 'Ask for Recommendations for Buying'}, {name:'Rules Clarification'},{name:'Review'},{name:'Strategy'}];

  const post = db.Post.build(
    {
      body,
      image_url,
      title,
      user_id: req.session.auth.userId,
    }
  );

  // console.log(JSON.stringify(post,null,4));

  //need to extract and save tags to database
  //tags.push(req.body[tag-i]), use for loop to iterate i

  const validatorErrors = validationResult(req);
  let errors = [];

  if(validatorErrors.isEmpty()) {
    await post.save();
    return res.redirect('/');
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
