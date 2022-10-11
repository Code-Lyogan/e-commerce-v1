let slidePosition = 0;
const slides = document.getElementsByClassName('carousel-pic');
const totalSlides = slides.length;

document.
getElementById('carousel-button-next')
.addEventListener("click", function() {
    moveToNextSlide();
})

document.
getElementById('carousel-button-prev')
.addEventListener("click", function() {
    moveToPrevSlide();
})

function updateSlidePosition() {
    for (let slide of slides) {
        slide.classList.remove('item-visible');
        slide.classList.add('carousel-pic-hidden');
    }
    slides[slidePosition].classList.add('item-visible');
}

 
function moveToNextSlide () {
    updateSlidePosition();

    if (slidePosition === totalSlides - 1) {
        slidePosition = 0;
    } else {
        slidePosition++;
    }
}


function moveToPrevSlide () {
    updateSlidePosition();

    if (slidePosition === 0) {
        slidePosition = 0;
    } else {
        slidePosition--;
    }
}