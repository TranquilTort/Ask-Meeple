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



router.get('/:id(\\d+)/edit',csrfProtection,requireAuth,asyncHandler(async(req,res)=>{
    const post_id = parseInt(req.params.id);
    const post = await db.Post.findByPk(post_id,{include:db.User});
    if (post.User.id !== req.session.auth.userId){
        res.send("Hey! You aren't supposed to be here!");
    }
    const tags = await db.Tag.findAll({});
    res.render('edit-post-form',{
        post,
        tags,
        title: 'Edit Post',
        token: req.csrfToken(),
    });
}));

const postValidators = [

    check('title')
      .exists({checkFalsy:true})
      .withMessage('Please enter a Title for the post.'),
    check('body')
      .exists({checkFalsy:true})
      .withMessage('Please provide text in the Body for the post.'),
  ];

router.post('/:id(\\d+)/edit',postValidators,csrfProtection,requireAuth,asyncHandler(async(req,res)=>{
    const { title, body, image_url } = req.body;
    // const user_id = req.session.auth.userId;
    const post_id = parseInt(req.params.id);
    const samePost = await db.Post.findByPk(post_id);
    const tags = await db.Tag.findAll({});

    const validatorErrors = validationResult(req);
    let errors = [];
    if(validatorErrors.isEmpty()) {
        //Gather ALL TAG ASSOCIATIONS
        const arrTags = [];

        for (let i = 1; i <= tags.length; i++) {
          let strTagName = `tag-${i}`;
          if (req.body[strTagName]==='on') {arrTags.push(i)};
        }

        //destroy old TAG ASSOCIATIONS
        await db.Post_Tag.destroy({where:{post_id:post_id}});

        //make new TAG ASSOCIATIONS
        for (let i = 0; i < arrTags.length; i++) {
            let postTag = db.Post_Tag.build({
              tag_id: arrTags[i],
              post_id: samePost.id,
            });
            await postTag.save();
        }
        //update post
        samePost.update({
            body:body,
            title:title,
            image_url:image_url
        })
        return req.session.save( () => res.redirect(`/posts/${post_id}`) );
    }else {
        errors = validatorErrors.array().map((error) => error.msg);
    }
    res.render('post-form', {
        post,
        tags,
        title: 'Post Creation',
        token: req.csrfToken(),
        errors,
    });

}))

router.get('/:id', csrfProtection, asyncHandler(async(req,res)=>{
    const post_id = req.params.id;
    const post = await db.Post.findByPk(post_id,{include:[db.User, db.Tag]});
    //potential route for a post that doesnt exist?
    const comments = await db.Comment.findAll({where: {post_id:{[Op.eq]:post.id}},include:db.User,order:[['createdAt','DESC']]})

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


    res.render('post',{
        token:req.csrfToken(),
        post,
        comments,
        post_id:post_id,
        tags
    });
}));

commentValidators = [
    check('body')
        .exists({checkFalsy:true})
        .withMessage('Please fill out the body of your comment before submitting it.'),
];

router.post('/:id/new-comment', csrfProtection, requireAuth, commentValidators, asyncHandler(async(req,res)=>{
    const post_id = req.params.id;
    const {body} = req.body;
    user_id = req.session.auth.userId;
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
    console.log('comment destroyed')
    const post_id = req.params.id;
    res.save(res.redirect(`/posts/${post_id}`));
}));



module.exports = router;
