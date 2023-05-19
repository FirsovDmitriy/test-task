import category from "./category.js"
import goods from "../goods.js"
import up from "./up.js"
import buyGoods from "./buy-goods.js"
import anchor from "./anchor.js"

const burger = document.querySelector('.burger')
const navigation = document.querySelector('.header-nav')
burger.addEventListener('click', () => {
  burger.classList.toggle('burger--open')
  navigation.classList.toggle('header-nav--visible')
  if(document.body.classList.contains('page__body--lock')) {
    document.body.classList.remove('page__body--lock')
  } else document.body.classList.add('page__body--lock')
})

const categoryRoot = document.querySelector('#chairs')
goods.chairs.forEach(chair => {
  categoryRoot.insertAdjacentHTML('afterbegin', category(chair))
})

const tables = document.querySelector('#tables')
goods.tables.forEach(table => {
  tables.insertAdjacentHTML('afterbegin', category(table))
})

const beds = document.querySelector('#beds')
goods.beds.forEach(bed => {
  beds.insertAdjacentHTML('afterbegin', category(bed))
})



const modal = document.querySelector('[data-modal]')

const close = document.querySelector('.popup__close')
const overlay = document.querySelector('[data-overlay]')
const root = document.querySelector('#root')



root.addEventListener('click', event => {
  const button = event.target?.closest('.category-card__button')
  if(button) modal.classList.add('modal--active')
  document.body.classList.add('page__body--lock')

})

close.addEventListener('click', () => {
  modal.classList.remove('modal--active')
  document.body.classList.remove('page__body--lock')
})

overlay.addEventListener('click', () => {
  modal.classList.remove('modal--active')
  document.body.classList.remove('page__body--lock')
})

// ===== Theme
const themeSwitch = document.querySelector('[data-theme-switch]')
const cloudMoon = document.querySelector('[data-icon="dark"]')
const sun = document.querySelector('[data-icon="light"]')
const lightStyles = document.querySelector('.light-styles')
const darkStyles = document.querySelector('.dark-styles')

let theme = getSavedScheme() || 'light'
themeSwitch.dataset.themeSwitch = theme

function toggleIcon () {

  if(theme === 'light') {
    sun.style.display = 'none'
    cloudMoon.style.display = 'block'
    
    lightStyles.media = 'all'
    darkStyles.media = 'not all'

  } else {
    sun.style.display = 'block'
    cloudMoon.style.display = 'none'

    lightStyles.media = 'not all'
    darkStyles.media = 'all'
  }
}

toggleIcon()

themeSwitch.addEventListener('click', () => {

  switchMedia()

  if(themeSwitch.dataset.themeSwitch === 'light') {

    sun.style.display = 'block'
    cloudMoon.style.display = 'none'

    themeSwitch.dataset.themeSwitch = 'dark'
    saveScheme('dark')
    
    
  } else {
    
    sun.style.display = 'none'
    cloudMoon.style.display = 'block'

    themeSwitch.dataset.themeSwitch = 'light'
    saveScheme('light')
    
  }

})

function switchMedia() {
  if(themeSwitch.dataset.themeSwitch === 'light') {

    lightStyles.media = 'not all'
    darkStyles.media = 'all'

    
  } else {
    lightStyles.media = 'all'
    darkStyles.media = 'not all'
  }
}

function getSavedScheme() {
  return localStorage.getItem('color-schema')
}

function saveScheme(schema) {
  localStorage.setItem('color-schema', schema)
}

up()
buyGoods()
anchor()