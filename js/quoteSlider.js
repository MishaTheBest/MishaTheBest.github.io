/*window.onload = function () {

};*/
'use strict';
const maxVisibleElements = 5;
let currentQuote = 0;


const leftButton = document.querySelector('#left-arrow');
const rightButton = document.querySelector('#right-arrow');
const photosPlace = document.querySelector('#quote-profile-photos');
let quotesParagraph = document.getElementById("quote-paragraph");
let quotesName  = document.getElementById("quote-name");
let quotesPosition  = document.getElementById("quote-position");
quotesParagraph.innerHTML = "";

let quotesStorage = document.querySelectorAll("#quote-hidden-storage>.quote-hidden-elem");
let quotesStorageQuantity = quotesStorage.length;

function generateProfilePhoto(source) {
    let img = document.createElement("img");
    img.src = source;
    let div = document.createElement("div");
    div.classList.add("quote-profile-photo");
    div.appendChild(img);
    return div;
}
for(let i=0;i<quotesStorageQuantity;i++){
    photosPlace.appendChild(generateProfilePhoto(quotesStorage[i].querySelector("img").src))
}
function showQuote() {
    let quotesStorageParagraph = quotesStorage[currentQuote].querySelector("p");
    let quotesStorageName = quotesStorage[currentQuote].querySelector(".full-name");
    let quotesStoragePosition = quotesStorage[currentQuote].querySelector(".position");
    quotesParagraph.innerHTML = quotesStorageParagraph.innerHTML;
    quotesName.innerHTML = quotesStorageName.innerHTML;
    quotesPosition.innerHTML = quotesStoragePosition.innerHTML;

}
showQuote();
function plusQuote() {
    currentQuote===quotesStorageQuantity-1?currentQuote=0:currentQuote++;
}
function minusQuote() {
    currentQuote===0?currentQuote=quotesStorageQuantity-1:currentQuote--;
}
leftButton.addEventListener('click',function () {
    minusQuote();
    showQuote();
});
rightButton.addEventListener('click',function () {
    plusQuote();
    showQuote();
});

