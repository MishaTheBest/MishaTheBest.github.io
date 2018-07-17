
window.onload = function () {
    // function RadialGradientTransition(element,rF=0,gF=0,bF=0,rT=255,gT=255,bT=255) {
    //     let endAnim = false;
    //     while(!endAnim){
    //         if(rF!==rT)rF++;
    //         if(gF!==gT)gF++;
    //         if(bF!==bT)bF++;
    //         element.style.background = `radial-gradient(rgb(28, 105, 90), rgb(${rF}, ${gF}, ${bF}));`;
    //         console.log(element.style.background);
    //         if(rF!==rT&&gF!==gT&&bF!==bT)endAnim = true;
    //     }
    //
    // }
  const header = document.querySelector(".header-container");
  const peoples = document.querySelector("#peoples-bg");
  const peoples2 = document.querySelector("#peoples-bg-2");
    header.addEventListener("mousemove",function (e) {
        let valueX=(e.pageX * -1 / 120);
        //let valueY=(e.pageY * -1 / 80);
       // header.style.backgroundPosition  = valueX+"px" + 0+"px";
        peoples2.style.transform = 'translate3d('+valueX*(-1.5)+'px,'+0+'px,0)';
        peoples.style.transform = 'translate3d('+valueX*(0.5)+'px,'+0+'px,0)';
    });
  header.classList.add("maxOpacity");
    // RadialGradientTransition(header,28,105,90,0,0,0);
};