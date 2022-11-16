import { addActive, removeActive } from './util.js'
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
    timeOutChangeSlide(2000)
})
btnNavRightSlide.addEventListener('click', () => {
    plusSlide(1)
    timeOutChangeSlide(2000)
})

dotSlides.forEach((element, index) => {
    element.addEventListener('click', () => {
        showSlide(index)
        timeOutChangeSlide(2000)
    })
})

let interval
const startSlideShow = () => {
    showSlide(0)
    interval = setInterval(plusSlide, 2000, 1)
}

const stopSlideShow = () => {
    clearInterval(interval)
}

const timeOutChangeSlide = (time) => {
    stopSlideShow()
    setTimeout(startSlideShow, time, time)
}

startSlideShow(2000)