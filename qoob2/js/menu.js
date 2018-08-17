"use strict";
const menuToggler = document.querySelector("#main-hum");
let isOpened = false;

function toggleMenu() {
    isOpened = !isOpened;
    menuToggler.classList.toggle("cross-hum");
}

menuToggler.addEventListener("click",toggleMenu);