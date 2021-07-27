window.addEventListener("DOMContentLoaded", (event)=>{
    const demoBtn = document.querySelector('#demoBtn');
    const mobileNav = document.querySelector('.mobile-menu');
    const mobileMenu = document.querySelector('#mobile-navigation');
    const outsideNav = document.querySelector('#content-block');
    const postArea = document.querySelector('#post-area');

    window.addEventListener('resize', (e) => {
        mobileMenu.style.display = 'none';
    });

    mobileNav.addEventListener('click', (e) => {
       if (window.getComputedStyle(mobileMenu).display == "none") {
          mobileMenu.style.display = 'block';
       } else {
          mobileMenu.style.display = 'none';
       }
    });

    outsideNav.addEventListener('click', (e) => {
        mobileMenu.style.display = 'none';
    });

    //demo button
    if (demoBtn) {
        demoBtn.addEventListener('click', async (e) => {
            await fetch('/demo-user', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify( {} ),
            });
            window.location.reload();
        });
    }

    //voting buttons
    const allPosts = document.getElementById('all-posts');
    if(allPosts){
        allPosts.addEventListener('click', async (event)=>{
            event.preventDefault();
            if(event.target.id.includes('up') || event.target.id.includes('down')){
                const postId = event.target.id.split('-')[1];


                let value= 0;
                if(event.target.id.includes('up')){
                    value=1;
                    document.getElementById(`down-${postId}`).disabled=false;
                    document.getElementById(`up-${postId}`).disabled=true;
                }else{
                    value=-1;
                    document.getElementById(`down-${postId}`).disabled=true;
                    document.getElementById(`up-${postId}`).disabled=false;
                }
                const path = `${window.location.origin}/vote/${postId}`
                const res = await fetch(path, {
                    method: 'POST',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify( {value: value} ),
                });
                const {newScore} = await res.json();
                const scoreDisplay = document.getElementById(`score-${postId}`);
                scoreDisplay.innerHTML=`Score:  <span class='score-num'>${newScore}</span>`;
            }
        })
    }



    if (postArea) {
        postArea.addEventListener('click', async (e)=> {

            e.preventDefault();

            if (e.target.id) { //if the target has an id

                const firstPartOfTargetId = e.target.id.slice(0,'delete-post-btn-'.length);
                if (firstPartOfTargetId === 'delete-post-btn-') { //if the target is a delete button

                    //get the id number of the comment
                    const postId = parseInt(e.target.id.slice('delete-post-btn-'.length),10);

                    //get the path for fetch
                    const path = `/posts/${postId}`;


                    //fetch to delete comment
                    const res = await fetch(path, {
                        method: 'DELETE',
                        headers: {'Content-Type': 'application/json'},
                        body: JSON.stringify( {} ),
                    });

                    const fetchedPost = await res.json();

                    const postToDelete = document.querySelector(`#post-${postId}`);
                    postToDelete.remove();

                    //repopulate children of comments list
                    // replaceCommentsHelperFunction(fetchedComments);
                }

            }
        });
    }

});
