var lastId, menuItems = $(".menu-link"), scrollItems = menuItems.map(function() {
    var item = $($(this).attr("href"));
    if (item.length) {
        return item;
    }
});
//document.querySelector('.menu-link').classList.add('active');
var headerOffset = $('.logo')[0].offsetHeight;
menuItems.click(function(e) {
    var href = $(this).attr("href")
        , offsetTop = href === "#" ? 0 : $(href).offset().top - headerOffset;
    $('html, body').stop().animate({
        scrollTop: offsetTop
    }, 1500);
    e.preventDefault();
});
$("#start-btn").click(function(e) {
    let offsetTop = $("#about").offset().top - 120;
    $('html, body').stop().animate({
        scrollTop: offsetTop
    }, 1500);
    e.preventDefault();
});
// $("#callback").click(function(e) {
//     let offsetTop = $("#contacts").offset().top - 120;
//     $('html, body').stop().animate({
//         scrollTop: offsetTop
//     }, 1500);
//     e.preventDefault();
// });
// $("#cta").click(function(e) {
//     let offsetTop = $("#home").offset().top - 120;
//     $('html, body').stop().animate({
//         scrollTop: offsetTop
//     }, 1500);
//     e.preventDefault();
// });
$(window).scroll(function() {
    var fromTop = $(this).scrollTop() + headerOffset * 2;
    var cur = scrollItems.map(function() {
        if ($(this).offset().top < fromTop)
            return this;
    });
    cur = cur[cur.length - 1];
    var id = cur && cur.length ? cur[0].id : "";
    if ($(window).scrollTop() === $(document).height() - $(window).height()) {
        id = "contacts";
    }
    if (lastId !== id) {
        lastId = id;
        menuItems.parent().removeClass("active").end().filter("[href='#" + id + "']").parent().addClass("active")
    }
});
