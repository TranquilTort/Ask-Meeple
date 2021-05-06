window.addEventListener("DOMContentLoaded", (event)=>{
    const mobileNav = document.querySelector('.mobile-menu');
    const mobileMenu = document.querySelector('#mobile-navigation');
    const outsideNav = document.querySelector('#content-block');

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
});



// window.addEventListener("load", (event)=>{
//     // console.log("hello from javascript!")
// })
