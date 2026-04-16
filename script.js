$(document).ready(function(){
    var suara = document.getElementById("laguDokja");

    $("#btn-play").click(function(){
        if (suara.paused) {
            if (suara.currentTime === 0) {
                suara.currentTime = 17; 
        }
            suara.play();
            $(this).text("Pause Lagu");
        } else {
            suara.pause();
            $(this).text("Mainkan Lagu");
        }
    });
});

let currentIndex = 0;
const track = document.getElementById('sliderTrack');
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

const slideWidth = 780; 

function updateSlider() {
    const offset = -currentIndex * slideWidth;
    track.style.transform = `translateX(${offset}px)`;
}

function moveSlide(direction) {
    currentIndex += direction;

    if (currentIndex >= totalSlides) {
        currentIndex = 0;
    }
    if (currentIndex < 0) {
        currentIndex = totalSlides - 1;
    }

    updateSlider();
    resetTimer();
}

let autoSlide = setInterval(() => moveSlide(1), 4000);

function resetTimer() {
    clearInterval(autoSlide);
    autoSlide = setInterval(() => moveSlide(1), 4000);
}