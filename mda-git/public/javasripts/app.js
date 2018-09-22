'use strict';

const vm = new Vue({
    el: '#app',
    data: {
        basketCounter: 0,
        showSelector: false,
        brand:'',
        height:'',
        width:'',
        diameter:'',
        season:'',
        ship:'',
        reinforced:'',

        isValidated:false,

        tiers: [{
            "product_id": 19453,
            "brand": "Michelin",
            "height": "65",
            "end_opt_price": "1262,40",
            "end_rozn_price": "1462,40",
            "year": 16,
            "supplier_city": "Днепр",
            "date": "02.04.2018 09:30:33",
            "diameter": "14",
            "load_index": "86",
            "speed_index": "T",
            "model": "X-Ice XI2",
            "name": "Michelin X-Ice XI2 185\/65 R14 86T",
            "ini_opt_price": "1262,40",
            "amount": 4,
            "supplier": "dp_Автокилометр",
            "ini_rozn_price": "0,00",
            "season": "зимняя",
            "country": "Russia",
            "wehicle_type": "легковой",
            "reinforced": null,
            "photo": "products\/1000001846.jpg",
            "ship": "нешип",
            "width": "185"
        }, {
            "product_id": 116958,
            "brand": "Kleber",
            "height": "0",
            "end_opt_price": "1815,00",
            "end_rozn_price": "2015,00",
            "year": 17,
            "supplier_city": "Львов",
            "date": "02.04.2018 09:01:14",
            "diameter": "14",
            "load_index": "102\/100",
            "speed_index": "R",
            "model": "Transalp 2",
            "name": "Kleber Transalp 2 185 R14C 102\/100R",
            "ini_opt_price": "1815,00",
            "amount": 20,
            "supplier": "lv_ШипШина",
            "ini_rozn_price": "0,00",
            "season": "зимняя",
            "country": "Romania",
            "wehicle_type": "микроавтобус",
            "reinforced": "C",
            "photo": "products\/1000001678.jpg",
            "ship": "нешип",
            "width": "185"
        }, {
            "product_id": 217594,
            "brand": "Sava",
            "height": "80",
            "end_opt_price": "1341,30",
            "end_rozn_price": "1541,30",
            "year": null,
            "supplier_city": "Лубны",
            "date": "22.03.2018 14:40:54",
            "diameter": "14",
            "load_index": "102\/100",
            "speed_index": "Q",
            "model": "Trenta",
            "name": "Sava Trenta 185\/80 R14C 102\/100Q",
            "ini_opt_price": "1341,30",
            "amount": 2,
            "supplier": "lub_Vianor",
            "ini_rozn_price": "0,00",
            "season": "летняя",
            "country": null,
            "wehicle_type": "микроавтобус",
            "reinforced": "C",
            "photo": "products\/1000002060.jpg",
            "ship": "нешип",
            "width": "185"
        }, {
            "product_id": 1000221116,
            "brand": "Sava",
            "height": "80",
            "end_opt_price": "1762,10",
            "end_rozn_price": "1962,10",
            "year": 11,
            "supplier_city": "Лубны",
            "date": "22.03.2018 14:40:54",
            "diameter": "14",
            "load_index": "109\/107",
            "speed_index": "P",
            "model": "Trenta",
            "name": "Sava Trenta 205\/80 R14C 109\/107P",
            "ini_opt_price": "1762,10",
            "amount": 6,
            "supplier": "lub_Vianor",
            "ini_rozn_price": "0,00",
            "season": "летняя",
            "country": "Poland",
            "wehicle_type": "микроавтобус",
            "reinforced": "C",
            "photo": "products\/1000002060.jpg",
            "ship": "нешип",
            "width": "205"
        }, {
            "product_id": 18024,
            "brand": "Hankook",
            "height": "0",
            "end_opt_price": "1686,00",
            "end_rozn_price": "1886,00",
            "year": 17,
            "supplier_city": "Киев",
            "date": "31.03.2018 13:31:37",
            "diameter": "14",
            "load_index": "102\/100",
            "speed_index": "Q",
            "model": "Winter RW06",
            "name": "Hankook Winter RW06 185 R14C 102\/100Q",
            "ini_opt_price": "1686,00",
            "amount": 4,
            "supplier": "kiev_Шинные технологии",
            "ini_rozn_price": "0,00",
            "season": "зимняя",
            "country": "Hungary",
            "wehicle_type": "микроавтобус",
            "reinforced": "C",
            "photo": "products\/1000001660.jpg",
            "ship": "нешип",
            "width": "185"
        }],
    },
    computed:{
        brands () {
            return [...new Set(this.tiers.map(p => p.brand))]
        },
        heights(){
            return [...new Set(this.tiers.map(p => p.height))]
        },
        selectedVal(){
            return `${this.brand} ${this.height} ${this.width} ${this.diameter} ${this.season} ${this.ship} ${this.reinforced}`
        }
    },
    methods: {
        // valTest(){
        //     this.validateFilter(this.brand,this.height,this.width,this.diameter,this.season,this.ship,this.reinforced)
        //     console.log(this.isValidated);
        // },
        // validateFilter(...values) {
        //     this.isValidated = false;
        //     let flag = false;
        //     values.forEach((item,i)=>{
        //         if(item===''){
        //             this.isValidated = false;
        //             flag = true;
        //         }else {
        //             this.isValidated = true;
        //         }
        //     });
        //     if(flag){this.isValidated = false}
        // }
    }
});

