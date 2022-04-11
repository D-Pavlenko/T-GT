const navBtn = document.querySelector('.header__nav-button');
const mobileNav = document.querySelector('.header_mobile-nav');
const body = document.body;

navBtn.addEventListener('click', (event) => {
    event.stopPropagation();
    toggleMobileNav()
})

window.addEventListener('click', () => {
    if (body.classList.contains('no-scroll')) {
        toggleMobileNav()
    }
})

mobileNav.addEventListener('click', (event) => {
    event.stopPropagation();
})

function toggleMobileNav() {
    mobileNav.classList.toggle('header_mobile-nav-active');
    navBtn.classList.toggle('header__nav-button-close');
    body.classList.toggle('no-scroll');
}