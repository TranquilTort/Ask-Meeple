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

router.get('/:id', csrfProtection, asyncHandler(async(req,res)=>{
    const postId = req.params.id;
    const post = await db.Post.findByPk(postId,{include: db.User});
    //potential route for a post that doesnt exist?
    const comments = await db.Comment.findAll({where: {post_id:{[Op.eq]:post.id}},include:db.User})
    res.render('post',{
        token:req.csrfToken(),
        post,
        comments,
        postId:postId
    });
}));

router.post('/:id/new-comment', csrfProtection, asyncHandler(async(req,res)=>{

}));



module.exports = router;
