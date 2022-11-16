import { addActive, removeActive } from "./util.js"

const slides = document.querySelectorAll(".slide")
const slideDots = document.querySelectorAll(".list-dot-slide-item")

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