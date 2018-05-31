'use strict';
const leftButton = document.querySelector('#left-arrow');
const rightButton = document.querySelector('#right-arrow');
const photosPlace = document.querySelector('#quote-profile-photos');
let quotesParagraph = document.getElementById("quote-paragraph");
let quotesName  = document.getElementById("quote-name");
let quotesPosition  = document.getElementById("quote-position");
let quotesStorage = document.querySelectorAll("#quote-hidden-storage>.quote-hidden-elem");
let quotesStorageQuantity = quotesStorage.length;
let middleIndex = (Math.floor(quotesStorage.length/2));
let showQuantity= middleIndex;

let images = ["quote-profile.png","quote-profile1.png","quote-profile2.png"];


function generateProfilePhoto(source) {
    let img = document.createElement("img");
    img.src = source;
    let div = document.createElement("div");
    div.classList.add("quote-profile-photo");
    div.appendChild(img);
    return div;
}

/*function hideProfilePhoto(index) {
    photosPlace.children[index].classList.add("hidden-profile-photo");
    setTimeout(function () {
        photosPlace.removeChild(photosPlace.children[index]);
    },300);
}
*/
function renderProfiles() {
    if (photosPlace.children.length > 0) {
        photosPlace.innerHTML = "";
    }

    for(let i=0;i<quotesStorage.length;i++){
        photosPlace.appendChild(generateProfilePhoto("img/"+images[i]));
    }
    photosPlace.querySelectorAll(".quote-profile-photo")[middleIndex].classList.add("quote-profile-photo-active");
}
function showQuote() {
    let quotesStorageParagraph = quotesStorage[showQuantity].querySelector("p");
    let quotesStorageName = quotesStorage[showQuantity].querySelector(".full-name");
    let quotesStoragePosition = quotesStorage[showQuantity].querySelector(".position");
    quotesParagraph.innerHTML = quotesStorageParagraph.innerHTML;
    quotesName.innerHTML = quotesStorageName.innerHTML;
    quotesPosition.innerHTML = quotesStoragePosition.innerHTML;
    renderProfiles();
}
showQuote();
function plusQuote() {
    showQuantity>=quotesStorageQuantity-1?showQuantity=0:showQuantity++;
    for (let i = 0; i < quotesStorageQuantity; i++) {
        if(i + 1 !== quotesStorageQuantity) {
            let x = images[i];
            images[i] = images[i+1];
            images[i+1] = x;
        }
    }
}
function minusQuote() {
    showQuantity<=0?showQuantity=quotesStorageQuantity-1:showQuantity--;
    for (let i = quotesStorageQuantity-1; i > 0; i--) {
            let x = images[i];
            images[i] = images[i-1];
            images[i-1] = x;
        console.log(images);
    }
}
leftButton.addEventListener('click',function () {
    minusQuote();
    showQuote();
});
rightButton.addEventListener('click',function () {
    plusQuote();
    showQuote();
});

