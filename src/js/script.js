window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.header__nav'),
    menuItem = document.querySelectorAll('.header__nav'),
    hamburger = document.querySelector('.header__hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('header__hamburger_active');
        menu.classList.toggle('header__nav_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('header__hamburger_active');
            menu.classList.toggle('header__nav_active');
        });
    });
});