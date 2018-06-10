
Vue.component('loader',{
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
    <div class="loader">
            <div class="progress-bar" v-bind:style="width">
                
            </div>
        </div>
    `
});
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
        minIndex: 0,
        counter: 0
    },
    methods:{
        randomElem: function(min,max){
            return Math.floor((Math.random()*max)+min);
        },
        generate: function (){
            if(this.counter!==100&&this.counter>=0){
                this.info = this.phrases[this.randomElem(this.minIndex,this.phrases.length)];
                this.counter+=10;
            }

        }
    }
});