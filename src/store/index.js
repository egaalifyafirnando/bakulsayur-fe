import { createStore } from 'vuex';

import auth from './module/auth';
import order from './module/order';
import category from './module/category';
import slider from './module/slider';

// EXPORT STORE VUEX
export default createStore({
    modules: {
        auth,
        order,
        category,
        slider,
    },
});
