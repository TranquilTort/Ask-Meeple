window.addEventListener('DOMContentLoaded',(event)=>{
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
})
