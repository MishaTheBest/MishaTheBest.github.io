'use strict';

const nextSlideBtn = document.querySelector("#next-slide");
const prevSlideBtn = document.querySelector("#prev-slide");
const sliderContent = document.querySelector("#main-slider-list");
const slides = document.querySelectorAll(".main-slider-inner");
const maxSlide = document.querySelector("#max-slide");
const activeSlide = document.querySelector("#active-slide");
const maxSlideNum = slides.length;
const sliderControlArea = document.querySelector("#slider-control");
let activeSlideNum = 0;
let prevShowedSlide;
maxSlide.innerHTML = `${maxSlideNum}`;
setActiveSlide();
function setActiveSlide() {
    activeSlide.innerHTML = `${activeSlideNum+1}`;
}

function nextSlide() {
    activeSlideNum>=maxSlideNum-1?activeSlideNum=0:activeSlideNum++;
    sliderContent.style.top = -(activeSlideNum*$('#main-slider').height())+"px";
    console.log(activeSlideNum);
    setActiveSlide();
    nextSlideBtn.removeEventListener("click",nextSlide);
    setTimeout(function () {
        nextSlideBtn.addEventListener("click", nextSlide);
    },1800);
}

function prevSlide() {
    activeSlideNum<=0?activeSlideNum=maxSlideNum-1:activeSlideNum--;
    sliderContent.style.top = -(activeSlideNum*$('#main-slider').height())+"px";
    setActiveSlide();
    prevSlideBtn.removeEventListener("click",prevSlide);
    setTimeout(function () {
        prevSlideBtn.addEventListener("click", prevSlide);
    },1800);
}

nextSlideBtn.addEventListener("click", nextSlide);
prevSlideBtn.addEventListener("click", prevSlide);
let autoPlaySlide = setInterval(nextSlide,5000);
sliderControlArea.addEventListener("mouseover",function (){
    clearInterval(autoPlaySlide);
});
sliderControlArea.addEventListener("mouseout",function(){
         autoPlaySlide = setInterval(nextSlide,5000);
}
);
window.onresize = function () {
    sliderContent.style.top = -(activeSlideNum*$(window).height())+"px";
};

