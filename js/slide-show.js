import { addActive, removeActive } from "./util.js"

const slides = document.querySelectorAll(".slide")
const slideDots = document.querySelectorAll(".list-dot-slide-item")
const btnNavSlideLeft = document.querySelector('.nav-slide-left')
const btnNavSlideRight = document.querySelector('.nav-slide-right')

let slideIndex = 0

const showDiv = (n) => {
    slides.forEach(element => {
        removeActive(element)
    })
    slideDots.forEach(element => {
        removeActive(element)
    })

    if (n == slides.length) {
        n = 0;
    }
    else if (n == -1) {
        n = slides.length - 1;
    }

    slideIndex = n

    addActive(slides[n])
    addActive(slideDots[n])
}

btnNavSlideLeft.addEventListener('click', () => {
    showDiv(slideIndex - 1)
})
btnNavSlideRight.addEventListener('click', () => {
    showDiv(slideIndex + 1)
})

for(let i = 0; i < slideDots.length; i++) {
    slideDots[i].addEventListener('click', () => {
        showDiv(i)
    })
}

function plusDiv(n) {
    showDiv(slideIndex + n);
}

showDiv(slideIndex);

const autoSlideShow = () => {
    let Auto;
    clearInterval(Auto);
    Auto = setInterval(function () {
        plusDiv(1)
    }, 2000);
}

autoSlideShow()