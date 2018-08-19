"use strict";

const mainPlayBtn = document.getElementById("play-btn");
const leftMainBlock = document.querySelector(".left-main-block");
const rightMainBlock = document.querySelector(".right-main-block");
const rightMainBlockImg = rightMainBlock.querySelector("img");
const mainContainer = document.querySelector(".main-container");
let rightMainBlockTexts = rightMainBlock.querySelectorAll("h2");
const mainContent = document.querySelector("#main-content");
mainContent.style.display = 'none';
let activeText = 0;
let animationStep = 0;
function FirstStep() {
    $("#play-btn").fadeOut(100, function () {

    });
    leftMainBlock.style.transform = "translate3d(-50vw,0,0)";
    leftMainBlock.classList.remove("col-5");
    rightMainBlock.style.left = "0px";
    rightMainBlockImg.style.transform = "scale(1.4)";
    setTimeout(function () {
        rightMainBlock.style.width = "100%";
    }, 1000);
    animationStep++;
    showHeadersText(activeText);
    setTimeout(
        function () {
            let showHeaderInterval = setInterval(function () {
                if(activeText<=rightMainBlockTexts.length-1){
                    showHeadersText(activeText);
                }else {
                    clearInterval(showHeaderInterval);
                    secondStep();
                }
            },2000);
        },1000);
}
function secondStep() {

    rightMainBlockImg.transition = "all 3s ease-in-out";
    setTimeout(function () {
        rightMainBlockImg.style.left = "-10%";
        rightMainBlockImg.style.transform = "rotate(-45deg)";
        mainContent.style.display = 'block';
        let offsetTop = $("#main-content").offset().top;
        $('html, body').stop().animate({
            scrollTop: offsetTop
        }, 1500);
    },1000);

}
function showHeadersText(num){
    if(num===0){
        rightMainBlockTexts[num].style.display = "block";
        setTimeout(function () {
            rightMainBlockTexts[num].classList.add("active");
        },100);

    }else {
        rightMainBlockTexts[num-1].classList.remove("active");
        setTimeout(function () {
            rightMainBlockTexts[num-1].style.display = "none";
            rightMainBlockTexts[num].style.display = "block";
            setTimeout(function () {
                rightMainBlockTexts[num].classList.add("active");
            },100);
        },300);
    }
    animationStep++;
    activeText++;
}
mainPlayBtn.addEventListener('click', FirstStep);
$(window).bind('mousewheel', function (e) {
    if (e.originalEvent.wheelDelta / 120 > 0) {
        console.log('scrolling up');
    }
    else {
        switch (animationStep) {
            case 0 :
                FirstStep();
                break;
        }


    }
});


/********* portfolio **********/

$('.card').on('click', function() {
    $('.cards-container').toggleClass('container-origin');
});
/********* advantages *************/

const advBg = document.querySelector(".adv-bg");
console.log(advBg);
let advElements = advBg.querySelectorAll(".adv-bg-elem");
advBg.addEventListener("mouseover",function (e) {
    let valueX=(e.pageX * -1 / 120);
    let valueY=(e.pageY * -1 / 80);
   for(let i = 0;i<advElements.length;i++){
       movingShadow(advElements[i],valueX*-1);
   }
});
function movingShadow(elem,mouseX) {
    elem.style.boxShadow = `${mouseX}px 1px 3px rgba(0,0,0,.3)`;
    console.log(elem);
}
