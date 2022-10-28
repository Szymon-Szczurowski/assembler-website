const nav = document.querySelector('.nav')
const navBtn = document.querySelector('.header__btn')
const allNavItems = document.querySelectorAll('.nav__item')

const handleNav = () => {
    nav.classList.toggle('nav--active')


    allNavItems.forEach(item => {
        item.addEventListener('click', () => {
            nav.classList.remove('nav--active')
        })
    })

    handleNavItemsAnimation();
}

const handleNavItemsAnimation = () => {
    let delayTime = 0;

    allNavItems.forEach(item => {
        item.classList.toggle('nav-items-animation')

        //animation delay
        item.style.animationDelay = '.' + delayTime + 's'
        delayTime++;
    })
}

navBtn.addEventListener('click', handleNav)
