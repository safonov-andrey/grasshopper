import { createRouter, createWebHashHistory } from 'vue-router';
import GhHome from './modules/home/gh-home.vue';

const routes = [
    { path: '/', component: GhHome },
];

export const router = createRouter({
    history: createWebHashHistory(),
    routes,
});
