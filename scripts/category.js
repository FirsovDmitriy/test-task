const months = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря']

function category({ title, img, date }) {

  const getDayInfo = (parametr) => {
    const array = parametr.split('.')
    const tmp = array[0]
    array[0] = array[1]
    array[1] = tmp
    const d = array.join()
    const date = new Date(d)

   const numberWeek = () => {
    if(1 <= date.getDate() && date.getDate() <= 7) {
      return 1
    } 

    if(7 < date.getDate() && date.getDate() <= 14) {
      return 2
    }

    if(14 < date.getDate() && date.getDate() <= 21) {
      return 3
    }

    if(21 < date.getDate() && date.getDate() <= 28) {
      return 4
    }
   } 

    const day = date.toLocaleDateString('ru', { weekday: 'long' })
    const formattedDate = `${day.charAt(0).toUpperCase() + day.slice(1)}, ${ numberWeek() } неделя ${months[date.getMonth()]} ${date.getFullYear()} года`
    return formattedDate
  }

  return (`
    <div class="category__card category-card">
    <div class="category-card__img-wrapper category-card-item">
      <img class="category-card__img" src=${ img } width="220" height="255" alt=${ title }>
    </div>
    <div class="category-card__content">
      <h3 class="category-card__title category-card-item">
        ${ title }
      </h3>
      <p class="category-card__date category-card-item"> ${ getDayInfo(date) } </p>
      <button class="category-card__button" aria-label="Open modal window">
        <svg class="category-card__icon" width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M22.1343 12.281C22.1343 11.5119 21.5108 10.8884 20.7416 10.8884H13.7784V3.92507C13.7784 3.15592 13.1548 2.53241 12.3857 2.53241C11.6165 2.53241 10.993 3.15592 10.993 3.92507V10.8884H4.02974C3.2606 10.8884 2.63708 11.5119 2.63708 12.281C2.63708 13.0502 3.2606 13.6737 4.02974 13.6737H10.993V20.637C10.993 21.4061 11.6165 22.0296 12.3857 22.0296C13.1548 22.0296 13.7784 21.4061 13.7784 20.637V13.6737H20.7416C21.5108 13.6737 22.1343 13.0502 22.1343 12.281Z" fill="white"/>
        </svg>                  
      </button>
    </div>
  </div>
  `)
}

export default category
