const menuToggler = document.querySelectorAll(".menu-toggler");
const menu = document.querySelector(".navigation__menu");
for (let i = 0; i < menuToggler.length; i++) {
    menuToggler[i].addEventListener("click", () => {
        menu.classList.toggle("navigation__menu--active");
    });
}
$(function() {
    $('#lang').selectric();
});
const languageToggler = document.querySelectorAll(".language-toggler");
const languagePopUp = document.querySelector(".language-popup");
for (let i = 0; i < languageToggler.length; i++) {
    languageToggler[i].addEventListener("click", () => {
        languagePopUp.classList.toggle("language-popup--active");
    });
}

