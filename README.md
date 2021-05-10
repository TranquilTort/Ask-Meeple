# Ask-Meeple
### Summary
* Ask-Meeple is a clone of Quora, a website for users to post questions and answers.  Ask-Meeple is themed around boardgame-related topics, and hosted on Heroku.
* Live Link: [Ask-Meeple](https://ask-meeple.herokuapp.com/)

### Technologies 

* Front-End: Pug, JavaScript
* Back-End: Sequelize, Express
* Libraries: [bcryptjs](https://www.npmjs.com/package/bcryptjs), [connect-session-sequelize](https://www.npmjs.com/package/connect-session-sequelize), [cookie-parser](https://www.npmjs.com/package/cookie-parser), [express-session](https://www.npmjs.com/package/express-session)

### Site Features

#### Home Page

![Image of Homepage](https://i.imgur.com/qocOeQS.png)

Without logging in, users can:
* Read posts on the homepage, which shows the five most recent posts, sorted by post creation time.
* Read a post with its associated comments on the post's page
* Search for posts using the search bar or with the provided search tags in the sidebar
* Register for a new account
* Sign into the user's account 
* Sign in as the demo user

After signing in, users can:
* Create a new post, setting tags and/or an image by specifying a URL
* Edit or delete posts made by that user
* Create comments for existing posts
* Delete comments made by that user

#### User Authentication
* User authentication is done with session-based authentication, with the [express-session](https://www.npmjs.com/package/express-session) library.  The cookie for the session holds the session ID, the session data is held on the server.  A session is established upon signing into the user's account.  
* When registering or signing into an account, the password is not saved in the database; instead, a hashed password is saved.  Hashing is done with [bcryptjs](https://www.npmjs.com/package/bcryptjs) library.  When signing in, the provided password is hashed and compared against the hashed password saved in the database.

#### Posts

* Posts are messages created by users, asking questions about board games.
* Posts can be read from the homepage.  Each post also has its own page, which is accessed by selecting "View Comments".
* To create a post, there is a "Create Post" button provided on the left side of the navigation bar.
  * A form is provided for creating a post.  Users may optionally assign tags and/or an image to go with the post.
 
![Image of Post Form](https://i.imgur.com/79Tw3JR.png)

* A user may edit or delete their posts:
  * If the post is showing on the homepage, using the provided buttons
  * If the post is showing on the search results, using the provided buttons
  * On the post's individual page, accessed by the "View Comments" button
* Deleting posts on the homepage and search results are done with AJAX, without reloading the page.  Deleting a post on the post's individual page will redirect to the homepage.
* Voting is described in more detail in its own section below.

#### Comments

* Comments are responses to posts.
* Comments can be created, read, and deleted on the post's individual page, which can be accessed by the posts's "View Comments" button.
* Comments are created and deleted via AJAX calls, which do not require reloading the page.

![Image of Comments with AJAX](https://i.imgur.com/vED3cTK.gif)

#### Search

(description)

![Image of Search](https://i.imgur.com/sA1cR7s.png)

#### Voting

(description)

![Image of Voting](https://i.imgur.com/Oszjcs0.png)

### Database Schema
![Database Structure](https://i.imgur.com/tEJNiRK.png)

### Code Snippets for Features

###### Deleting Posts and Associated Data
* Each post has associated comments and tags.  Tags are connected to posts via a joins table.  When deleting a post, the associated data entries for comments, tags, and the data in joins table is also deleted.  To do this, queries for the associated data are made, then used to delete the relevant entries.

```javascript
router.delete('/:id', requireAuth, asyncHandler(async(req,res)=>{

    const post = await db.Post.findByPk(req.params.id);
    const post_tags = await db.Post_Tag.findAll({where: {post_id: req.params.id}});
    const comments = await db.Comment.findAll({where: {post_id: req.params.id}});
    const votes = await db.Vote.findAll({where:{post_id:req.params.id}});
    
    comments.forEach( async (comment) => {await comment.destroy();});
    post_tags.forEach( async (post_tag) => {await post_tag.destroy()});
    votes.forEach(async(votes)=>{await votes.destroy();})
    await post.destroy();

    return req.session.save( () => res.json(post) );
}));
```

###### Search Tag URL Formatting

* In order to make sure that the search function works correctly when an user clicks on a searchable tag, we had to make sure the anchor tag was correctly formatted. This mean finding the tag name, which was a string, spliting it on empty spaces, and then rejoining it with a + sign. Then we saved the new, properly formatted string as a new key-value pair inside of the tag object, called "searchTerm". Then in our pug files, we populated our anchor tag with searchTerm.

```javascript
 const tags = await db.Tag.findAll();

  tags.forEach((tag) => {
    let searchFor = tag.name;
    let searchSplit = searchFor.split(' ');
    tag.searchTerm = searchSplit.join('+');
  });
```


###### Upvoting

### To-dos/Future Features
* Transition messages/features when a post or comment is deleted
* Error messages for server errors
* Refactoring AJAX code for comments to transmit limited data (current implementation transmits all comments for a given post)
* Editing comments
* Sorting search by upvote/downvote score
* Implementing replies to comments
