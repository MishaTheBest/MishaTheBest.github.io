Vue.component('player',{
    props: {
        audio: String,
        volume: String
    },
    template: `
    <div>
       <audio id="audio" v-bind:volume="volume">
             <source type="audio/mp3" v-bind:src="audio">
                Your browser does not support the audio element.
        </audio>
     </div>`
});
let vm = new Vue({
    el: "#app",
    data: {
        tracks:[{
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
        }],
        audio: "audio/haskey-piroman.mp3",
        //,"audio/linkin_park_numb.mp3"],
        numOfPlaying: 0,
        //audio: "audio/haskey-piroman.mp3",
        volume: 1.0,
        statusPlaying: false,
        showControl: true,
        showEl: "hide"
    },
    methods:{
        playAudio:function () {
            document.getElementById('audio').volume = this.volume;
            this.statusPlaying = true;
            document.getElementById("audio").play();
            this.changeAlbumCover();
        },
        playTrack:function(){
            this.changeAudio(this.tracks[this.numOfPlaying].audio);
            this.playAudio();
        },
        pauseAudio:function(){
            this.statusPlaying = false;
            document.getElementById("audio").pause();
        },
        nextAudio:function(){
            if(this.numOfPlaying<this.tracks.length-1){
                this.numOfPlaying++;
                this.playTrack();
            }else {
                this.numOfPlaying = 0;
                this.playTrack();
            }
        },
        prevAudio:function(){
            if(this.numOfPlaying>0){
                this.numOfPlaying--;
                this.playTrack();
            }else {
                this.numOfPlaying = this.tracks.length-1;
                this.playTrack();
            }
        },
        changeAudio:function(source){
            document.getElementById("audio").src = source;
            document.getElementById("audio").play();
        },
        changeAlbumCover:function () {
           document.querySelector("#album-cover>img").src = this.tracks[this.numOfPlaying].backgroundAlbum;
        },
        setVolume: function setVolume(e) {
            this.volume = e.target.value;
            document.getElementById('audio').volume = this.volume;
        }
    }
});
