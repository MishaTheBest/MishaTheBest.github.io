'use strict';

const nextSlideBtn = document.querySelector("#next-slide");
const prevSlideBtn = document.querySelector("#prev-slide");
const slides = document.querySelectorAll(".slider-inner");
const maxSlide = slides.length-1;
let activeSlideNum = 0;

function nextSlide() {
    slides[activeSlideNum].style.top = "-100vh";
    activeSlideNum++;
    slides[activeSlideNum].style.top = "0";
    slides[activeSlideNum].classList.add("active");
    slides[activeSlideNum - 1].classList.remove("active");
}

function prevSlide() {
    slides[activeSlideNum].style.top = "100vh";
    activeSlideNum--;
    slides[activeSlideNum].style.top = "0";
    slides[activeSlideNum].classList.add("active");
    slides[activeSlideNum + 1].classList.remove("active");

}

nextSlideBtn.addEventListener("click", nextSlide);
prevSlideBtn.addEventListener("click", prevSlide);