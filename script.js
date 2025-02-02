const menuIcon = document.getElementById('menu-icon');
const nav = document.getElementById('nav');
const menuIconClass = menuIcon.querySelector('i');

menuIcon.addEventListener('click', () => {
    nav.classList.toggle('open');
    nav.classList.toggle('hidden');

    // Toggle between menu and close icons
    if (menuIconClass.classList.contains('bx-menu')) {
        menuIconClass.classList.remove('bx-menu');
        menuIconClass.classList.add('bx-x');
    } else {
        menuIconClass.classList.remove('bx-x');
        menuIconClass.classList.add('bx-menu');
    }
});


document.addEventListener('scroll', () => {
    const header = document.querySelector('header');

    if (window.scrollY > 0) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});