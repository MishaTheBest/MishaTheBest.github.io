let vm = new Vue({
    el: "#app",
   data: {
       info: "Hello world!",
       phrases: ["Hello",
           "I wanna",
           "Best Wishes",
           "A",
           "B",
           "C"
       ],
       minIndex: 0
   },
    methods:{
       randomElem: function(min,max){
            return Math.floor((Math.random()*max)+min);
        },
        generate: function (){
            this.info = this.phrases[this.randomElem(this.minIndex,this.phrases.length)];
        }
    }
});
