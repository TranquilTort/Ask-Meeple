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
  const posts = await db.Post.findAll({order:[['createdAt','DESC']],include:db.User, limit:5})
  res.render('index', {
    page: 1,
    title: 'Ask Meeple',
    posts

  });
    // res.send('wahaoo');
}));

router.get('/:id',  asyncHandler(async function(req, res) {
  const page = parseInt(req.params.id)
  const posts = await db.Post.findAll({order:[['createdAt','DESC']],include:db.User, offset:page*5, limit:5})
  res.render('index', {
    page:page,
    title: 'Ask Meeple',
    posts

  });
    // res.send('wahaoo');
}));

module.exports = router;
