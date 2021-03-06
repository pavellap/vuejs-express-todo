import Vue from 'vue'
import Router from 'vue-router'
import Home from "@/Views/Home";

Vue.use(Router);


export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: Home,
            meta: {
                layout: "auth"
            }
        },
        {
            path: '/todos',
            component: () => import('@/Views/Todos.vue')
        }
    ],
})
