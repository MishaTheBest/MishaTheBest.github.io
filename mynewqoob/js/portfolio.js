var scrollingArea = document.getElementById("h-scrolling");
var portfolio  = document.getElementById("portfolio-wrapper");
var lastDelta = 0;
var portfolioElements =  document.getElementsByClassName("portfolio-element");
var ElemWidth = portfolioElements[0].offsetWidth;
var windowWidth = window.innerWidth;

for(var i = 0;i<portfolioElements.length;i++){
    portfolioElements[i].offsetWidth = windowWidth/3;
    console.log( portfolioElements[i].offsetWidth);
}
portfolio.style.width = ElemWidth * portfolioElements.length + 100 + 'px';
portfolio.style.transform = "translate3d("+(-ElemWidth/2)+"px,0,0)";


var direction  = 1;
var lastStep = ElemWidth/2;
function onWheel(e) {
    e = e || window.event;
    // wheelDelta не дает возможность узнать количество пикселей
    var delta = e.deltaY || e.detail || e.wheelDelta;
    delta===lastDelta?direction*=1:direction*=-1;
    lastDelta=delta;
    lastStep+=ElemWidth*direction;
    e.preventDefault ? e.preventDefault() : (e.returnValue = false);
    portfolio.style.transform = "translate3d("+lastStep+"px,0,0)";
    console.log(lastStep);
}
scrollingArea.addEventListener("mouseover",function () {
    scrollingArea.addEventListener('mousewheel',onWheel);
    console.log('added');
});
scrollingArea.addEventListener("mouseout",function () {
    scrollingArea.removeEventListener('mousewheel',onWheel);
    console.log('removed');
});


