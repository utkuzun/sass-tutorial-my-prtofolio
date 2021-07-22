const menuBtn = document.querySelector('.menu-btn')
const hamburger = document.querySelector('.menu-btn__burger')
const nav = document.querySelector('.nav')
const menuNav = document.querySelector('.menu-nav')
const menuItems = document.querySelectorAll('.menu-nav__item')

const handleNav = () => {
  const y = window.scrollY

  if (y >= 100) {
    menuNav.classList.add('opac')
  } else {
    menuNav.classList.remove('opac')
  }
}

window.addEventListener('scroll', handleNav)

let showMenu = false

const toggleMenu = () => {
  if (!showMenu) {
    hamburger.classList.add('open')
    nav.classList.add('open')
    menuNav.classList.add('open')
    menuItems.forEach((item) => item.classList.add('open'))
    showMenu = true
  } else {
    hamburger.classList.remove('open')
    nav.classList.remove('open')
    menuNav.classList.remove('open')
    menuItems.forEach((item) => item.classList.remove('open'))

    showMenu = false
  }
}

menuBtn.addEventListener('click', toggleMenu)
