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

/* GET users listing. */
router.get('/register', csrfProtection, (req, res)=> {
  const user = db.User.build();
  res.render('register',{
    user,
    title:'User Registration',
    token: req.csrfToken()
  });
});

const userValidators = [
  check('username')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a value for username')
    .isLength({ max: 50 })
    .withMessage('Username must not be more than 50 characters long')
    .custom((value)=>{
      return db.User.findOne({where:{username:value}})
        .then((user)=>{
          if(user){
            return Promise.reject('The provided username already exists, please choose a different username.');
          }
        });
    }),
  check('email')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a value for Email Address')
    .isLength({ max: 255 })
    .withMessage('Email Address must not be more than 255 characters long')
    .isEmail()
    .withMessage('Email Address is not a valid email')
    .custom((value) => {
      return db.User.findOne({ where: { email: value } })
        .then((user) => {
          if (user) {
            return Promise.reject('The provided Email Address is already in use by another account');
          }
        });
    }),
  check('password')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a value for Password')
    .isLength({ max: 50 })
    .withMessage('Password must not be more than 50 characters long')
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/, 'g')
    .withMessage('Password must contain at least 1 lowercase letter, uppercase letter, number, and special character (i.e. "!@#$%^&*")'),
  check('confirmPassword')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a value for Confirm Password')
    .isLength({ max: 50 })
    .withMessage('Confirm Password must not be more than 50 characters long')
    .custom((value, { req }) => {
      if (value !== req.body.password) {
        throw new Error('Confirm Password does not match Password');
      }
      return true;
    }),
];

router.post('/register',  csrfProtection, userValidators, asyncHandler(async(req,res)=>{
  const{username,email,password} = req.body;
  const user =  db.User.build({username,email});

  const validatorErrors = validationResult(req);
  if(validatorErrors.isEmpty()){
    const hashedPassword = await bcrypt.hash(password,10);
    user.hashedPassword = hashedPassword;
    await user.save();
    loginUser(req, res, user);
    return req.session.save( () => res.redirect("/") );
    // return;
  }else{
    const errors = validatorErrors.array().map((error) => error.msg);

    res.render('register', {
      title: 'User Registration',
      user,
      errors,
      token: req.csrfToken(),
    });
  }




}))
// router.get('/sign-in', csrfProtection, (req, res) => {
//   const user = db.User.build();
//   res.render('sign-in', {
//     title: 'User Sign-In',
//     token: req.csrfToken(),
//     user,
//   });
// });

router.get('/sign-in', csrfProtection, (req, res)=> {
  const user = db.User.build();
  res.render('sign-in',{
    user,
    title:'User Sign-In',
    token: req.csrfToken(),
    identifier:''
  });
});

const signInValidators = [

  check("identifier")
    .exists({ checkFalsy: true })
    .withMessage('Please provide an username or email address.')
    .custom(async (value) => {
      return await db.User.findOne({ where: { [Op.or]: [{email: value}, {username: value}] }})
        .then((user) => {
          if (!user) {
            return Promise.reject('Username or email does not exist.');
          }
        });
    }),
  check("password")
    .exists({ checkFalsy: true })
    .withMessage('Please provide a password.')

];

router.post('/sign-in', csrfProtection, signInValidators, async (req, res) => {
  const {password, identifier} = req.body;

  const user = await db.User.findOne({ where: { [Op.or]: [{email: identifier}, {username: identifier}] }});
  const validatorErrors = validationResult(req);
  let errors = [];
  if(validatorErrors.isEmpty()) {
    const matchesPassword = await bcrypt.compare(password, user.hashedPassword.toString());
    if(matchesPassword) {

      loginUser(req, res, user);

      return req.session.save( () => res.redirect("/") );
      // return;
    } else {
      errors.push('Password does not match any username or email address in database.')
    }
  } else {
    errors = validatorErrors.array().map((error) => error.msg);
  }

  res.render('sign-in', {
    title: 'User Sign-In',
    identifier,
    errors,
    token: req.csrfToken(),
  });

});

router.post('/sign-out', (req, res) => {
  logoutUser(req, res);
  return req.session.save( () => res.redirect("/") );
});
router.get('/test',requireAuth,(req,res)=>{
  res.send('test');
})


router.get('/danny-test', csrfProtection, asyncHandler(async (req, res) => {

  const post = db.Post.build();

  // const tags = await db.Tag.findAll({})
  const tags = [
                {name: 'Strategy'},
                {name: 'Recommendation'},
                {name: 'Rules Clarification'},
                {name: 'Review'}
              ];

  res.render('post-form', {
    post,
    tags,
    title: 'Post Creation',
    token: req.csrfToken(),
  });
}));


module.exports = router;
