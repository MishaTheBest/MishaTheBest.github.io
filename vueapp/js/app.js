let vm = new Vue({
    el: "#app",
   data: {
       info: "Hello world!",
       phrases: ["Hello","I wanna","Best Wishes"]
   },
    methods:{
        randomElem: function(min,max){
            return Math.floor((Math.random()*max)+min);
        },
        generate: function (){
            this.info = this.phrases[this.randomElem(0,this.phrases.length)];
        }
    }
});