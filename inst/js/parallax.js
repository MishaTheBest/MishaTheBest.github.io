function castParallax() {

    let opThresh = 350;
    let opFactor = 750;

    window.addEventListener("scroll", function (event) {

        let top = this.pageYOffset;

        let layers = document.getElementsByClassName("parallax");
        let layer, speed, yPos;
        for (let i = 0; i < layers.length; i++) {
            layer = layers[i];
            speed = layer.getAttribute('data-speed');
            let yPos = -(top * speed / 100);
            layer.setAttribute('style', 'transform: translate(0px, ' + yPos + 'px)');

        }
    });
}

document.body.onload = castParallax();
let layer1 = document.querySelector('.money-wrapper > img');
let layer2 = document.querySelector('.money-text-wrapper');
window.addEventListener('scroll',(e)=>{
    let top = document.getElementById('total').offsetTop - this.pageYOffset;


    let speed1,speed2, yPos1,yPos2;
    speed1 = 40;
    yPos1 = (top * speed1 / 100);
    speed2 = 5;
    yPos2 = -(top * speed2 / 100);
    layer1.setAttribute('style', 'transform: translate(0px, ' + yPos1 + 'px)');
    layer2.setAttribute('style', 'transform: translate(0px, ' + yPos2 + 'px)');
});
