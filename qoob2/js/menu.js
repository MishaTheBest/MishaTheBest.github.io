"use strict";
const checkbox = document.getElementById("menu-open");
const menu = document.querySelector(".menu");
const closedHeight = 50;
const openedHeight = 650;
menu.style.height = `${closedHeight}px`;
if ("onpropertychange" in checkbox) {
    // старый IE
    checkbox.onpropertychange = function() {
        // проверим имя изменённого свойства
        if (event.propertyName == "checked") {
            if(checkbox.checked === true){
                menu.style.height = `${openedHeight}px`;
            }else {
                menu.style.height = `${closedHeight}px`;
            }
        }
    };
} else {
    // остальные браузеры
    checkbox.onchange = function() {
        if(checkbox.checked === true){
            menu.style.height = `${openedHeight}px`;
        }else {
            menu.style.height = `${closedHeight}px`;
        }
    };
}