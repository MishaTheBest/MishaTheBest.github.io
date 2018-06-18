Vue.component('player',{
    props: {
        val: Number,
        max: Number,
        counter: Number
    },
    computed: {
        width() {
            let w = this.val/this.max*100;
            return{
                width: w + '%'
            }
        }
    },
    template: `
    <div>
       <audio id="audio">
             <source src="audio/haskey-piroman.mp3" type="audio/mp3">
                Your browser does not support the audio element.
        </audio>
        </div>`
});
let vm = new Vue({
    el: "#app",
    data: {
        backgroundAlbum: "url('img/doglife.jpg')" ,
        audio: String
    },
    methods:{
        playAudio:function () {
            document.getElementById("audio").play();
            this.changeAlbumCover();
        },
        changeAlbumCover:function () {
            document.getElementById("app").style.background = this.backgroundAlbum + "no-repeat center/cover";
            document.getElementById("player-block").style.background = this.backgroundAlbum + "no-repeat center";
        }
    }
})
