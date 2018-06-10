
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
        phrases: ["Программист спит – работа идет",
            "Системные администраторы не умирают – они попадают в офлайн",
            "Не соглашаетесь с коллективом? Станьте начальником. Пусть попробуют не согласиться с вами",
            "У женщины есть два пути: успешно выйти замуж и не работать, или найти работу, с которой не нужно выходить замуж",
            "Лучший корпоратив это тот, после которого при входе каждого сослуживца все дружно аплодируют и улюлюкают",
            "О начальстве говорят либо хорошо, либо на другой работе",
            "Первый отпуск, когда отдыхаешь сам, второй – когда начальник",
            "Что посеешь – уже не найдешь",
            "Жизненный опыт приходит только с гАдами"
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