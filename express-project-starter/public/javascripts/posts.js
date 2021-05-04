window.addEventListener('DOMContentLoaded',(event)=>{
    const hiddenItems = Array.from(document.querySelectorAll('.hidden-input'));
    hiddenItems.forEach(element => {
        element.style.display='none'
    });
    document.getElementById('create-comment').addEventListener('click',(event)=>{
        hiddenItems.forEach(element => {
            element.style.display='block';
        });
    })
})
