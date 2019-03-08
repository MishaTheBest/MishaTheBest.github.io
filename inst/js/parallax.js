function castParallax() {

    var opThresh = 350;
    var opFactor = 750;

    window.addEventListener("scroll", function(event){

        var top = this.pageYOffset;

        var layers = document.getElementsByClassName("parallax");
        var layer, speed, yPos;
        for (var i = 0; i < layers.length; i++) {
            layer = layers[i];
            speed = layer.getAttribute('data-speed');
            var yPos = -(top * speed / 100);
            layer.setAttribute('style', 'transform: translate(0px, ' + yPos + 'px)');

        }
    });
}

document.body.onload = castParallax();