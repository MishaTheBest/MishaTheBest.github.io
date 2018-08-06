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
maxSlide.innerHTML = `${maxSlideNum}`;
setActiveSlide();
function setActiveSlide() {
    activeSlide.innerHTML = `${activeSlideNum+1}`;
}

function nextSlide() {
    slides[activeSlideNum].style.transform = `translate3d(0,-100vh,0)`;
    if(activeSlideNum>=maxSlideNum-1){
        for(let i = 0;i<maxSlideNum;i++){
            slides[i].style.transform = `translate3d(0,100vh,0)`;
        }
    }
    activeSlideNum>=maxSlideNum-1?activeSlideNum=0:activeSlideNum++;
    console.log(activeSlideNum);
    slides[activeSlideNum].style.transform = `translate3d(0,0,0)`;
    setActiveSlide();
    nextSlideBtn.removeEventListener("click",nextSlide);
    setTimeout(function () {
        nextSlideBtn.addEventListener("click", nextSlide);
    },1800);
}

function prevSlide() {

    slides[activeSlideNum].style.transform = `translate3d(0,100vh,0)`;
    if(activeSlideNum<=0){
        for(let i = 0;i<maxSlideNum;i++){
            slides[i].style.transform = `translate3d(0,-100vh,0)`;
        }
    }
    activeSlideNum<=0?activeSlideNum=maxSlideNum-1:activeSlideNum--;
    slides[activeSlideNum].style.transform = `translate3d(0,0,0)`;
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

