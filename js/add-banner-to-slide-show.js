import { fetchJson, renderHTML, addActive, removeActive } from './util.js'

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
    return {slides, dotSlides}
}

const {slides, dotSlides} = await renderSlideShow()

export {slides, dotSlides}