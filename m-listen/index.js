const http = require("http");
let tracks = JSON.stringify([{
    artist:"Хаски",
    trackName: "Пироман",
    album: "Сбчь жзнь",
    audio:"audio/haskey-piroman.mp3",
    backgroundAlbum: 'img/doglife.jpg'
},{
    artist:"Linkin Park",
    trackName: "Numb",
    album: "Meteora",
    audio:"audio/linkin_park_numb.mp3",
    backgroundAlbum: 'img/Meteora.jpg'
},{
    artist:"Хаски",
    trackName: "Панелька",
    album: "Любимые песни (воображаемых) людей",
    audio:"audio/haskey-panelka.mp3",
    backgroundAlbum: 'img/lovelysongsofimaginepeoples.jpg'
},{
    artist:"Lil Peep",
    trackName: "Star Shopping",
    album: "LiL PEEP; PART ONE",
    audio:"audio/lil-peep-star-shopping-stars-hopping.mp3",
    backgroundAlbum: 'img/starshopping.jpg'
},{
    artist:"Хаски",
    trackName: "Ай",
    album: "Любимые песни (воображаемых) людей",
    audio:"audio/01 - aj.mp3",
    backgroundAlbum: 'img/lovelysongsofimaginepeoples.jpg'
},{
    artist:"Хаски",
    trackName: "Бит шатает голову",
    album: "Любимые песни (воображаемых) людей",
    audio:"audio/02 - bit shataet golovu.mp3",
    backgroundAlbum: 'img/lovelysongsofimaginepeoples.jpg'
},{
    artist:"Хаски",
    trackName: "Пуля-дура",
    album: "Любимые песни (воображаемых) людей",
    audio:"audio/05 - pulya-dura.mp3",
    backgroundAlbum: 'img/lovelysongsofimaginepeoples.jpg'
},{
    artist:"Хаски",
    trackName: "Пироман 17",
    album: "Любимые песни (воображаемых) людей",
    audio:"audio/06 - piroman 17.mp3",
    backgroundAlbum: 'img/lovelysongsofimaginepeoples.jpg'
}, {
    artist: "Хаски",
    trackName: "Черным-черно",
    album: "Любимые песни (воображаемых) людей",
    audio: "audio/10 - chernym-cherno.mp3",
    backgroundAlbum: 'img/lovelysongsofimaginepeoples.jpg'
}]);
let server = http.createServer(function (req,res) {
    res.writeHead(200, {
        'Content-Type': 'application/json; charset=utf-8',
        "Access-Control-Allow-Origin":"*"
    });
    res.write(tracks); //write a response to the client
    res.end(); //end the response
});
server.listen(3000,"127.0.0.1");
