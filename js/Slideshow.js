let slideIndex = 0
const slide = document.querySelectorAll(".slide")
const showDiv = (n) => {
    for (let i = 0; i < slide.length; i++) {
        slide[i].style.display = 'none'
    }
    if (n == slide.length) {
        n = 0;
    }
    else if (n == -1) {
        n = slide.length -1;
    }
    console.log(n)
    slideIndex = n
    slide[n].style.display = "block"
}
function plusDiv(n) {
    showDiv(slideIndex + n);
}
showDiv(slideIndex);