'use strict';

const prevBtn = document.getElementById("prev-review");
const nextBtn = document.getElementById("next-review");
const reviewsWrapper = document.querySelector("#reviews-wrapper");
const reviewsWrapperRow = document.querySelector("#reviews-wrapper>.row");
let reviews = document.querySelectorAll(".review-element");
let reviewsLength = reviews.length;
let reviewWidth = reviews[0].offsetWidth;
let count = 1;
let translateX = 0;
function responsiveVariables() {
    console.log("resize");
    reviewWidth = reviews[0].offsetWidth;
    reviewsWrapper.style.width = reviewsLength * (reviewWidth + 30) + "px";
    console.log( reviewWidth);
    for (let i = 0; i < reviewsLength; i++) {
        reviews[i].style.flex = `0 0 ${reviewWidth}px`;
    }
}
reviewsWrapper.style.width = reviewsLength * (reviewWidth + 30) + "px";
for (let i = 0; i < reviewsLength; i++) {
    reviews[i].style.flex = `0 0 ${reviewWidth + 30}px`;
}
function nextReview() {
    count++;
    translateX -= (reviewWidth + 30);
    if(count>=reviewsLength){
        translateX = 0;
        count = 1;
    }
    console.log(translateX,count);
    reviewsWrapperRow.style.transform = `translate3d(${translateX}px,0,0)`;
}
function previousReview() {
    count--;
    translateX += (reviewWidth) + 30;
    if(count<=1){
        translateX = (reviewsLength-2) * (reviewWidth + 30)*-1 ;
        count = reviewsLength;
    }
    console.log(translateX,count);
    reviewsWrapperRow.style.transform = `translate3d(${translateX}px,0,0)`;
}
nextBtn.addEventListener("click", nextReview);
prevBtn.addEventListener("click", previousReview);

document.body.onresize = responsiveVariables;
