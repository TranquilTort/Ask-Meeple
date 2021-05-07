window.addEventListener("DOMContentLoaded", (event)=>{
    const mobileNav = document.querySelector('.mobile-menu');
    const mobileMenu = document.querySelector('#mobile-navigation');
    const outsideNav = document.querySelector('#content-block');

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



    //voting buttons
    const allPosts = document.getElementById('all-posts');
    allPosts.addEventListener('click', async (event)=>{
        event.preventDefault();

        if(event.target.id.includes('up') || event.target.id.includes('down')){
            const postId = event.target.id.slice(event.target.id.length-1);
            console.log('POSTID:',postId)

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
            scoreDisplay.innerHTML=`Score: ${newScore}`;
        }
    })


});
