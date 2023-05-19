const links = document.querySelectorAll('.nav-link')

function anchor() {
  links.forEach(link => {
    link.addEventListener('click', event => {
      event.preventDefault()

      document.querySelector('.burger').classList.remove('burger--open')
      document.querySelector('.header-nav').classList.remove('header-nav--visible')
      document.body.classList.remove('page__body--lock')

      const href  = link.getAttribute('href')
      let id = href.slice(1)
      
      var rect = document.querySelector(`#${id}`).getBoundingClientRect()
      const scroll = window.scrollY || document.documentElement.scrollTop;

      document.body.animate(scrollTo({
        top: rect.top + scroll - 100,
        left: 0,
        behavior: 'smooth'
      }))


    })
  })
}

export default anchor