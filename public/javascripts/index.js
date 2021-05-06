window.addEventListener("DOMContentLoaded", (event)=>{
    const mobileNav = document.querySelector('.mobile-menu');
    const mobileMenu = document.querySelector('#mobile-navigation');
    const outsideNav = document.querySelector('.content-block');

    mobileNav.addEventListener('click', (e) => {
        mobileMenu.style.display = 'block';
    });

    outsideNav.addEventListener('click', (e) => {
        mobileMenu.style.display = 'none';
    });
});



// window.addEventListener("load", (event)=>{
//     // console.log("hello from javascript!")
// })
