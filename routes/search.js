const express = require('express');
const router = express.Router();
const {asyncHandler } = require('./utils');
const db = require('../db/models');
const { Sequelize } = require('sequelize');
const Op = Sequelize.Op;


/* GET search results */

router.get('/', asyncHandler(async function(req, res) {
    let { term } = req.query;

    const tags = await db.Tag.findAll();

    tags.forEach((tag) => {
      let searchFor = tag.name;
      let searchSplit = searchFor.split(' ');
      tag.searchTerm = searchSplit.join('+');
    });

    //query for post ids matching body or title
    const matchingPost = await db.Post.findAll({where: {[Op.or]: [
      {title:{[Op.iLike]: `%${term}%`}},
      {body:{[Op.iLike]: `%${term}%`}}]}});
      const matchingPostIds = matchingPost.map(el=>{
        return el.id;
      });

    //query for post ids matching tag name
    const matchingTags = await db.Tag.findAll({where:{name:{[Op.iLike]:`%${term}%`}},include:[{model:db.Post}]})
    let matchingTagPostIds =[];
    matchingTags.forEach(tag => {
        tag.Posts.forEach(post=>{
          matchingTagPostIds.push(post.id);
        })

    });

    //add ids to one array and get rid of duplicates
    let together = matchingPostIds.concat(matchingTagPostIds);
    const set = new Set(together);
    const idsOfSearchResults = Array.from(set);

    //query for posts matching post id including tags and users
    const searchResults = await db.Post.findAll({order:[['createdAt','DESC']], include:[db.Vote,db.User,db.Tag], where:{id:{ [Op.in]: idsOfSearchResults}},limit:5})

    console.log('>>>', searchResults[0])

    searchResults.forEach((result) => {
      let tags = result.Tags;
      tags.forEach((tag) => {
        let searchFor = tag.name;
        let searchSplit = searchFor.split(' ');
        tag.searchTerm = searchSplit.join('+');
      })
    });


    if(req.session.auth){
      const currentUser = req.session.auth.userId;
      searchResults.forEach(post=>{
        let score = 0;
        let alreadyVoted = 0;
        post.Votes.forEach(vote=>{
          score+=vote.value;
          if(vote.user_id === currentUser){
            alreadyVoted = vote.value;
          }
        });
        post.alreadyVoted = alreadyVoted;
        console.log('previous vote:',post.alreadyVoted)
        post.score=score;
      });
    }
    res.render('search-results', {
      searchResults,
      title: `Ask Meeple: ${term}`,
      term: term.split(' ').join('+'),
      tags,
      page:1

    });
  }));

  router.get('/:id(\\d)+',  asyncHandler(async function(req, res) {
    const page = parseInt(req.params.id)
    let { term } = req.query;

    const tags = await db.Tag.findAll();

    tags.forEach((tag) => {
      let searchFor = tag.name;
      let searchSplit = searchFor.split(' ');
      tag.searchTerm = searchSplit.join('+');
    });

    //query for post ids matching body or title
    const matchingPost = await db.Post.findAll({where: {[Op.or]: [
      {title:{[Op.iLike]: `%${term}%`}},
      {body:{[Op.iLike]: `%${term}%`}}]}});
      const matchingPostIds = matchingPost.map(el=>{
        return el.id;
      });

    //query for post ids matching tag name
    const matchingTags = await db.Tag.findAll({where:{name:{[Op.iLike]:`%${term}%`}},include:[{model:db.Post}]})
    let matchingTagPostIds =[];
    matchingTags.forEach(tag => {
        tag.Posts.forEach(post=>{
          matchingTagPostIds.push(post.id);
        })

    });

    //add ids to one array and get rid of duplicates
    let together = matchingPostIds.concat(matchingTagPostIds);
    const set = new Set(together);
    const idsOfSearchResults = Array.from(set);

    //query for posts matching post id including tags and users
    const searchResults = await db.Post.findAll({order:[['createdAt','DESC']], include:[db.Vote,db.User,db.Tag], where:{id:{ [Op.in]: idsOfSearchResults}},offset:(page-1)*5,limit:5})

    console.log('>>>', searchResults[0])

    searchResults.forEach((result) => {
      let tags = result.Tags;
      tags.forEach((tag) => {
        let searchFor = tag.name;
        let searchSplit = searchFor.split(' ');
        tag.searchTerm = searchSplit.join('+');
      })
    });

    if(req.session.auth){
      const currentUser = req.session.auth.userId;
      searchResults.forEach(post=>{
        let score = 0;
        let alreadyVoted = 0;
        post.Votes.forEach(vote=>{
          score+=vote.value;
          if(vote.user_id === currentUser){
            alreadyVoted = vote.value;
          }
        });
        post.alreadyVoted = alreadyVoted;
        console.log('previous vote:',post.alreadyVoted)
        post.score=score;
      });
    }

    res.render('search-results', {
      searchResults,
      title: `Ask Meeple: ${term}`,
      term,
      tags,
      page

    });


  }));


  module.exports = router;
