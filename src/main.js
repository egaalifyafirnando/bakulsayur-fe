import { createApp } from 'vue';
import App from './App.vue';

const app = createApp(App);

// DEFINE MIXINS FOR GLOBAL FUNCTION
app.mixin({
    methods: {
        // MONEY FORMAT THOUSANDS
        moneyFormat(number) {
            let reverse = number.toString().split('').reverse().join(''),
                thousands = reverse.match(/\d{1,3}/g);

            thousands = thousands.join('.').split('').reverse().join('');
            return thousands;
        },

        // CALCULATE DISCOUNT
        calculateDiscount(product) {
            return product.price - (product.price * product.discount) / 100;
        },
    },
});

app.mount('#app');