const primaryNav = document.querySelector('.primary-navigation');
const navToggle = document.querySelector('.mobile-nav-toggle');


const main = document.querySelector('.main');
const sidebar = document.querySelector('.sidebar');
const numberedArticles = document.querySelector('.numbered-articles');
const body = document.querySelector('body');

navToggle.addEventListener('click', () => {
    const visibility = primaryNav.getAttribute('data-visible');

    if (visibility === "false") {
        primaryNav.setAttribute('data-visible', "true");
        navToggle.setAttribute('aria-expanded', "true");
        main.setAttribute('dark', "true");
        sidebar.setAttribute('dark', "true");
        numberedArticles.setAttribute('dark', "true");
        body.setAttribute('dark', "true");
    } else if (visibility === "true") {
        primaryNav.setAttribute('data-visible', "false");
        navToggle.setAttribute('aria-expanded', "false");

        main.setAttribute('dark', "false");
        sidebar.setAttribute('dark', "false");
        numberedArticles.setAttribute('dark', "false");
        body.setAttribute('dark', "false");
    }
});