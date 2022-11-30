import { addActive, removeActive, fetchJson, renderHTML } from '../util/util.js'

const slideHTML = (data) => {
    let html = ''
    html = `<img src="${data.image}">`
    return html
}

const renderSlideShow = async () => {
    let slides = []
    let dotSlides = []
    const listSlide = document.querySelector('.list-slide')
    const listDotSlide = document.querySelector('.list-dot-slide')
    const slideShowData = await fetchJson('/api/v1/banners.json')

    for (let i = 0; i < slideShowData.length; i++) {
        let slide = document.createElement('a')
        slide.href = slideShowData[i].link
        slide.classList.add('slide')
        let dotSlide = document.createElement('span')
        dotSlide.classList.add('list-dot-slide-item')
        dotSlide.innerText = '•'

        renderHTML(slide, slideHTML(slideShowData[i]))

        listSlide.appendChild(slide)
        listDotSlide.appendChild(dotSlide)
        slides.push(slide)
        dotSlides.push(dotSlide)
    }
    return { slides, dotSlides }
}

const { slides, dotSlides } = await renderSlideShow()

let currentSlide = 0
const showSlide = (index) => {
    slides.forEach((element, index) => {
        removeActive(element)
        removeActive(dotSlides[index])
    })

    if (index < 0) {
        index = slides.length - 1
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
