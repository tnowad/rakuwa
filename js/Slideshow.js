let slideIndex = 0
const slide = document.querySelectorAll(".slide")
const slideDot = document.querySelectorAll(".list-dot-slide-item")
const showDiv = (n) => {
    for (let i = 0; i < slide.length; i++) {
        slide[i].style.display = 'none'
        slideDot[i].classList.remove('active')
    }
    if (n == slide.length) {
        n = 0;
    }
    else if (n == -1) {
        n = slide.length - 1;
    }
    slideIndex = n
    slide[n].style.display = "block"
    slideDot[n].classList.add('active')
}
function plusDiv(n) {
    showDiv(slideIndex + n);
}
showDiv(slideIndex);

function startAuto() {
    let Auto;
    clearInterval(Auto);
    Auto = setInterval(function () {
        plusDiv(1)
    }, 200);
}
startAuto()