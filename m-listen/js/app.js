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
        }],
        audio: "audio/haskey-piroman.mp3",
        //,"audio/linkin_park_numb.mp3"],
        numOfPlaying: 0,
        //audio: "audio/haskey-piroman.mp3",
        volume: 0.5,
        statusPlaying: false

    },
    methods:{
        playAudio:function () {
            document.getElementById('audio').volume = this.volume;
            this.statusPlaying = true;
            document.getElementById("audio").play();
            this.changeAlbumCover();
        },
        pauseAudio:function(){
            this.statusPlaying = false;
            document.getElementById("audio").pause();
        },
        nextAudio:function(){
            if(this.numOfPlaying<this.tracks.length-1){
                this.numOfPlaying++;
                this.changeAudio(this.tracks[this.numOfPlaying].audio);
                this.playAudio();

            }else {
                this.numOfPlaying = 0;
                this.changeAudio(this.tracks[this.numOfPlaying].audio);
                this.playAudio();
            }
        },
        prevAudio:function(){
            if(this.numOfPlaying>0){
                this.numOfPlaying--;
                this.changeAudio(this.tracks[this.numOfPlaying].audio);
                this.playAudio();
            }else {
                this.numOfPlaying = this.tracks.length-1;
                this.changeAudio(this.tracks[this.numOfPlaying].audio);
                this.playAudio();
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
