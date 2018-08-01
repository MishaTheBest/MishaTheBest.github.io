'use strict';

const nextSlideBtn = document.querySelector("#next-slide");
const prevSlideBtn = document.querySelector("#prev-slide");
const slides = document.querySelectorAll(".slider-inner");
const maxSlide = document.querySelector("#max-slide");
const activeSlide = document.querySelector("#active-slide");
const maxSlideNum = slides.length;
const sliderControlArea = document.querySelector("#slider-control");
let activeSlideNum = 0;
let prevShowedSlide;
maxSlide.innerHTML = `0${maxSlideNum}`;
setActiveSlide();
function setActiveSlide() {
    activeSlide.innerHTML = `0${activeSlideNum+1}`;
}

function nextSlide() {
    prevShowedSlide = slides[activeSlideNum];
    prevShowedSlide.classList.remove("active");
    activeSlideNum>=maxSlideNum-1?activeSlideNum=0:activeSlideNum++;
    console.log(activeSlideNum);
    slides[activeSlideNum].classList.add("active");

    setActiveSlide();
}

function prevSlide() {
    prevShowedSlide = slides[activeSlideNum];
    activeSlideNum<=0?activeSlideNum=maxSlideNum-1:activeSlideNum--;
    slides[activeSlideNum].classList.add("active");
    prevShowedSlide.classList.remove("active");
    setActiveSlide();
}

nextSlideBtn.addEventListener("click", nextSlide);
prevSlideBtn.addEventListener("click", prevSlide);
let autoPlaySlide = setInterval(nextSlide,5000);
// sliderControlArea.addEventListener("mouseover",clearInterval(autoPlaySlide));
// sliderControlArea.addEventListener("mouseout",setInterval(maxSlide,5000));

