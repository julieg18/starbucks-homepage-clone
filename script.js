const hamburgerMenuBtn = document.querySelector('.nav__ham-menu-btn')
const hamburgerMenuBtnIcon = document.querySelector('.nav__ham-menu-btn-icon')

hamburgerMenuBtn.addEventListener('click', () => {
  hamburgerMenuBtnIcon.classList.toggle('nav__ham-menu-btn-icon_open')
})
