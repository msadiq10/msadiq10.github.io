const navMenu = document.getElementById('nav-menu'),
        navToggle = document.getElementById('nav-toggle'),
        navClose = document.getElementById('nav-close')

// validate Toggle constant
if(navToggle){
    // show menu
    navToggle.addEventListener('click', () => {
        console.log('hi')
        navMenu.classList.add('show-menu')
    })
}

// validate Close constant

if(navClose){
    // close menu
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

// close menu after clicking a menu item
const navLink = document.querySelectorAll('.nav_link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))