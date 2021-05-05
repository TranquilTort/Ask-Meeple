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
    const post_id = req.params.id;
    const post = await db.Post.findByPk(post_id,{include: db.User});
    //potential route for a post that doesnt exist?
    const comments = await db.Comment.findAll({where: {post_id:{[Op.eq]:post.id}},include:db.User,order:[['createdAt','DESC']]})
    res.render('post',{
        token:req.csrfToken(),
        post,
        comments,
        post_id:post_id
    });
}));

commentValidators = [
    check('body')
        .exists({checkFalsy:true})
        .withMessage('Please fill out the body of your comment before submitting it.'),
    check('user_id')
        .exists({checkFalsy:true})
        .withMessage('User does not exist')
        .custom((value) => {
            return db.User.findByPk(value)
              .then((user) => {
                if (!user) {
                  return Promise.reject('User does not exist!');
                }
              })
          }),
];

router.post('/:id/new-comment', csrfProtection, requireAuth, commentValidators, asyncHandler(async(req,res)=>{
    const post_id = req.params.id;
    const {body,user_id} = req.body;
    const comment = db.Comment.build({body,post_id,user_id})
    const validatorErrors = validationResult(req);
    const post= await db.Post.findByPk(post_id,{include: db.User});
    let comments = await db.Comment.findAll({where: {post_id:{[Op.eq]:post.id}},include:db.User, order:[['createdAt','DESC']]})
    let errors =[];
    if(validatorErrors.isEmpty()) {
        await comment.save();
        res.save(res.redirect(`/posts/${post_id}`));
    }else{
        errors = validatorErrors.array().map((error) => error.msg);
        res.render('post',{
            errors,
            token: req.csrfToken(),
            post,
            comments,
            post_id
        })
    }
}));

router.post('/:id/comment/:commentid/delete', csrfProtection, requireAuth,asyncHandler(async(req,res)=>{
    let comment = await db.Comment.findByPk(req.params.commentid);
    try{
        await comment.destroy();

    }catch{

    }
    const post_id = req.params.id;
    res.save(res.redirect(`/posts/${post_id}`));
}));



module.exports = router;
