
window.onload = function () {
  const header = document.querySelector(".header-container");
  const partyBg = document.querySelector("#party-bg");
  const peoples = document.querySelector("#peoples-bg");
  const peoples2 = document.querySelector("#peoples-bg-2");
    header.addEventListener("mousemove",function (e) {
        let valueX=(e.pageX * -1 / 120);
        let valueY=(e.pageY * -1 / 80);
            partyBg.style.transform = 'translate3d('+valueX*(1.5)+'px,'+valueY+'px,0)';
            peoples2.style.transform = 'translate3d('+valueX*(-1.5)+'px,'+valueY*(-1)+'px,0)';
            peoples.style.transform = 'translate3d('+valueX*(0.5)+'px,'+valueY+'px,0)';

    });
  header.classList.add("maxOpacity");
};