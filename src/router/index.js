import { createRouter, createWebHistory } from 'vue-router';
import store from '@/store';

// DEFINE ROUTES
const routes = [
    {
        path: '/register',
        name: 'register',
        component: () => import('@/views/auth/Register.vue'),
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('@/views/auth/Login.vue'),
    },
    {
        path: '/customer/dashboard',
        name: 'dashboard',
        component: () => import('@/views/dashboard/Index.vue'),

        // CHECK "isLoggedIn"
        meta: {
            requiresAuth: true,
        },
    },
    {
        path: '/customer/order',
        name: 'order',
        component: () => import('@/views/order/Index.vue'),

        // CHECK "isLoggedIn"
        meta: {
            requiresAuth: true,
        },
    },
    {
        path: '/customer/order/:snap_token',
        name: 'detail_order',
        component: () => import('@/views/order/Show.vue'),

        // CHECK "isLoggedIn"
        meta: {
            requiresAuth: true,
        },
    },
    {
        path: '/',
        name: 'home',
        component: () => import('@/views/home/Index.vue'),
    },
];

// CREATE ROUTER
const router = createRouter({
    history: createWebHistory(),
    routes: routes,
});

// DEFINE ROUTE FOR HANDLE AUTHENTICATION
router.beforeEach((to, from, next) => {
    if (to.matched.some((record) => record.meta.requiresAuth)) {
        // CHECK VALUE FROM GETTERS "isLoggedIn" IN MODULE "AUTH"
        if (store.getters['auth/isLoggedIn']) {
            next();
            return;
        }
        next();
        return;
    } else {
        next();
    }
});

export default router;
