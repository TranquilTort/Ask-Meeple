const express = require('express');
const router = express.Router();
const {asyncHandler } = require('./utils');
const db = require('../db/models');
const { Sequelize } = require('sequelize');
const Op = Sequelize.Op;





/* GET search results */

router.get('/', asyncHandler(async function(req, res) {
    let { term } = req.query;

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
    const searchResults = await db.Post.findAll({order:[['createdAt','DESC']], include:[db.User,db.Tag], where:{id:{ [Op.in]: idsOfSearchResults}}})

    res.render('search-results', {
      searchResults,      title: `Ask Meeple: ${term}`,

      term


    });
  }));


  module.exports = router;
