const express = require('express');
const router = express.Router();
const { csrfProtection, asyncHandler } = require('./utils');
const {sessionSecret} = require('../config');

const db = require('../db/models');
const {check,validationResult} = require('express-validator')
const bcrypt = require('bcryptjs');
const { Sequelize } = require('sequelize');
const Op = Sequelize.Op;

const url = require('url');

const {loginUser,logoutUser,requireAuth} = require('../auth.js');

/* GET search results */
// router.get('/', csrfProtection, requireAuth, asyncHandler(async (req, res) => {

//     const { term } = req.body;
//     console.log('>>>', term);

//     const search = await db.Post.findAll()
//     const searchResults = search.array().filter((result) => {
//         console.log('+++', result);
//     });
//     res.render('search-results', {
//       searchResults,
//       title: `Ask Meeple: ${term}`,
//     //   posts


//     });

//   }));


router.get('/', asyncHandler(async function(req, res) {

    let { term } = req.query;
    const lowercaseTerm = term.toLowerCase();

    const search = await db.Post.findAll({order:[['createdAt','DESC']],include:[db.User, db.Tag]})
    const searchResults = search.filter((result) => {
        console.log('>>>', result);

        if(result.dataValues.title.toLowerCase().includes(lowercaseTerm) ||
        result.dataValues.body.toLowerCase().includes(lowercaseTerm)) {
            return result;
        }
    });
    console.log('///', searchResults.length)
    res.render('search-results', {
      searchResults,
      title: `Ask Meeple: ${term}`,
    //   posts


    });
    // res.send('Working!');

  }));


  module.exports = router;
