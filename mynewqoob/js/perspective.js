/* transform: rotateX(0deg) scale(1) translate3d(0px, 0px, 0px);


const perElem = document.getElementById("perspectiveElement");
var visHeight = document.documentElement.clientHeight;


function getElementPosition(element) {
    var elementSourceBottom = element.getBoundingClientRect().top;
    console.log("scrollHeight: "+visHeight+" elementSourceBottom: "+elementSourceBottom);
    if (visHeight <= elementSourceBottom) {
        return false;
    } else if (visHeight > elementSourceBottom) {
        return true;
    }
}
function perspectiveAnimation(element) {
    element.style.transition = "transform .5s linear";
    var perspectiveFrom = 1000,
        rotateXFrom = 80 + "deg",
        scaleFrom = 0.5,
        translateZFrom = -1000 + "px";

    var perspectiveTo = 2000,
        rotateXTo = 0 + "deg",
        scaleTo = 1,
        translateZTo = 0 + "px";


    if(getElementPosition(element)===true){
        element.style.perspective = perspectiveTo;
        element.style.transform = "rotateX("+rotateXTo+") scale("+scaleTo+") translate3d(0px, 0px,"+translateZTo+")";
    }else {
        element.style.perspective = perspectiveFrom;
        element.style.transform = "rotateX("+rotateXFrom+") scale("+scaleFrom+") translate3d(0px, 0px,"+translateZFrom+")";
    }

}

window.onscroll = function() {
    perspectiveAnimation(perElem);

};*/