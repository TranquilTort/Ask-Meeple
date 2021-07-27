window.addEventListener('DOMContentLoaded',(event)=>{

    //elements from post.pug
    const commentTextarea = document.getElementById('comment-textarea');
    const commentsListDiv = document.querySelector('.comments-list');
    const commentFormBtn = document.getElementById('comment-submit');
    const delPostBtn = document.querySelector('.delete-post-button');

    //delete post button
    delPostBtn.addEventListener('click', async (e) => {
        const buttonId = e.target.id;
        const postId = buttonId.slice(buttonId.indexOf(':')+1);
        await fetch(`/posts/${postId}/delete`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({}),
        });
        window.location = '/';
    });

    function replaceCommentsHelperFunction(fetchedComments,user_id) {

        //erase existing children of comments list
        commentsListDiv.innerHTML = "";

        //reset the comment button text, clearn comments form, hide the comments form
        commentTextarea.value = "";
        hiddenItems.forEach(element => {
            element.style.display='none';
        });
        newCommentBtn.innerText= 'Post New Comment'

        if (fetchedComments.length > 0) {
            //replace the H3 in the comments list
            const commentsH3 = document.createElement('h3');
            commentsH3.innerText = 'Comments:';
            commentsListDiv.append(commentsH3);

            //repopulate children of comments list
            fetchedComments.forEach( (fetchedComment) => {

                const commentBodyDiv = document.createElement('div');
                commentBodyDiv.classList.add('comment-body');

                const usernameSpan = document.createElement('span');

                const usernameH4 = document.createElement('h4');
                usernameH4.innerHTML = fetchedComment.User.username

                const commentDataValuesBodyDiv = document.createElement('div');
                commentDataValuesBodyDiv.innerText = fetchedComment.body;



                const commentDeleteForm = document.createElement('form');
                commentDeleteForm.classList.add('delete-comment-form');

                const commentDeleteBtn = document.createElement('button');
                commentDeleteBtn.setAttribute('id', `delete-button-${fetchedComment.id}`);
                commentDeleteBtn.classList.add('delete-comment');
                commentDeleteBtn.innerText = 'Delete Comment'

                commentBodyDiv.append(usernameSpan, commentDataValuesBodyDiv, commentDeleteForm);
                usernameSpan.append(usernameH4);
                if(user_id === fetchedComment.User.id){
                    commentDeleteForm.append(commentDeleteBtn);
                }
                commentsListDiv.append(commentBodyDiv);

            });
        }
    }

    const hiddenItems = Array.from(document.querySelectorAll('.hidden-input'));
    hiddenItems.forEach(element => {
        element.style.display='none'
    });
    const newCommentBtn = document.getElementById('create-comment');
    if(newCommentBtn!==null){
        newCommentBtn.addEventListener('click',(event)=>{
            if(hiddenItems[0].style.display === 'block'){
                hiddenItems.forEach(element => {
                    element.style.display='none';
                });
                newCommentBtn.innerText= 'Post New Comment'
            }else{
                hiddenItems.forEach(element => {
                    element.style.display='block';
                });
                newCommentBtn.innerText= 'Cancel Comment'
            }
        })
    }

    //AJAX call for adding comments
    commentFormBtn.addEventListener('click',async(event)=>{

        event.preventDefault();

        //get the path for fetch
        const path = window.location.pathname + '/new-comment';

        //fetch all comments
        const res = await fetch(path, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify( {body: commentTextarea.value} ),
        });

        const {fetchedComments,user_id} = await res.json();

        //repopulate children of comments list
        replaceCommentsHelperFunction(fetchedComments,user_id);

    });

    //AJAX call for deleting comments
    commentsListDiv.addEventListener('click',async(event)=>{

        event.preventDefault();

        if (event.target.id) { //if the target has an id

            const firstPartOfTargetId = event.target.id.slice(0,'delete-button-'.length);
            if (firstPartOfTargetId === 'delete-button-') { //if the target is a delete button

                //get the id number of the comment
                const commentId = parseInt(event.target.id.slice('delete-button-'.length),10);

                //get the path for fetch
                const path = window.location.pathname + '/comment/' + commentId + '/delete';


                //fetch to delete comment
                const res = await fetch(path, {
                    method: 'POST',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify( {} ),
                });

                const {fetchedComments,user_id} = await res.json();

                //repopulate children of comments list
                replaceCommentsHelperFunction(fetchedComments,user_id);

            }
        }

    });
})
