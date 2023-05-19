const form = document.querySelector('.form')
const success = document.querySelector('[data-modal="success"]')
const popup = document.querySelector('[data-modal]')

function buyGoods() {
  
  form.addEventListener('submit', event => {
    event.preventDefault()
    popup.classList.remove('modal--active')
    form.reset()

    success.classList.add('modal--active')
    setTimeout(() => {
      success.classList.remove('modal--active')
      document.body.classList.remove('page__body--lock')
    }, 2400)
  })

}

export default buyGoods