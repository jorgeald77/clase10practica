const nav_menu = document.querySelector('.icon-menu')
const nav_close = document.querySelector('.icon-close')
const nav = document.querySelector('nav')

nav_menu.addEventListener('click', () => {
    nav.classList.add('open-nav')
})

nav_close.addEventListener('click', () => {
    nav.classList.remove('open-nav')
})