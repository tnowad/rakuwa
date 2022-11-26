import { addActive, removeActive } from './util/util.js'
import { slides, dotSlides } from './add-banner-to-slide-show.js'

let currentSlide = 0
const showSlide = (index) => {
    slides.forEach((element, index) => {
        removeActive(element)
        removeActive(dotSlides[index])
    })

    if (index < 0) {
        index = slides.length - 1;
    } else if (index >= slides.length) {
        index = 0
    }

    currentSlide = index
    addActive(slides[index])
    addActive(dotSlides[index])
}

const plusSlide = (number) => {
    showSlide(currentSlide + number)
}

const btnNavLeftSlide = document.querySelector('.nav-slide-left')
const btnNavRightSlide = document.querySelector('.nav-slide-right')

btnNavLeftSlide.addEventListener('click', () => {
    plusSlide(-1)
})

btnNavRightSlide.addEventListener('click', () => {
    plusSlide(1)
})

dotSlides.forEach((element, index) => {
    element.addEventListener('click', () => {
        showSlide(index)
    })
})

const startSlideShow = (time) => {
    showSlide(0)
    window.setInterval(plusSlide, time, 1)
}

startSlideShow(4000)