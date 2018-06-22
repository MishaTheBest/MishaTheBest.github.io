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
        backgroundAlbum: 'img/doglife.jpg' ,
        tracks:["audio/haskey-piroman.mp3","audio/linkin_park_numb.mp3"],
        numOfPlaying: 0,
        audio: "audio/haskey-piroman.mp3",
        volume: 0.5,
        statusPlaying: false

    },
    methods:{
        playAudio:function () {
            document.getElementById('audio').volume = this.volume;
            this.statusPlaying = true;
            this.audio = this.tracks[this.numOfPlaying];
           // document.getElementById("audio").src = this.audio;
            document.getElementById("audio").play();
            this.changeAlbumCover();
        },
        pauseAudio:function(){
            this.statusPlaying = false;
            document.getElementById("audio").pause();
        },
        nextAudio:function(){
            this.numOfPlaying++;
            this.changeAudio(this.tracks[this.numOfPlaying]);
        },
        changeAudio:function(source){
            document.getElementById("audio").src = source;
            document.getElementById("audio").play();
        },
        changeAlbumCover:function () {
           document.querySelector("#album-cover>img").src = this.backgroundAlbum;
        },
        setVolume: function setVolume(e) {
            this.volume = e.target.value;
            document.getElementById('audio').volume = this.volume;
        }
    }
});
