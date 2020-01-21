const menuToggler = document.querySelectorAll(".menu-toggler");
const menu = document.querySelector(".navigation__menu");
for (let i = 0; i < menuToggler.length; i++) {
    menuToggler[i].addEventListener("click", () => {
        menu.classList.toggle("navigation__menu--active");
    });
}