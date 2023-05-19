const upButton = document.querySelector('.up')
const target = document.querySelector('.target')

let options = {
  root: null,
  rootMargin: '0px',
  threshold: 0
}

const callback = (entries, observer) => {
  entries.forEach(entry => {
    entry.isIntersecting ? upButton.classList.add('up--visible') : (
      upButton.classList.remove('up--visible')
    )
  })
}

let observer = new IntersectionObserver(callback, options)
observer.observe(target)

function up() {
  upButton.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    })
  })
}

export default up