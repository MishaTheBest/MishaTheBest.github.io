$(window).on('load', function () {
    $preloader = $('#preloader'),
        $loader = $preloader.find('svg');
    setTimeout(function() {
        $loader.fadeOut();
        $preloader.delay(350).fadeOut('slow');
    }, 2000);
});